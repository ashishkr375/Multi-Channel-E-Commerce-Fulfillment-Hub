const express = require('express');
const cors = require('cors');
const inventoryRoutes = require('./routes/inventory');
const shopifyRoutes = require("./routes/shopify");
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

//routes for different functionalities
app.use('/api/inventory', inventoryRoutes);
app.use("/api/shopify", shopifyRoutes);
app.use("/api/admin", adminRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
