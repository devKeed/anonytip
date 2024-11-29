import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  // TableHead,
  TableRow,
  Paper,
  Button,
  Divider,
} from "@mui/material";

interface PendingClaim {
  address: string;
  amount: string;
}

const PendingClaims: React.FC<{ claims: PendingClaim[] }> = ({ claims }) => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        overflow: "auto",
        maxHeight: "270px", 
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Pending Claims
      </Typography>

      <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
        <Table sx={{ minWidth: 300 }}>
          {/* <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Address</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {claims.map((claim, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                <TableCell sx={{ color: "#fff" }}>{claim.amount} from </TableCell>
                <TableCell sx={{ color: "#fff" }}>{claim.address}</TableCell>
                <TableCell sx={{ textAlign: "end" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    
                  >
                    Receive
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {claims.length > 0 && <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", marginTop: 1 }} />}
    </Box>
  );
};

export default PendingClaims;
