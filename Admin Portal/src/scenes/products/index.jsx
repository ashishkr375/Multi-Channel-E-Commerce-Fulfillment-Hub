import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme"; // Assuming you have a theme file for colors
import Header from "../../components/Header";
import axios from "axios";


const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  // Fetch the products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
            "https://multi-channel-e-commerce-fulfillment-hub.onrender.com/api/admin/products"
        );
        
        const productsWithId = response.data.map((product, index) => ({
          ...product,
          id: index + 1,
        }));
        setProducts(productsWithId);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
    {
      field: "platform",
      headerName: "Platform",
      flex: 1,
      renderCell: () => (
        <Box display="flex" alignItems="center">
          <img src="https://s.yimg.com/fz/api/res/1.2/WH4VRK0xtmQVJVtj8tn6Dg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/dfb72e6f-9363-3b96-8ffb-4d5c4a760dcb/t_500x300" alt="Shopify" width={20} height={20} style={{ marginRight: 10 }} />
          <Typography variant="body2" color={colors.greenAccent[400]}>
            Shopify
          </Typography>
        </Box>
      ),
    },
    { field: "name", headerName: "Product Name", flex: 2 },
    { field: "price", headerName: "Price", flex: 1, type: "number", headerAlign: "left", align: "left" },
    { field: "quantity", headerName: "Quantity", flex: 1, type: "number", headerAlign: "left", align: "left" },
    {
      field: "stockStatus",
      headerName: "Stock Status",
      flex: 1,
      renderCell: ({ row }) => (
        <Typography
          variant="body2"
          color={row.stockStatus === "In Stock" ? colors.greenAccent[500] : colors.redAccent[500]}
        >
          {row.stockStatus}
        </Typography>
      ),
    },
  ];

 // If data is loading, show loading text
 if (loading) {
  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="Fetching Products" />
      <Typography variant="h6" color={colors.grey[300]}>
        Loading Products details...
      </Typography>
    </Box>
  );
}

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="Manage your Products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={products} columns={columns} pageSize={10} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Products;
