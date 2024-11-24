# Multi-Channel-E-Commerce-Fulfillment-Hub
Centralized tool for seamless integration with Amazon MCF, automating inventory, orders, and shipments across platforms.


# E-Commerce Store Management System (Frontend & Backend)

## Overview

This repository contains the full-stack application for managing multiple e-commerce stores. The application allows admins to connect and manage different e-commerce platforms like Shopify, WooCommerce, and more (Shopify is fully integrated at the moment). It offers features like product management, order management, and store management, all accessible through a central admin portal.

### Current Status:
- **Frontend**: Developed using **React.js** (Admin portal UI).
- **Backend**: Built with **Node.js** and **Express.js**, currently integrated with Shopify's API (other e-commerce platforms are placeholders).
- **Dummy Data**: Due to verification issues with Amazon's seller account, the MCF (Multi-Channel Fulfillment) API integration is on hold, and the application uses static/dummy data for some sections.

Once Amazon's Seller Professional Account is activated, MCF API will be fully integrated, and real-time data will replace the dummy data.

## Features

### Frontend (Admin Portal)
- **Dashboard** to manage stores, orders, products, and invoices.
- **Store Management**: Add, manage, and view all connected e-commerce stores (Shopify integrated, placeholders for others).
- **Product Management**: Add, edit, and remove products across connected stores.
- **Order Management**: View and manage orders from all connected stores.
- **MCF Status**: Placeholder for Multi-Channel Fulfillment process (using dummy data).
- **Invoice Printing**: Generate and print invoices for orders.
- **Calendar**: Manage deadlines and tasks.
- **FAQ Section**: Provides details about the app’s features and integrations.

### Backend (API)
- **Shopify API Integration**: Fetch orders, products, and manage the Shopify store directly from the backend.
- **Placeholder APIs**: Placeholder endpoints for other e-commerce platforms (WooCommerce, Amazon, etc.).
- **MCF API Placeholder**: Currently using dummy data for order fulfillment, will be fully automated once the MCF account is activated.
- **Environment Variables**: API keys and other sensitive information are securely managed through environment variables.

## Project Structure

```
/root
  /frontend            # React.js frontend for admin portal
  /backend             # Node.js/Express backend API
  /README.md           # Combined README file
```

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js**: Required to run both the frontend and backend.
- **npm** or **yarn**: Required to manage dependencies.

### Shopify API
To connect Shopify with the admin portal, you'll need to generate an API key and password from your Shopify developer account. Please make sure to set these up in the `.env` file.

For integration with the MCF API, once your Amazon seller account is verified, you'll also need to configure the relevant MCF API keys in the `.env` file.

## Installation and Setup

### 1. **Clone the repository**:
   ```bash
   git clone https://github.com/ashishkr375/Multi-Channel-E-Commerce-Fulfillment-Hub.git
   cd Multi-Channel-E-Commerce-Fulfillment-Hub
   ```

### 2. **Install dependencies for both frontend and backend**:

   - **Frontend** (React.js):
     ```bash
     cd Admin Portal
     npm install
     ```

   - **Backend** (Node.js/Express):
     ```bash
     cd Backend
     npm install
     ```

### 3. **Configure Environment Variables**:
   Create a `.env` file in the root directory of both `frontend` and `backend` folders, and add the necessary API keys and credentials.

   **Backend `.env` Example**:
   ```env
   SHOPIFY_API_KEY=your-shopify-api-key
   SHOPIFY_API_PASSWORD=your-shopify-api-password
   SHOPIFY_STORE_URL=your-shopify-store-url
   AMAZON_MCF_API_KEY=your-amazon-mcf-api-key   # Placeholder until MCF is activated
   ```

   **Frontend `.env` Example** (if needed for API calls):
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

### 4. **Start the backend server**:
   Navigate to the `backend` directory and start the API server:
   ```bash
   cd Backend
   node app.js
   ```

   The backend API will be available at `http://localhost:5000`.

### 5. **Start the frontend server**:
   Navigate to the `frontend` directory and start the React app:
   ```bash
   cd Admin Portal
   npm start
   ```

   The React frontend will be available at `http://localhost:3000`.

## How the App Works

1. **Connect Stores**: 
   - The frontend allows you to connect multiple e-commerce stores by entering credentials (currently, Shopify is fully integrated).
   - For other platforms, placeholder forms are present, but functionality is inactive until the platform's API access is granted.

2. **Product Management**:
   - You can add, update, and delete products. Any changes made to a product will be reflected across all connected stores (Shopify at present).

3. **Order Management**:
   - View all orders from all connected stores. The order data is fetched from Shopify's API (other stores' data is placeholder).

4. **MCF Integration (Placeholder)**:
   - Currently, dummy data is used to simulate MCF functionality for order fulfillment.
   - Once the Amazon Seller Professional Account is verified and MCF API is integrated, the system will automate order fulfillment.

5. **Invoices and Reports**:
   - Generate invoices for each order directly from the admin portal.

6. **Calendar**:
   - Track deadlines, tasks, and important dates related to your stores and orders.

7. **FAQ Section**:
   - Provides answers to common questions about the platform’s features and integrations.

## Future Enhancements

- **Multi-Channel Fulfillment (MCF) API**: Automate order fulfillment once the MCF API is integrated after Amazon Seller account verification.
- **Integration with Other Platforms**: WooCommerce, BigCommerce, and other e-commerce platforms will be fully integrated once their developer accounts are active.
- **Real-Time Data**: Replace static data with real-time data for all connected stores after API access is set up.

## Development

The development environment is set up using:
- **Node.js** for the backend.
- **React.js** for the frontend.

If you want to contribute or make changes, feel free to fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE).
```

### Key points in the combined `README.md`:
1. **Frontend** is built with React.js and provides the admin portal.
2. **Backend** uses Node.js/Express to handle API calls, with current Shopify integration and placeholders for other platforms.
3. **Environment variables** are used to securely manage API keys and credentials.
4. Instructions to install, configure, and run both frontend and backend.
5. Mention that **MCF integration** and real-time data are placeholders until the Amazon Seller account is verified.
6. **Future plans** include integrating more e-commerce platforms and automating the MCF process when available.

This structure ensures that both the frontend and backend parts of the project are clearly outlined, along with the features, current limitations, and future enhancements.
