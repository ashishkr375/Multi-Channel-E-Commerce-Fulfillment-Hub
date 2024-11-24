import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataOrders } from "../../data/mockData";
import Header from "../../components/Header";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "productName",
      headerName: "Product Name",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "platform",
      headerName: "Platform",
      flex: 1,
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      flex: 1,
      renderCell: ({ row }) => {
        const isPaid = row.paymentStatus.toLowerCase() === "paid";
        return (
          <Box
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={isPaid ? colors.greenAccent[600] : colors.redAccent[600]}
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]}>{row.paymentStatus}</Typography>
          </Box>
        );
      },
    },
    {
      field: "mcfStatus",
      headerName: "MCF Status",
      flex: 1,
      renderCell: ({ row }) => {
        const isFulfilled = row.mcfStatus.toLowerCase() === "fulfilled";
        return (
          <Box
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={isFulfilled ? colors.greenAccent[600] : colors.redAccent[600]}
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]}>{row.mcfStatus}</Typography>
          </Box>
        );
      },
    },
  ];

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
        <DataGrid rows={mockDataOrders} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Orders;
