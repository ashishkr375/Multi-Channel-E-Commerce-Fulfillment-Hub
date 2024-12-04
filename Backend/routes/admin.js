require("dotenv").config();
const express = require("express");
const axios = require("axios");

const router = express.Router();

//placeholder for future platform APIs (currently Shopify)
const shopifyApiUrl = process.env.SHOPIFY_API_URL;  // Shopify API URL
const otherPlatformApiUrls = [
  // Placeholder URLs for other platforms
  // { name: "WooCommerce", url: process.env.WOOCOMMERCE_API_URL },
  // { name: "BigCommerce", url: process.env.BIGCOMMERCE_API_URL }
];

// Utility function to fetch from Shopify API
const fetchShopifyProducts = async () => {
  try {
    const response = await axios.get(`${shopifyApiUrl}/products`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching Shopify products:", error);
    return []; 
  }
};

// Function to fetch products from other platforms (to be expanded for future integrations)
const fetchOtherPlatformProducts = async () => {
  const allProducts = [];
  for (const platform of otherPlatformApiUrls) {
    try {
      const response = await axios.get(`${platform.url}/products`);
      allProducts.push(...response.data);  // Collect products from each platform
    } catch (error) {
      console.error(`Error fetching products from ${platform.name}:`, error);
    }
  }
  return allProducts;
};

// Function to fetch transactions from Shopify
const fetchShopifyTransactions = async () => {
  try {
    const response = await axios.get(`${shopifyApiUrl}/transactions`);
    
    // Check if 'transactions' exists in response data
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error("No transactions data found or response format is incorrect.");
    }

    // Process and map the transactions
    const transactions = response.data.map((transaction) => ({
      id: transaction.id,
      order_id: transaction.order_id,
      kind: transaction.kind,
      gateway: transaction.gateway,
      status: transaction.status,
      message: transaction.message,
      created_at: transaction.created_at,
      processed_at: transaction.processed_at,
      amount: transaction.amount,
      currency: transaction.currency,
      payment_id: transaction.payment_id,
      total_unsettled_set: transaction.total_unsettled_set?.presentment_money?.amount || "0.0",
      card_details: {
        credit_card_number: transaction.payment_details?.credit_card_number || "Unknown",
        credit_card_company: transaction.payment_details?.credit_card_company || "Unknown",
        credit_card_name: transaction.payment_details?.credit_card_name || "Unknown",
        credit_card_expiration_month: transaction.payment_details?.credit_card_expiration_month || "Unknown",
        credit_card_expiration_year: transaction.payment_details?.credit_card_expiration_year || "Unknown",
      },
      pending_amount: transaction.total_unsettled_set?.presentment_money?.amount || "0.0",
      manual_payment_gateway: transaction.manual_payment_gateway,
      receipt_paid_amount: transaction.receipt?.paid_amount || "0.0",
    }));

    return transactions;

  } catch (error) {
    console.error("Error fetching transactions from Shopify:", error.message);
    return [];  // Return an empty array if something goes wrong
  }
};

//function to fetch transactions from other platforms (to be expanded for future integrations)
const fetchOtherPlatformTransactions = async () => {
  const allTransactions = [];
  for (const platform of otherPlatformApiUrls) {
    try {
      const response = await axios.get(``
      );
      allTransactions.push(...response.data.transactions);
    } catch (error) {
      console.error(`Error fetching transactions from ${platform.name}:`, error);
    }
  }
  return allTransactions;
};
// Route to get recent transactions from Shopify and other platforms
router.get("/recent-transactions", async (req, res) => {
  try {
    // Fetch transactions from Shopify
    const shopifyTransactions = await fetchShopifyTransactions();
    
    // Fetch products or transactions from other platforms
    const otherPlatformTransactions = await fetchOtherPlatformTransactions(); // Add your other platform API function here
    
   
    const allTransactions = [...shopifyTransactions, ...otherPlatformTransactions];
    
    
    const transactions = allTransactions.map((transaction) => ({
      txId: transaction.id,
      user: transaction.user || transaction.vendor || transaction.platformName || "Unknown",
      date: transaction.created_at || "Unknown",
      amount: transaction.amount || "Unknown",
      currency: transaction.currency || "Unknown",
      status: transaction.status || "Unknown",
      gateway: transaction.gateway || "Unknown",
      card_holder_name: transaction.card_details?.credit_card_name || "Unknown",
      card_last_digits: transaction.card_details?.credit_card_number?.slice(-4) || "Unknown",
      payment_method: transaction.payment_id || "Unknown",
      pending_amount: transaction.pending_amount || "0.0",
    }));
    
    res.json(transactions);
  } catch (error) {
    console.error("Error fetching recent transactions:", error);
    res.status(500).json({ error: "Failed to fetch recent transactions" });
  }
});




// Route to get all products from Shopify and other platforms
router.get("/products", async (req, res) => {
  try {
    // Fetch products from Shopify
    const shopifyProducts = await fetchShopifyProducts();

    // Fetch products from other platforms (currently empty but will expand for other platforms)
    const otherPlatformProducts = await fetchOtherPlatformProducts();

    // Combine the results from Shopify and other platforms
    const combinedProducts = [
      ...shopifyProducts.map((product) => ({
        id: product.id,
        platform: "Shopify",
        name: product.title,
        price: product.variants[0].price,
        quantity: product.variants[0].inventory_quantity,
        stockStatus: product.variants[0].inventory_quantity > 0 ? "In Stock" : "Out of Stock",
      })),
      ...otherPlatformProducts.map((product) => ({
        platform: product.platformName || "Other",  // Placeholder for future platform names
        name: product.name,
        price: product.price,
        quantity: product.stock_quantity,
        stockStatus: product.stock_quantity > 0 ? "In Stock" : "Out of Stock",
      }))
    ];

    // Return combined products to frontend
    res.json(combinedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Route to get the product count from all platforms
router.get("/product-count", async (req, res) => {
  try {
    // Fetch products from Shopify
    const shopifyProducts = await fetchShopifyProducts();

    // Fetch products from other platforms
    const otherPlatformProducts = await fetchOtherPlatformProducts();

    // Return total count of products across all platforms
    res.json({ count: shopifyProducts.length + otherPlatformProducts.length });
  } catch (error) {
    console.error("Error fetching product count:", error);
    res.status(500).json({ error: "Failed to fetch product count" });
  }
});

// Route to get all orders (Currently only Shopify)
router.get("/orders", async (req, res) => {
  try {
    const response = await axios.get(`${shopifyApiUrl}/orders`);
    res.json(response.data);  // Return Shopify orders
  } catch (error) {
    console.error("Error fetching Shopify orders:", error);
    res.status(500).json({ error: "Failed to fetch orders from Shopify" });
  }
});

// Route to get the order count (Currently only Shopify)
router.get("/order-count", async (req, res) => {
  try {
    const response = await axios.get(`${shopifyApiUrl}/orders`);
    res.json({ count: response.data.length });  // Return the count of orders
  } catch (error) {
    console.error("Error fetching order count:", error);
    res.status(500).json({ error: "Failed to fetch order count" });
  }
});

// Route to add a product to Shopify (this will be expanded for future platforms)
router.post("/add-product", async (req, res) => {
  try {
    const { title, body_html, vendor, price, quantity, image_url } = req.body;

    // Send the request to Shopify to add a new product
    const response = await axios.post(`${shopifyApiUrl}/add-product`, {
      title,
      body_html,
      vendor,
      price,
      quantity,
      image_url
    });

    res.status(200).json({ message: "Product added successfully", product: response.data });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// Future placeholder to add products to other platforms (to be expanded)
router.post("/add-product-other", async (req, res) => {
  // Placeholder for adding a product to other platforms like WooCommerce, BigCommerce, etc.
  res.status(200).json({ message: "Product added to other platform (to be implemented)" });
});

module.exports = router;
