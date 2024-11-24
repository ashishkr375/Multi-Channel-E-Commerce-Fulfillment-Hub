# Admin Portal for E-Commerce Store Management

## Overview

This admin portal is a React.js-based web application designed to manage multiple e-commerce stores, orders, products, categories, and tasks. The application includes several features for efficient management of your e-commerce operations, including product management, order management, and integration with different store platforms (dummy data currently in place).

### **Note on Dummy Data and MCF API Integration:**

I have applied for an Amazon Seller account to use the **MCF API (Multi-Channel Fulfillment API)** for actual integration. However, due to certain verification issues with the Amazon Seller account, I was unable to get my account verified at the time of development. 

As the MCF API requires a **Seller Professional Account** for use, I am currently using **dummy data** for demonstrating the features that would eventually be integrated once the account verification is complete. Please be aware of this while testing the application.

Once my Amazon Seller account is verified, I will integrate the real data from the MCF API into the system, and all features depending on Amazon integration will be updated accordingly.

## Features

The admin portal provides the following key features:

### 1. **Order Management**
   - View and manage orders.
   - The order section currently pulls data from all connected stores. However, this data is **dummy** and is used only for demonstration purposes.

### 2. **MCF Status**
   - View the Multi-Channel Fulfillment (MCF) status for orders (dummy data in use).

### 3. **Invoice Printing**
   - Generate invoices for orders.
   - Invoice data is available based on dummy order data.

### 4. **Store Management**
   - Add multiple stores directly to the portal.
   - This feature allows you to manage several stores, but please note that store data is currently based on static data (dummy data) for demonstration.

### 5. **Product Management**
   - Add, edit, and manage products across all connected stores.
   - When a product is added or edited, it will automatically be updated across all the stores connected via the application.
   - The product management system is integrated with dummy data at the moment.

### 6. **Category Management**
   - Manage product categories in the application.
   - Add or modify categories that can be associated with products.

### 7. **FAQ Section**
   - The FAQ section provides answers to common questions and explains what the application does.
   - This is helpful for understanding the system and how to make the most of the features.

### 8. **Calendar Section**
   - Add and manage deadlines, tasks, or any important dates.
   - The calendar helps keep track of events and deadlines related to your e-commerce operations.

### **Important Note on Data**:
   - As mentioned earlier, **dummy data** is being used in place of actual store and order data due to the current lack of access to verified Amazon Seller accounts and MCF API. 
   - All features are fully functional with static data, but real-time integration will be implemented once my Amazon Seller account is verified and the MCF API access is granted.

## Installation

To run the admin portal locally, follow the instructions below:

1. **Clone the repository**:
   ```
   git clone [https://github.com/your-username/admin-portal.git](https://github.com/ashishkr375/Multi-Channel-E-Commerce-Fulfillment-Hub.git)
   cd Multi-Channel-E-Commerce-Fulfillment-Hub
   cd Admin Portal
   ```

2. **Install the dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

   The application will be available at `http://localhost:3000/` in your browser.

## Development

- **React.js**: The project is built with React.js for the frontend.
- **State Management**: We are using React's `useState`, `useEffect`, and Context API for managing state across the app.
- **Styling**: The application uses **Material-UI** for consistent and responsive design.

## Future Enhancements

Once my **Amazon Seller Professional Account** is verified and MCF API access is granted, the following features will be updated:

- **Real-time order data**: The order management section will fetch real-time order data from Amazon and other connected stores.
- **Product Syncing**: Products added or modified in the product management section will sync with all connected stores automatically, powered by live APIs.
- **MCF API Integration**: The Multi-Channel Fulfillment status and order fulfillment process will be powered by live data from Amazon’s MCF API.

## Contact

For any questions, suggestions, or issues, feel free to reach out via email at:  
**Your Email Here**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

> **Disclaimer**: This application is still under development, and some features rely on dummy data due to the current lack of access to real-time APIs (MCF API). Real-time data integration will be implemented once the Amazon Seller account is verified.
```

### Key Points in the README:

1. **Dummy Data**: Clearly explain the use of dummy data in place of real API integrations due to the pending Amazon Seller account verification.
   
2. **Features**: List the features in the portal such as order management, MCF status, invoice printing, etc., while emphasizing the static nature of data.

3. **Installation & Setup**: Provide steps to install and run the application locally.

4. **Future Enhancements**: Mention that the real-time data integration (e.g., from the MCF API) will be included once the Amazon Seller account is verified.

This version of the README should now properly display with correct markdown formatting. Let me know if you need any further adjustments!
