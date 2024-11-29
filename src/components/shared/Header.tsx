import { Button } from "@mui/material";
import React from "react";
const Header: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
     <Button variant="contained">Connect Wallet</Button>
    </div>
  );
};

export default Header;
