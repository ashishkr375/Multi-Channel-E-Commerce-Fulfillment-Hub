import React, { useState } from "react";
import { Box, Button, Typography, Switch, FormControl, InputLabel, Input, Grid, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../../components/Header";

// Platform details with placeholder image URLs
const platformDetails = {
  amazon: {
    name: "Amazon",
    logo: "https://tse4.mm.bing.net/th?id=OIP.Pr4dLG-Dh5BYObXQ_905YgHaIR&pid=Api&P=0&h=180",
    details: "Marketplace for products worldwide.",
  },
  shopify: {
    name: "Shopify",
    logo: "https://s.yimg.com/fz/api/res/1.2/WH4VRK0xtmQVJVtj8tn6Dg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/dfb72e6f-9363-3b96-8ffb-4d5c4a760dcb/t_500x300",
    details: "E-commerce platform to build online stores.",
  },
  woocommerce: {
    name: "WooCommerce",
    logo: "https://hiilite.com/wp-content/uploads/2019/03/app-logo-woocommerce.png",
    details: "Open-source e-commerce plugin for WordPress.",
  },
  bigcommerce: {
    name: "BigCommerce",
    logo: "https://tse3.mm.bing.net/th?id=OIP.-wLycW0UG3f1K5Ue-nnLsAAAAA&pid=Api&P=0&h=180",
    details: "E-commerce platform for fast-growing businesses.",
  },
  etsy: {
    name: "Etsy",
    logo: "https://tse3.mm.bing.net/th?id=OIP.LXBYADlCr12cIvAhy4RFEgHaHk&pid=Api&P=0&h=180",
    details: "Marketplace for handmade and vintage items.",
  },
  wix:{
    name: "Wix",
    logo: "https://tse3.mm.bing.net/th?id=OIP.Zw6sQNXmJjmEMyEPkDUcMwAAAA&pid=Api&P=0&h=180",
    details: "Website builder with e-commerce functionality.",
  },
  magento:{
    name: "Magento",
    logo: "https://jamersan.com/wp-content/uploads/2022/04/Magento-logo2-1-scaled.jpg",
    details: "Open-source e-commerce platform.",
  },
  squarespace:{
    name: "Squarespace",
    logo: "https://i.pcmag.com/imagery/reviews/04skVpDXdyuLgqavF9k35sX-10.fit_lim.size_1200x630.v1575422583.jpg",
    details: "Website builder with e-commerce functionality.",
  },
  shopware:{
    name: "Shopware",
    logo: "https://tse3.mm.bing.net/th?id=OIP.bYSBbzbBAAFbYafMPPbHpgHaEJ&pid=Api&P=0&h=180",
    details: "E-commerce platform for enterprise businesses.",

  },
  prestashop:{
    name: "PrestaShop",
    logo: "https://tse2.mm.bing.net/th?id=OIP.BmEqRKkfuZAeqFyeWGE1JwHaE7&pid=Api&P=0&h=180",
    details: "Open-source e-commerce platform.",
  },


  // Add more platforms similarly...
};

// Custom-styled card component
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

const Connect = () => {
  const theme = useTheme();
  const [connections, setConnections] = useState({
    shopify: true,
    amazon: false,
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
    apiKey: "HGjgt734yhuy8f7y34uyytc8734huygy8#uyfiu873ych" || "",
    storeUrl: "djznrr-xw.myshopify.com" || "",
    storeName: "Diya Sambhav" || "",
  });

  const handleToggle = (platform) => {
    if (platform !== "shopify") {
      setConnections({
        ...connections,
        [platform]: !connections[platform],
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Platform connected with the details provided!");
  };

  return (
    <Box m="20px">
      <Header title="Connect and Automate" subtitle="Connect and Automate Your E-Commerce Platforms" />

      <Grid container spacing={3}>
        {Object.keys(platformDetails).map((platform) => (
          <Grid item xs={12} sm={6} md={4} key={platform}>
            <PlatformCard>
              <img src={platformDetails[platform].logo} alt={`${platformDetails[platform].name} logo`} style={{ width: "100px", marginBottom: "10px" }} />
              <Typography variant="h6">{platformDetails[platform].name}</Typography>
              <Typography variant="body2" style={{ marginBottom: "15px" }}>
                {platformDetails[platform].details}
              </Typography>
              <Button 
  variant="outlined" 
  style={{ marginBottom: "15px", borderColor: "#f2f2f2" }}  // Use the hex color for the border
>
  <Typography 
    variant="body2" 
    style={{ color: connections[platform] ? "green" : "red" }}
  >
    {connections[platform] ? "Connected ✅" : "Connect Your Store ✨"}
  </Typography>
</Button>
              {connections[platform] ? (
                <Box mt={2}>
                  {platform === "shopify" ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ width: '150px', fontWeight: 'bold' }}>Store Name:</Typography>
                      <Typography>{formData.storeName}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ width: '150px', fontWeight: 'bold' }}>Store URL:</Typography>
                      <Typography>{formData.storeUrl}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ width: '150px', fontWeight: 'bold' }}>API Key:</Typography>
                      <Typography>{formData.apiKey}</Typography>
                    </Box>
                  </Box>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="storeName">Store Name</InputLabel>
                        <Input id="storeName" name="storeName" value={formData.storeName} onChange={handleChange} />
                      </FormControl>
                      <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="storeUrl">Store URL</InputLabel>
                        <Input id="storeUrl" name="storeUrl" value={formData.storeUrl} onChange={handleChange} />
                      </FormControl>
                      <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="apiKey">API Key</InputLabel>
                        <Input id="apiKey" name="apiKey" value={formData.apiKey} onChange={handleChange} />
                      </FormControl>
                      <Button type="submit" variant="contained" color="primary" fullWidth>
                        Connect
                      </Button>
                    </form>
                  )}
                </Box>
              ) : (
                ""
              )}
              
            </PlatformCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Connect;
