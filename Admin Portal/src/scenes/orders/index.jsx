import { Box, Typography, useTheme, Button,Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";


const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch order data from API
    axios
      .get("https://multi-channel-e-commerce-fulfillment-hub.onrender.com/api/admin/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
        setLoading(false);
      });
  }, []);

  // Columns for DataGrid
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "productName",
      headerName: "Product Name",
      flex: 1,
      renderCell: ({ row }) => row.line_items[0]?.name || "N/A",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row }) => row.line_items[0]?.price || "N/A",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row }) => row.line_items[0]?.quantity || 0,
    },
    {
      field: "created_at",
      headerName: "Date",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Typography variant="body2" color={ colors.greenAccent[400]}>
            {row.created_at}
          </Typography>
        );
      },
    },
    {
      field: "platform",
      headerName: "Platform",
      flex: 1,
      renderCell: () => {
        return (
          <Box display="flex" alignItems="center">
            <img
              src="https://s.yimg.com/fz/api/res/1.2/WH4VRK0xtmQVJVtj8tn6Dg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/dfb72e6f-9363-3b96-8ffb-4d5c4a760dcb/t_500x300"
              alt="Shopify Logo"
              style={{ width: 20, marginRight: 8 }}
            />
            <Typography variant="body2">Shopify</Typography>
          </Box>
        );
      },
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      flex: 1,
      renderCell: ({ row }) => {
        const isPaid = row.financial_status?.toLowerCase() === "paid";
        return (
          <Box
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={isPaid ? colors.greenAccent[600] : colors.redAccent[600]}
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]}>
              {isPaid ? "Paid" : "Unpaid"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "mcfStatus",
      headerName: "MCF Status",
      flex: 1,
      renderCell: ({ row }) => {
        const isPaid = row.financial_status?.toLowerCase() === "paid";
        const mcfStatus = isPaid ? "Completed" : "Pending";
        const isCompleted = mcfStatus === "Completed";
        return (
          <Box
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={isCompleted ? colors.greenAccent[500] : colors.redAccent[500]}
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]}>{mcfStatus}</Typography>
          </Box>
        );
      },
    },
    {
      field: "viewDetails",
      headerName: "View Details",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Tooltip title="Click to view detailed order" arrow>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "14px",
                backgroundColor: "#f5f5f5",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#d3d3d3",
                  borderColor: "#1976d2",
                },
              }}
              onClick={() => navigate(`/orders/${row.id}`)} // Navigate to the ViewDetails page with order ID
            >
              <span role="img" aria-label="view">🔍</span> View Details
            </Button>
          </Tooltip>
        );
      },
    },
  ];

  // Handle View Details button click
  const handleViewDetails = (orderId) => {
    console.log("Viewing details for order ID:", orderId);
    // Implement navigation or modal logic to show more details
  };

 // If data is loading, show loading text
 if (loading) {
  return (
    <Box m="20px">
      <Header title="Loading Orders..." subtitle="Fetching order details" />
      <Typography variant="h6" color={colors.grey[300]}>
        Loading Orders details...
      </Typography>
    </Box>
  );
}

  return (
    <Box m="20px">
      <Header title="ORDERS" subtitle="Manage your Orders" />
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
        {loading ? (
          <Typography variant="h6" color={colors.grey[300]}>
            Loading orders...
          </Typography>
        ) : (
          <DataGrid rows={orders} columns={columns} checkboxSelection />
        )}
      </Box>
    </Box>
  );
};

export default Orders;
