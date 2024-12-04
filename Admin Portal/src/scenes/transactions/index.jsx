import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme"; // Assuming you have a theme file for colors
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [transactions, setTransactions] = useState([]);

  // Fetch the transactions from the API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("https://multi-channel-e-commerce-fulfillment-hub.onrender.com/api/admin/recent-transactions");
        // Ensure each transaction has a unique `id`
        const transactionsWithId = response.data.map(transaction => ({
          ...transaction,
          id: transaction.txId, // Use txId as the unique identifier
        }));
        setTransactions(transactionsWithId);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

 
  const columns = [
    { field: "txId", headerName: "Transaction ID", flex: 0.5 },
    {
      field: "user", 
      headerName: "Platform",
      flex: 1,
      renderCell: () => {
        return (
          <Typography variant="body2" color={colors.greenAccent[400]}>
            Shopify
          </Typography>
        );
      },
    },
    { field: "date", headerName: "Date", flex: 1, type: "dateTime" },
    {
      field: "card_holder_name",
      headerName: "Customer Name",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Typography variant="body2" color={ colors.greenAccent[400]}>
            {row.card_holder_name}
          </Typography>
        );
      },
    },
    { field: "amount", headerName: "Amount", flex: 0.5, type: "number", headerAlign: "left", align: "left" },
    { field: "currency", headerName: "Currency", flex: 0.5 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "gateway", headerName: "Payment Gateway", flex: 1 },
    
    {
      field: "pending_amount",
      headerName: "Pending Amount",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Typography variant="body2" color={row.pending_amount > 0 ? colors.redAccent[600] : colors.greenAccent[600]}>
            {row.pending_amount}
          </Typography>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TRANSACTIONS" subtitle="Manage your Transactions" />
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
        <DataGrid rows={transactions} columns={columns} pageSize={10} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Transactions;
