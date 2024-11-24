import { tokens } from "../theme";

export const mockDataOrders = [
  {
    id: 1,
    productName: "Blue Denim Jacket",
    price: 1200,
    quantity: 2,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 2,
    productName: "Red Cotton Shirt",
    price: 800,
    quantity: 1,
    platform: "WooCommerce",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 3,
    productName: "Leather Wallet",
    price: 1500,
    quantity: 3,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 4,
    productName: "Canvas Shoes",
    price: 2200,
    quantity: 1,
    platform: "WooCommerce",
    paymentStatus: "Paid",
    mcfStatus: "Pending",
  },
  {
    id: 5,
    productName: "Silk Scarf",
    price: 700,
    quantity: 4,
    platform: "Shopify",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 6,
    productName: "Wool Sweater",
    price: 1800,
    quantity: 2,
    platform: "WooCommerce",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 7,
    productName: "Digital Watch",
    price: 5000,
    quantity: 1,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 8,
    productName: "Portable Charger",
    price: 1200,
    quantity: 3,
    platform: "WooCommerce",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 9,
    productName: "Bluetooth Headphones",
    price: 3500,
    quantity: 2,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 10,
    productName: "Kitchen Blender",
    price: 3000,
    quantity: 1,
    platform: "WooCommerce",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 11,
    productName: "Gaming Mouse",
    price: 1500,
    quantity: 2,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 12,
    productName: "Yoga Mat",
    price: 800,
    quantity: 3,
    platform: "WooCommerce",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 13,
    productName: "Travel Backpack",
    price: 2400,
    quantity: 1,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 14,
    productName: "LED Desk Lamp",
    price: 900,
    quantity: 4,
    platform: "WooCommerce",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 15,
    productName: "Wireless Keyboard",
    price: 1600,
    quantity: 2,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 16,
    productName: "Ceramic Dinner Set",
    price: 3200,
    quantity: 1,
    platform: "WooCommerce",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 17,
    productName: "Smartphone Stand",
    price: 500,
    quantity: 5,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 18,
    productName: "Running Shoes",
    price: 2600,
    quantity: 1,
    platform: "WooCommerce",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 19,
    productName: "Stainless Steel Bottle",
    price: 700,
    quantity: 3,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 20,
    productName: "Faux Leather Handbag",
    price: 2700,
    quantity: 1,
    platform: "WooCommerce",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 21,
    productName: "Cotton Bed Sheets",
    price: 1500,
    quantity: 2,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 22,
    productName: "Kitchen Knife Set",
    price: 2000,
    quantity: 1,
    platform: "WooCommerce",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 23,
    productName: "Wireless Earbuds",
    price: 4000,
    quantity: 1,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
  {
    id: 24,
    productName: "Foldable Laptop Stand",
    price: 1200,
    quantity: 2,
    platform: "WooCommerce",
    paymentStatus: "Pending",
    mcfStatus: "Pending",
  },
  {
    id: 25,
    productName: "Wall Art Painting",
    price: 3000,
    quantity: 1,
    platform: "Shopify",
    paymentStatus: "Paid",
    mcfStatus: "Fulfilled",
  },
];


export const mockDataMCFStatus = [
  { id: "OD12345", platform: "Amazon", mcfStatus: "Fulfilled", warehouse: "Mumbai", shipmentStatus: "Shipped", deliveryDate: "2024-12-01", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12346", platform: "Shopify", mcfStatus: "Pending", warehouse: "Delhi", shipmentStatus: "Processing", deliveryDate: "2024-12-03", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12347", platform: "eBay", mcfStatus: "Fulfilled", warehouse: "Chennai", shipmentStatus: "Delivered", deliveryDate: "2024-12-02", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12348", platform: "Myntra", mcfStatus: "Cancelled", warehouse: "Bangalore", shipmentStatus: "N/A", deliveryDate: "N/A", customerFeedback: "N/A", returnStatus: "Yes" },
  { id: "OD12349", platform: "WooCommerce", mcfStatus: "Pending", warehouse: "Kolkata", shipmentStatus: "Processing", deliveryDate: "2024-12-04", customerFeedback: "Negative", returnStatus: "Yes" },
  { id: "OD12350", platform: "Amazon", mcfStatus: "Fulfilled", warehouse: "Hyderabad", shipmentStatus: "Delivered", deliveryDate: "2024-12-01", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12351", platform: "Flipkart", mcfStatus: "Cancelled", warehouse: "Delhi", shipmentStatus: "N/A", deliveryDate: "N/A", customerFeedback: "Negative", returnStatus: "Yes" },
  { id: "OD12352", platform: "WooCommerce", mcfStatus: "Fulfilled", warehouse: "Mumbai", shipmentStatus: "Shipped", deliveryDate: "2024-12-01", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12353", platform: "Shopify", mcfStatus: "Pending", warehouse: "Chennai", shipmentStatus: "Processing", deliveryDate: "2024-12-05", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12354", platform: "Snapdeal", mcfStatus: "Fulfilled", warehouse: "Kolkata", shipmentStatus: "Delivered", deliveryDate: "2024-12-02", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12355", platform: "Amazon", mcfStatus: "Pending", warehouse: "Bangalore", shipmentStatus: "Processing", deliveryDate: "2024-12-03", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12356", platform: "Flipkart", mcfStatus: "Cancelled", warehouse: "Delhi", shipmentStatus: "N/A", deliveryDate: "N/A", customerFeedback: "Negative", returnStatus: "Yes" },
  { id: "OD12357", platform: "Shopify", mcfStatus: "Fulfilled", warehouse: "Mumbai", shipmentStatus: "Delivered", deliveryDate: "2024-12-02", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12358", platform: "WooCommerce", mcfStatus: "Fulfilled", warehouse: "Hyderabad", shipmentStatus: "Shipped", deliveryDate: "2024-12-04", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12359", platform: "Myntra", mcfStatus: "Pending", warehouse: "Chennai", shipmentStatus: "Processing", deliveryDate: "2024-12-06", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12360", platform: "Shopify", mcfStatus: "Cancelled", warehouse: "Kolkata", shipmentStatus: "N/A", deliveryDate: "N/A", customerFeedback: "Negative", returnStatus: "Yes" },
  { id: "OD12361", platform: "Amazon", mcfStatus: "Fulfilled", warehouse: "Delhi", shipmentStatus: "Delivered", deliveryDate: "2024-12-01", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12362", platform: "Flipkart", mcfStatus: "Pending", warehouse: "Mumbai", shipmentStatus: "Processing", deliveryDate: "2024-12-02", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12363", platform: "WooCommerce", mcfStatus: "Cancelled", warehouse: "Bangalore", shipmentStatus: "N/A", deliveryDate: "N/A", customerFeedback: "Negative", returnStatus: "Yes" },
  { id: "OD12364", platform: "Myntra", mcfStatus: "Fulfilled", warehouse: "Hyderabad", shipmentStatus: "Shipped", deliveryDate: "2024-12-03", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12365", platform: "Shopify", mcfStatus: "Pending", warehouse: "Chennai", shipmentStatus: "Processing", deliveryDate: "2024-12-04", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12366", platform: "Flipkart", mcfStatus: "Fulfilled", warehouse: "Delhi", shipmentStatus: "Delivered", deliveryDate: "2024-12-05", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12367", platform: "eBay", mcfStatus: "Pending", warehouse: "Mumbai", shipmentStatus: "Processing", deliveryDate: "2024-12-06", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12368", platform: "Snapdeal", mcfStatus: "Cancelled", warehouse: "Kolkata", shipmentStatus: "N/A", deliveryDate: "N/A", customerFeedback: "Negative", returnStatus: "Yes" },
  { id: "OD12369", platform: "Shopify", mcfStatus: "Fulfilled", warehouse: "Hyderabad", shipmentStatus: "Shipped", deliveryDate: "2024-12-02", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12370", platform: "WooCommerce", mcfStatus: "Pending", warehouse: "Delhi", shipmentStatus: "Processing", deliveryDate: "2024-12-03", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12371", platform: "Amazon", mcfStatus: "Fulfilled", warehouse: "Mumbai", shipmentStatus: "Delivered", deliveryDate: "2024-12-01", customerFeedback: "Positive", returnStatus: "No" },
  { id: "OD12372", platform: "Flipkart", mcfStatus: "Pending", warehouse: "Bangalore", shipmentStatus: "Processing", deliveryDate: "2024-12-04", customerFeedback: "Neutral", returnStatus: "No" },
  { id: "OD12373", platform: "WooCommerce", mcfStatus: "Cancelled", warehouse: "Chennai", shipmentStatus: "N/A", deliveryDate: "N/A", customerFeedback: "Negative", returnStatus: "Yes" },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@example.in",
    cost: 120.75,
    date: "2024-11-10",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK123456789",
    shippingAddress: "B-35, Sector 5, Noida, Uttar Pradesh, 201301",
    expectedDelivery: "2024-11-12",
    currentLocation: "Noida, UP",
    transportationCompany: "Blue Dart",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    phone: "+91 99876 54321",
    email: "anjali.sharma@example.in",
    cost: 250.40,
    date: "2024-11-12",
    shipmentStatus: "Delivered",
    trackingNumber: "TRK987654321",
    shippingAddress: "123 MG Road, Bangalore, Karnataka, 560001",
    expectedDelivery: "2024-11-14",
    currentLocation: "Bangalore, Karnataka",
    transportationCompany: "DTDC",
  },
  {
    id: 3,
    name: "Vikram Singh",
    phone: "+91 81234 56789",
    email: "vikram.singh@example.in",
    cost: 180.30,
    date: "2024-11-15",
    shipmentStatus: "In Transit",
    trackingNumber: "TRK1122334455",
    shippingAddress: "101, Green Park, New Delhi, Delhi, 110016",
    expectedDelivery: "2024-11-18",
    currentLocation: "New Delhi, Delhi",
    transportationCompany: "India Post",
  },
  {
    id: 4,
    name: "Priya Patel",
    phone: "+91 83456 78901",
    email: "priya.patel@example.in",
    cost: 85.60,
    date: "2024-11-13",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK5566778899",
    shippingAddress: "22, Janakpuri, Jaipur, Rajasthan, 302017",
    expectedDelivery: "2024-11-16",
    currentLocation: "Jaipur, Rajasthan",
    transportationCompany: "Blue Dart",
  },
  {
    id: 5,
    name: "Suresh Reddy",
    phone: "+91 92456 78904",
    email: "suresh.reddy@example.in",
    cost: 145.00,
    date: "2024-11-12",
    shipmentStatus: "Delivered",
    trackingNumber: "TRK6677889900",
    shippingAddress: "15, Gachibowli, Hyderabad, Telangana, 500032",
    expectedDelivery: "2024-11-14",
    currentLocation: "Hyderabad, Telangana",
    transportationCompany: "XpressBees",
  },
  {
    id: 6,
    name: "John Doe",
    phone: "+1 555-987-6543",
    email: "johndoe@example.com",
    cost: 300.25,
    date: "2024-11-14",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK1010101010",
    shippingAddress: "123 Elm St, Springfield, IL, 62701, USA",
    expectedDelivery: "2024-11-20",
    currentLocation: "Chicago, IL",
    transportationCompany: "UPS",
  },
  {
    id: 7,
    name: "Amir Khan",
    phone: "+91 93123 45678",
    email: "amir.khan@example.in",
    cost: 220.45,
    date: "2024-11-11",
    shipmentStatus: "In Transit",
    trackingNumber: "TRK7778889990",
    shippingAddress: "Sector 14, Gurgaon, Haryana, 122001",
    expectedDelivery: "2024-11-13",
    currentLocation: "Gurgaon, Haryana",
    transportationCompany: "Delhivery",
  },
  {
    id: 8,
    name: "Emily Johnson",
    phone: "+44 20 7946 0958",
    email: "emily.johnson@example.uk",
    cost: 400.50,
    date: "2024-11-15",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK3456789012",
    shippingAddress: "221B Baker Street, London, NW1 6XE, UK",
    expectedDelivery: "2024-11-18",
    currentLocation: "London, UK",
    transportationCompany: "Royal Mail",
  },
  {
    id: 9,
    name: "Madhavi Deshmukh",
    phone: "+91 91765 43210",
    email: "madhavi.deshmukh@example.in",
    cost: 130.70,
    date: "2024-11-10",
    shipmentStatus: "Delivered",
    trackingNumber: "TRK1122334455",
    shippingAddress: "10, Jangpura, New Delhi, Delhi, 110014",
    expectedDelivery: "2024-11-13",
    currentLocation: "Delhi, Delhi",
    transportationCompany: "DTDC",
  },
  {
    id: 10,
    name: "Sanjay Gupta",
    phone: "+91 98123 45670",
    email: "sanjay.gupta@example.in",
    cost: 270.20,
    date: "2024-11-13",
    shipmentStatus: "In Transit",
    trackingNumber: "TRK5566778899",
    shippingAddress: "Block B, Koramangala, Bangalore, Karnataka, 560034",
    expectedDelivery: "2024-11-17",
    currentLocation: "Bangalore, Karnataka",
    transportationCompany: "FedEx",
  },
  {
    id: 11,
    name: "Carlos Mendoza",
    phone: "+34 699 345 672",
    email: "carlos.mendoza@example.es",
    cost: 500.00,
    date: "2024-11-16",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK8889997770",
    shippingAddress: "Calle Gran Vía, Madrid, 28013, Spain",
    expectedDelivery: "2024-11-20",
    currentLocation: "Madrid, Spain",
    transportationCompany: "SEUR",
  },
  {
    id: 12,
    name: "Neha Malhotra",
    phone: "+91 98765 43215",
    email: "neha.malhotra@example.in",
    cost: 320.50,
    date: "2024-11-18",
    shipmentStatus: "Delivered",
    trackingNumber: "TRK9098765432",
    shippingAddress: "Plot 8, New Friends Colony, Delhi, 110025",
    expectedDelivery: "2024-11-22",
    currentLocation: "Delhi, Delhi",
    transportationCompany: "India Post",
  },
  {
    id: 13,
    name: "David Lee",
    phone: "+1 213-456-7890",
    email: "david.lee@example.com",
    cost: 380.00,
    date: "2024-11-17",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK2223334444",
    shippingAddress: "45 Park Ave, New York, NY, 10016, USA",
    expectedDelivery: "2024-11-22",
    currentLocation: "New York, NY",
    transportationCompany: "FedEx",
  },
  {
    id: 14,
    name: "Rohit Yadav",
    phone: "+91 99988 77766",
    email: "rohit.yadav@example.in",
    cost: 140.30,
    date: "2024-11-12",
    shipmentStatus: "In Transit",
    trackingNumber: "TRK3334445555",
    shippingAddress: "Sector 25, Chandigarh, 160019",
    expectedDelivery: "2024-11-16",
    currentLocation: "Chandigarh, Punjab",
    transportationCompany: "Delhivery",
  },
  {
    id: 15,
    name: "Liam Brown",
    phone: "+44 7906 134 230",
    email: "liam.brown@example.uk",
    cost: 350.75,
    date: "2024-11-11",
    shipmentStatus: "Delivered",
    trackingNumber: "TRK4433221100",
    shippingAddress: "10 Downing Street, London, SW1A 2AA, UK",
    expectedDelivery: "2024-11-15",
    currentLocation: "London, UK",
    transportationCompany: "Royal Mail",
  },
  {
    id: 16,
    name: "Arvind Kumar",
    phone: "+91 90012 34567",
    email: "arvind.kumar@example.in",
    cost: 220.10,
    date: "2024-11-17",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK2233445566",
    shippingAddress: "B1, Sector 12, Gandhinagar, Gujarat, 382012",
    expectedDelivery: "2024-11-19",
    currentLocation: "Gandhinagar, Gujarat",
    transportationCompany: "XpressBees",
  },
  {
    id: 17,
    name: "Chloe Williams",
    phone: "+1 415-123-4567",
    email: "chloe.williams@example.com",
    cost: 270.00,
    date: "2024-11-15",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK3322114433",
    shippingAddress: "1001 California St, San Francisco, CA 94108, USA",
    expectedDelivery: "2024-11-19",
    currentLocation: "San Francisco, CA",
    transportationCompany: "UPS",
  },
  {
    id: 18,
    name: "Meena Joshi",
    phone: "+91 91234 67890",
    email: "meena.joshi@example.in",
    cost: 160.50,
    date: "2024-11-14",
    shipmentStatus: "Delivered",
    trackingNumber: "TRK5566778899",
    shippingAddress: "Ram Gali, Jodhpur, Rajasthan, 342001",
    expectedDelivery: "2024-11-17",
    currentLocation: "Jodhpur, Rajasthan",
    transportationCompany: "Delhivery",
  },
  {
    id: 19,
    name: "Ali Khan",
    phone: "+91 95023 45567",
    email: "ali.khan@example.in",
    cost: 200.30,
    date: "2024-11-13",
    shipmentStatus: "In Transit",
    trackingNumber: "TRK7788991122",
    shippingAddress: "7, Sultanpur, Lucknow, Uttar Pradesh, 226001",
    expectedDelivery: "2024-11-15",
    currentLocation: "Lucknow, UP",
    transportationCompany: "DTDC",
  },
  {
    id: 20,
    name: "Laura Gonzalez",
    phone: "+34 619 678 430",
    email: "laura.gonzalez@example.es",
    cost: 260.80,
    date: "2024-11-16",
    shipmentStatus: "Shipped",
    trackingNumber: "TRK8899006677",
    shippingAddress: "Avenida de la Constitución, Seville, 41001, Spain",
    expectedDelivery: "2024-11-18",
    currentLocation: "Seville, Spain",
    transportationCompany: "Correos",
  },
  // Add additional mock entries (21-40) following the same structure.
]


export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "Amit Kumar",
    date: "2024-11-15",
    cost: "₹ 1,245.75",
  },
  {
    txId: "0315dsaa",
    user: "Priya Sharma",
    date: "2024-11-16",
    cost: "₹ 3,345.50",
  },
  {
    txId: "51034szv",
    user: "Ravi Verma",
    date: "2024-11-17",
    cost: "₹ 7,890.20",
  },
  {
    txId: "0a123sb",
    user: "Sunita Devi",
    date: "2024-11-18",
    cost: "₹ 2,675.95",
  },
  {
    txId: "120s51a",
    user: "Rajesh Patel",
    date: "2024-11-19",
    cost: "₹ 1,050.60",
  },
  {
    txId: "340sdw98",
    user: "Neha Singh",
    date: "2024-11-20",
    cost: "₹ 8,120.80",
  },
  {
    txId: "510sds47",
    user: "Anil Yadav",
    date: "2024-11-21",
    cost: "₹ 5,430.15",
  },
  {
    txId: "0512ks73",
    user: "Vijay Reddy",
    date: "2024-11-22",
    cost: "₹ 4,235.90",
  },
];


export const mockBarData = [
  {
    location: "Mum",
    "T-Shirts": 250,
    "T-ShirtsColor": "hsl(229, 70%, 50%)",
    Jeans: 180,
    JeansColor: "hsl(296, 70%, 50%)",
    Jackets: 130,
    JacketsColor: "hsl(97, 70%, 50%)",
    Shoes: 200,
    ShoesColor: "hsl(340, 70%, 50%)",
  },
  {
    location: "Del",
    "T-Shirts": 200,
    "T-ShirtsColor": "hsl(307, 70%, 50%)",
    Jeans: 150,
    JeansColor: "hsl(111, 70%, 50%)",
    Jackets: 120,
    JacketsColor: "hsl(273, 70%, 50%)",
    Shoes: 170,
    ShoesColor: "hsl(275, 70%, 50%)",
  },
  {
    location: "Bgl",
    "T-Shirts": 300,
    "T-ShirtsColor": "hsl(72, 70%, 50%)",
    Jeans: 200,
    JeansColor: "hsl(96, 70%, 50%)",
    Jackets: 150,
    JacketsColor: "hsl(106, 70%, 50%)",
    Shoes: 250,
    ShoesColor: "hsl(256, 70%, 50%)",
  },
  {
    location: "Kol",
    "T-Shirts": 220,
    "T-ShirtsColor": "hsl(257, 70%, 50%)",
    Jeans: 170,
    JeansColor: "hsl(326, 70%, 50%)",
    Jackets: 140,
    JacketsColor: "hsl(110, 70%, 50%)",
    Shoes: 190,
    ShoesColor: "hsl(9, 70%, 50%)",
  },
  {
    location: "Hyd",
    "T-Shirts": 270,
    "T-ShirtsColor": "hsl(190, 70%, 50%)",
    Jeans: 220,
    JeansColor: "hsl(325, 70%, 50%)",
    Jackets: 160,
    JacketsColor: "hsl(54, 70%, 50%)",
    Shoes: 230,
    ShoesColor: "hsl(285, 70%, 50%)",
  },
  {
    location: "Che",
    "T-Shirts": 240,
    "T-ShirtsColor": "hsl(208, 70%, 50%)",
    Jeans: 190,
    JeansColor: "hsl(334, 70%, 50%)",
    Jackets: 170,
    JacketsColor: "hsl(182, 70%, 50%)",
    Shoes: 210,
    ShoesColor: "hsl(76, 70%, 50%)",
  },
  {
    location: "Patna",
    "T-Shirts": 260,
    "T-ShirtsColor": "hsl(87, 70%, 50%)",
    Jeans: 210,
    JeansColor: "hsl(141, 70%, 50%)",
    Jackets: 180,
    JacketsColor: "hsl(224, 70%, 50%)",
    Shoes: 220,
    ShoesColor: "hsl(274, 70%, 50%)",
  },
];


export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "shopify", // Name of the first platform (Shopify)
    color: tokens("dark").greenAccent[500], // Custom color for the line
    data: [
      {
        x: "Order Received", // x-axis label for order status
        y: 350, // Number of orders received
      },
      {
        x: "Fulfilled",
        y: 250, // Number of orders fulfilled
      },
      {
        x: "Canceled",
        y: 50, // Number of orders canceled
      },
      {
        x: "Filled", // Additional filled status
        y: 300, // Number of orders marked as filled
      },
      {
        x: "Processing",
        y: 120, // Number of orders being processed
      },
      {
        x: "Shipped",
        y: 200, // Number of orders shipped
      },
      {
        x: "Delivered",
        y: 170, // Number of orders delivered
      },
      {
        x: "Returned",
        y: 30, // Number of orders returned
      },
    ],
  },
  {
    id: "woocommerce", // Name of the second platform (WooCommerce)
    color: tokens("dark").blueAccent[300], // Custom color for the line
    data: [
      {
        x: "Order Received",
        y: 180, // Number of orders received
      },
      {
        x: "Fulfilled",
        y: 130, // Number of orders fulfilled
      },
      {
        x: "Canceled",
        y: 20, // Number of orders canceled
      },
      {
        x: "Filled", // Additional filled status
        y: 160, // Number of orders marked as filled
      },
      {
        x: "Processing",
        y: 90, // Number of orders being processed
      },
      {
        x: "Shipped",
        y: 110, // Number of orders shipped
      },
      {
        x: "Delivered",
        y: 100, // Number of orders delivered
      },
      {
        x: "Returned",
        y: 15, // Number of orders returned
      },
    ],
  },
  {
    id: "bigcommerce", // Name of the third platform (BigCommerce)
    color: tokens("dark").redAccent[200], // Custom color for the line
    data: [
      {
        x: "Order Received",
        y: 420, // Number of orders received
      },
      {
        x: "Fulfilled",
        y: 300, // Number of orders fulfilled
      },
      {
        x: "Canceled",
        y: 70, // Number of orders canceled
      },
      {
        x: "Filled", // Additional filled status
        y: 380, // Number of orders marked as filled
      },
      {
        x: "Processing",
        y: 150, // Number of orders being processed
      },
      {
        x: "Shipped",
        y: 210, // Number of orders shipped
      },
      {
        x: "Delivered",
        y: 250, // Number of orders delivered
      },
      {
        x: "Returned",
        y: 40, // Number of orders returned
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 5549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
