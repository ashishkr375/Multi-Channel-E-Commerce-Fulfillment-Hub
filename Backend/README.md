
# Backend for E-Commerce Store Management API

## Overview

This backend service is responsible for handling API calls and providing data for the admin portal. It currently supports integration with **Shopify** to manage e-commerce operations such as orders, products, and store management. Placeholder integrations are available for other platforms, and future integrations will be added when access to respective APIs is granted.

### **Note on Integration with Shopify**:
At present, only the Shopify API is fully integrated. This integration allows us to fetch data related to orders, products, and store management. **Other e-commerce platforms** such as Amazon, WooCommerce, and others are placeholders and will be integrated once their respective developer accounts are activated.

### **Important Note on MCF API Integration**:
I have applied for an Amazon Seller Professional Account to use the **MCF API (Multi-Channel Fulfillment API)** for real-time order management and fulfillment. However, due to verification issues with Amazon, the account is not yet active. 

Once my Amazon Seller account is verified and I gain access to the MCF API, I will automate the entire process, including order fulfillment and syncing of data across all platforms. Currently, the system is using **static dummy data** for those sections, but real-time integration will be added as soon as the MCF account is activated.

## Features

### 1. **Shopify Integration**
   - Fetch data related to Shopify stores, products, and orders.
   - Control everything related to Shopify directly from the admin portal.
   - Features include:
     - Order Management
     - Product Management
     - Store Management
     - Inventory Updates

### 2. **Placeholder Integrations for Other Platforms**
   - Placeholder code for integration with other platforms such as **Amazon**, **WooCommerce**, **BigCommerce**, etc.
   - These integrations are currently inactive but can be activated once the respective API access is granted.

### 3. **MCF API Placeholder**
   - Currently, **dummy data** is used for the Multi-Channel Fulfillment process.
   - Once the Amazon Seller account is verified and MCF API is activated, the entire process will be automated, including order fulfillment, status updates, and inventory management.

## Installation

Follow these steps to set up the backend API service:

### 1. **Clone the repository**:
   ```bash
   git clone https://github.com/ashishkr375/Multi-Channel-E-Commerce-Fulfillment-Hub.git
   cd Multi-Channel-E-Commerce-Fulfillment-Hub
   cd Backend
   ```

### 2. **Install dependencies**:
   Ensure that **Node.js** is installed on your system, and then install the required dependencies:
   ```bash
   npm install
   ```

### 3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your API credentials, particularly for Shopify integration:
   ```env
   SHOPIFY_API_KEY=your-shopify-api-key
   SHOPIFY_API_PASSWORD=your-shopify-api-password
   SHOPIFY_STORE_URL=your-shopify-store-url
   PORT=5000
   ```

   For the MCF API (once available), add the necessary credentials:
   ```env
   AMAZON_MCF_API_KEY=your-amazon-mcf-api-key
   ```

### 4. **Start the API server**:
   ```bash
   npm start
   ```

   The server will start running on `http://localhost:5000` (default).

## API Endpoints

### **Shopify Integration Endpoints**

- **GET /shopify/orders**: Fetch all orders from the connected Shopify store.
- **GET /shopify/products**: Fetch all products listed in the Shopify store.
- **POST /shopify/order/fulfill**: Fulfill an order in the Shopify store.
- **POST /shopify/product/add**: Add a new product to the Shopify store.
- **PUT /shopify/product/update**: Update an existing product in the Shopify store.

### **Placeholder Endpoints for Other Platforms**
- **GET /woocommerce/orders**: Fetch all orders from WooCommerce (currently inactive).
- **GET /woocommerce/products**: Fetch all products from WooCommerce (currently inactive).
- **POST /amazon/mcf/fulfill**: Fulfill an order via Amazon MCF API (currently using placeholder data).

## Future Enhancements

- **MCF API Integration**: Once the Amazon Seller Professional Account is verified and MCF API access is granted, all processes related to order fulfillment, inventory management, and shipping will be automated across all connected platforms.
- **More E-Commerce Platform Integrations**: Full support for WooCommerce, BigCommerce, and other platforms will be added, with live API integrations to fetch real-time data for orders, products, and store management.

## Development

- **Node.js** is used as the backend runtime environment.
- **Express.js** framework is used to handle API requests and routing.
- **Shopify API** is integrated for fetching store data.
- Placeholder logic is included for other platforms, which will be activated once the respective developer accounts are set up.
- **Environment variables** are used for storing sensitive information such as API keys and credentials.

## Contact

For any issues, questions, or suggestions, feel free to reach out via email at:  
**Your Email Here**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE).
```

### Key points:
- **Shopify Integration**: Fully functional Shopify integration for managing orders and products.
- **Placeholder Integration**: Placeholder for WooCommerce, Amazon, and other platforms.
- **MCF API**: Placeholder for the Amazon MCF API integration, will be activated once the Amazon Seller account is verified.
- **Dummy Data**: Currently using dummy data for demonstration purposes in place of real-time data.

This backend `README.md` provides an overview, installation instructions, API endpoints, and future plans for integrating additional e-commerce platforms and real-time data once the MCF API is available.