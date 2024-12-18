import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EmailIcon from "@mui/icons-material/Email";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import axios from "axios";
import { useEffect, useState } from "react";



const Dashboard = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  const [transactions, setTransactions] = useState([]);
  const [orderCount, setOrderCount] = useState(0); // For order count
  const [totalSales, setTotalSales] = useState(0); // For total sales

  // Fetch transactions from the API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("https://multi-channel-e-commerce-fulfillment-hub.onrender.com/api/admin/recent-transactions");
        setTransactions(response.data);
       
        const total = response.data.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
        setTotalSales(total); 
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

// Fetch order count from the API
  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await axios.get("https://multi-channel-e-commerce-fulfillment-hub.onrender.com/api/admin/order-count");
        setOrderCount(response.data.count);
      } catch (error) {
        console.error("Error fetching order count:", error);
      }
    };

    fetchOrderCount();
  }, []);


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("https://multi-channel-e-commerce-fulfillment-hub.onrender.com/api/admin/recent-transactions");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Amazon MCF Dashboard" subtitle="Welcome to Seamless Integration with Amazon Multi-Channel Fulfillment" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={orderCount}
            subtitle="Total Orders (Monthly)"
            progress="0.75"
            increase="+14%"
            icon={
              <LocalShippingIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={`₹ ${totalSales.toFixed(2)}`}
            subtitle="Sales Obtained "
            progress="0.50"
            increase="+21%"
            icon={
              <CurrencyRupeeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={orderCount - 2} 
            subtitle="Order Fullfilled"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2"
            subtitle="pending by MCF"
            progress="0.80"
            increase="+43%"
            icon={
              <CloudDoneIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
{/* ROW 2 */}
<Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              ₹ 3,48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Net Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                ₹ 59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {/* Transaction List */}
      {transactions.length === 0 ? (
        <Typography color={colors.grey[100]} variant="h6" textAlign="center" mt="20px">
          No transactions available
        </Typography>
      ) : (
        transactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography color={colors.blueAccent[500]} variant="h5" fontWeight="600">
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                Shopify {/* Hardcoding user name as Shopify */}
              </Typography>
              <Typography variant="body2" color={transaction.status=="success" ? colors.greenAccent[500] : colors.redAccent[500]}>
            {transaction.status}
          </Typography>
            </Box>

            <Box color={colors.grey[100]}>
              {new Date(transaction.date).toLocaleString()} {/* Formatting the date */}
            </Box>

            <Box
              backgroundColor={colors.blueAccent[300]}
              p="5px 10px"
              borderRadius="4px"
            >
              {transaction.amount} {transaction.currency}
            </Box>
          </Box>
        ))
      )}
        </Box>

        
      </Box>
    </Box>
  );
};

export default Dashboard;
