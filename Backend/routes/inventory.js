const express = require('express');
const router = express.Router();

// Mock inventory data
const inventory = [
  { id: 1, name: 'Product A', stock: 50 },
  { id: 2, name: 'Product B', stock: 30 },
];

// Get all inventory
router.get('/', (req, res) => {
  res.json(inventory);
});

// Sync inventory with Amazon MCF
router.post('/sync', async (req, res) => {
  try {
    // Use Amazon MCF API to sync inventory
    const updatedInventory = await syncWithAmazonMCF();
    res.json(updatedInventory);
  } catch (error) {
    res.status(500).send('Error syncing inventory');
  }
});

module.exports = router;
