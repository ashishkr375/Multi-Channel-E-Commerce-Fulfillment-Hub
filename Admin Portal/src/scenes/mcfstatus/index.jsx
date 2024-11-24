import { Box,Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMCFStatus } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const MCFStatus = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Order ID", flex: 0.5 },
    {
      field: "platform",
      headerName: "Received From Platform",
      flex: 1,
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
    {
      field: "warehouse",
      headerName: "Warehouse",
      flex: 1,
    },
    {
      field: "shipmentStatus",
      headerName: "Shipment Status",
      flex: 1,
    },
    {
      field: "deliveryDate",
      headerName: "Delivery Date",
      flex: 1,
    },
    {
      field: "customerFeedback",
      headerName: "Customer Feedback",
      flex: 1,
    },
    {
      field: "returnStatus",
      headerName: "Return Status",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="MCF STATUS" subtitle="Track Orders and Fulfillment Process" />
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataMCFStatus}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default MCFStatus;
