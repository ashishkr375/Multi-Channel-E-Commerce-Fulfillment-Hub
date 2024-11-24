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
