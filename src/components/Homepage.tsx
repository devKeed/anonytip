import { useState } from "react";
import Header from "./shared/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import InputForm from "./donate/InputForm";
import PendingClaims from "./claim/PendingClaims";
import Footer from "./shared/Footer";
import Tabs from "./shared/Tabs";
import HistoryList from "./shared/HistoryList";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2",
    },
    secondary: {
      main: "#E9E9E9",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      color: "#000",
      fontFamily: "Albert Sans, sans-serif",
      disableElevation: true,
    },
    body1: {
      fontFamily: "Manrope, sans-serif",
    },
    body2: {
      fontFamily: "Manrope, sans-serif",
    },
    h1: {
      fontFamily: "Albert Sans, sans-serif",
      lineHeight: "110%",
      fontSize: "60px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "20px",
      "@media (max-width:900px)": {
        fontSize: "45px",
      },
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
      "@media (max-width:400px)": {
        fontSize: "35px",
      },
    },
    h3: {
      fontFamily: "Albert Sans, sans-serif",
      lineHeight: "110%",
      fontSize: "40px",
      fontWeight: "700",
      "@media (max-width:900px)": {
        fontSize: "35px",
      },
      "@media (max-width:600px)": {
        fontSize: "28px",
      },
      "@media (max-width:400px)": {
        fontSize: "24px",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: "9px",
        },
      },
    },
  },
});

function Homepage() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [activeTab, setActiveTab] = useState<"donate" | "claim">("donate");

  const donationHistory = [
    { address: "0x123456768", time: "12 min", amount: "5Ξ" },
    { address: "0x123456768", time: "52 min", amount: "5USDC" },
    { address: "0x123456768", time: "12 min", amount: "5Ξ" },
    { address: "0x123456768", time: "52 min", amount: "5USDC" },
    { address: "0x123456768", time: "12 min", amount: "5Ξ" },
    { address: "0x123456768", time: "52 min", amount: "5USDC" },
    { address: "0x123456768", time: "12 min", amount: "5Ξ" },
    { address: "0x123456768", time: "52 min", amount: "5USDC" },
    { address: "0x123456768", time: "12 min", amount: "5Ξ" },
    { address: "0x123456768", time: "52 min", amount: "5USDC" },
    { address: "0x123456768", time: "12 min", amount: "5Ξ" },
    { address: "0x123456768", time: "52 min", amount: "5USDC" },
  ];

  const pendingClaims = [
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
    { address: "@0x1232445", amount: "0.5Ξ" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(145deg, #000,  #19071F, #000)",
          padding: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            backgroundImage: "url('images/ball.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            backgroundImage: "url('images/ball.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            zIndex: 0,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          AnonyTip
        </Typography>

        <Box sx={{ position: "absolute", bottom: "5px" }}>
          <img src="images/rocket.png" alt="" />
        </Box>

        {/* Main content */}
        <Paper
          elevation={10}
          sx={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderRadius: "16px",
            padding: isSmallScreen ? "20px" : "40px",
            width: "100%",
            maxWidth: "600px",
            color: "#fff",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Header />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "donate" ? (
            <>
              <InputForm />
              <HistoryList
                title="Your Donation History"
                items={donationHistory}
              />
            </>
          ) : (
            <>
              <PendingClaims claims={pendingClaims} />
              <HistoryList title="Your Claim History" items={donationHistory} />
            </>
          )}
         
        </Paper> <Box margin="auto" sx={{ position: "absolute", zIndex: 10, bottom: "5px"}}>
            <Footer />
          </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Homepage;
