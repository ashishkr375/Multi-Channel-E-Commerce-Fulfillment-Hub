import React, { useState } from "react";
import { Box, Button, Typography, Switch, FormControl, InputLabel, Input, Grid, useTheme } from "@mui/material";
import { tokens } from "../../theme"; // Define colors based on theme
import Header from "../../components/Header"; // Assuming you have a header component
import { styled } from "@mui/system";

// Define custom styles for the platform cards
const PlatformCard = styled(Box)(({ theme }) => ({
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  },
}));

// Connect page component
const Connect = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [connections, setConnections] = useState({
    amazon: false,
    shopify: false,
    woocommerce: false,
    bigcommerce: false,
    etsy: false,
    wix: false,
    magento: false,
    squarespace: false,
    shopware: false,
    prestashop: false,
  });

  const [formData, setFormData] = useState({
    apiKey: "",
    storeUrl: "",
    storeName: "",
  });

  const handleToggle = (platform) => {
    setConnections({
      ...connections,
      [platform]: !connections[platform],
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or store in state)
    alert("Platform connected with the details provided!");
  };

  return (
    <Box m="20px">
      <Header title="Connect and Automate" subtitle="Connect and Automate Your E-Commerce Platforms" />

      <Grid container spacing={3}>
        {["amazon", "shopify", "woocommerce", "bigcommerce", "etsy", "wix", "magento", "squarespace", "shopware", "prestashop"].map((platform) => (
          <Grid item xs={12} sm={6} md={4} key={platform}>
            <PlatformCard>
              <Typography variant="h6" color={colors.greenAccent[500]}>
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </Typography>
              <Switch
                checked={connections[platform]}
                onChange={() => handleToggle(platform)}
                color="primary"
              />
              <Typography variant="body2" color={colors.primary[100]}>
                {connections[platform] ? "Connected" : "Disconnected"}
              </Typography>
              {connections[platform] && (
                <Box mt={2}>
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel htmlFor="storeName">Store Name</InputLabel>
                      <Input
                        id="storeName"
                        name="storeName"
                        value={formData.storeName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <InputLabel htmlFor="storeUrl">Store URL</InputLabel>
                      <Input
                        id="storeUrl"
                        name="storeUrl"
                        value={formData.storeUrl}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                      <InputLabel htmlFor="apiKey">API Key</InputLabel>
                      <Input
                        id="apiKey"
                        name="apiKey"
                        value={formData.apiKey}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Connect
                    </Button>
                  </form>
                </Box>
              )}
            </PlatformCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Connect;
