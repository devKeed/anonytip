import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";

interface HistoryItem {
  address: string;
  time: string;
  amount: string;
}

interface HistoryListProps {
  title: string;
  items: HistoryItem[];
}

const HistoryList: React.FC<HistoryListProps> = ({ title, items }) => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        overflow: "auto",
        maxHeight: "400px", // Set maxHeight to create scrollable area
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          textAlign: "left",
        }}
      >
        {title}
      </Typography>

      <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
        <Table sx={{ minWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Address</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Time</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} sx={{ "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.05)" } }}>
                <TableCell sx={{ color: "#fff" }}>{item.address}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{item.time}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add a divider to separate if needed */}
      {items.length > 0 && <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", marginTop: 2 }} />}
    </Box>
  );
};

export default HistoryList;
