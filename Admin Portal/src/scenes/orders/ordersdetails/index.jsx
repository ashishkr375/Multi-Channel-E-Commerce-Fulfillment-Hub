import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Divider, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme"; // Ensure the tokens are properly defined
import axios from "axios";
import Header from "../../../components/Header";

const ViewDetails = () => {
  const { orderId } = useParams(); // Get the order ID from the URL
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch order details by order ID
    axios
      .get(`https://multi-channel-e-commerce-fulfillment-hub.onrender.com/api/shopify/order/${orderId}`)
      .then((response) => {
        setOrder(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, [orderId]);

  // Handle back button click to navigate to the orders page
  const handleBack = () => {
    navigate("/orders");
  };

  // If data is loading, show loading text
  if (loading) {
    return (
      <Box m="20px">
        <Header title="Loading Order..." subtitle="Fetching order details" />
        <Typography variant="h6" color={colors.grey[300]}>
          Loading order details...
        </Typography>
      </Box>
    );
  }

  return (
    <Box m="20px">
      <Header title="Order Details" subtitle="Detailed information about the order" />

      <Box my="20px">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleBack}
          startIcon={<span role="img" aria-label="back">⬅️</span>}
        >
          Back to Orders
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      {order && (
        <>
          {/* Order Summary Section */}
          <Box>
            <Paper sx={{ p: 2, backgroundColor: colors.primary[900], borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: colors.blueAccent[700] }}>
                🛍️ Order Summary
              </Typography>
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Order Number:</Typography>
                  <Typography>{order.order_number || "N/A"}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Confirmation Number:</Typography>
                  <Typography>{order.confirmation_number || "N/A"}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Created At:</Typography>
                  <Typography>{new Date(order.created_at).toLocaleString() || "N/A"}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Processed At:</Typography>
                  <Typography>{new Date(order.processed_at).toLocaleString() || "N/A"}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Product Details Section */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: colors.blueAccent[700] }}>
              🛒 Product Details
            </Typography>
            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Product Name:</Typography>
                <Typography>{order.line_items[0]?.name || "N/A"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Quantity:</Typography>
                <Typography>{order.line_items[0]?.quantity || 0}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Price:</Typography>
                <Typography>₹{order.line_items[0]?.price || "0.00"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Total Line Price:</Typography>
                <Typography>₹{order.line_items[0]?.total_price || "0.00"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Tax:</Typography>
                <Typography>₹{order.line_items[0]?.tax_lines[0]?.price || "0.00"}</Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Payment Details Section */}
          <Box>
            <Paper sx={{ p: 2, backgroundColor: colors.primary[900], borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: colors.greenAccent[600] }}>
                💳 Payment Details
              </Typography>
              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Payment Status:</Typography>
                  <Typography>{order.financial_status === "paid" ? "Paid ✅" : "Unpaid ❌"}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Payment Method:</Typography>
                  <Typography>{order.payment_gateway_names?.[0] || "N/A"}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Total Price:</Typography>
                  <Typography>₹{order.current_total_price || "0.00"}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Tax Amount:</Typography>
                  <Typography>₹{order.current_total_tax || "0.00"}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Shipping Details Section */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: colors.redAccent[600] }}>
              🚚 Shipping Details
            </Typography>
            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Shipping Address:</Typography>
                <Typography>
                  {order.deafult_address?.company || ""}, {order.shipping_address?.province || "N/A"}, {order.shipping_address?.country || "India"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Shipping Method:</Typography>
                <Typography>{order.shipping_lines?.[0]?.title || "Standard"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Shipping Status:</Typography>
                <Typography>{order.fulfillment_status ? "Shipped ✅" : "Pending 📦"}</Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Customer Information Section */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: colors.blueAccent[200] }}>
              👤 Customer Information
            </Typography>
            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Customer ID:</Typography>
                <Typography>{order.customer?.id || "N/A"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Customer Email:</Typography>
                <Typography>{order.customer?.email || "N/A"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Billing Address:</Typography>
                <Typography>{order.billing_address?.province || "N/A"}, {order.billing_address?.country || "India"}</Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ViewDetails;
