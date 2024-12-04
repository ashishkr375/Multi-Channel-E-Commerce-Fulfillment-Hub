require("dotenv").config();
const express = require("express");
const Shopify = require("shopify-api-node");

const router = express.Router();

// Initialize Shopify API client
const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOP_NAME,
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_PASSWORD,
  timeout: 10000,
});

// Route to get all products
router.get("/products", async (req, res) => {
  try {
    const products = await shopify.product.list();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products from Shopify" });
  }
});

// Route to add a new product
router.post("/add-product", async (req, res) => {
  try {
    const { title, body_html, vendor, price, quantity, image_url } = req.body;

    const productData = {
      title,
      body_html,
      vendor,
      variants: [
        {
          price,
          inventory_quantity: quantity,
        },
      ],
      images: [
        {
          src: image_url,
        },
      ],
    };

    const product = await shopify.product.create(productData);
    res.status(200).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product to Shopify" });
  }
});

// Route to get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await shopify.order.list();
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders from Shopify" });
  }
});

// Route to get transactions for all orders
router.get("/transactions", async (req, res) => {
  try {
    // Fetch all orders
    const orders = await shopify.order.list({ status: "any" });  // Modify this to filter by status if needed
    
    // Loop through each order to get its transactions
    const allTransactions = [];
    for (const order of orders) {
      const transactions = await shopify.transaction.list(order.id);
      allTransactions.push(...transactions);  // Append transactions to the array
    }

    // Return all transactions
    res.json(allTransactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});


// Route to update order fulfillment status
router.put("/order/fulfillment/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    // Check if the status is valid
    const validStatuses = ["unfulfilled", "fulfilled", "in_progress", "shipped", "partially_fulfilled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid fulfillment status" });
    }


    const order = await shopify.order.get(orderId);

    // Update fulfillment status
    if (status === "fulfilled") {
     
      const fulfillmentData = {
        order_id: order.id,
        tracking_numbers: ["tracking_number_here"], // Replace with real tracking number
        tracking_urls: ["tracking_url_here"], // Replace with real tracking URL
        status: "success",
      };
      const fulfillment = await shopify.fulfillment.create(order.id, fulfillmentData);
      return res.status(200).json({ message: "Order marked as fulfilled", fulfillment });
    }



    // For other statuses, we can update the order's status directly
    const updatedOrder = await shopify.order.update(orderId, {
      financial_status: status === "unfulfilled" ? "unpaid" : "paid",
      fulfillment_status: status,
    });

    res.status(200).json({ message: "Order fulfillment status updated", updatedOrder });
  } catch (error) {
    console.error("Error updating fulfillment status:", error);
    res.status(500).json({ error: "Failed to update order fulfillment status" });
  }
});

module.exports = router;
