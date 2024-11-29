import React, { useState } from "react";
import {
  Box,
  Button,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const InputForm: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleToggle = () => {
    setIsAnonymous((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="e.g. twitter:eniolawtf, github:codergon"
        size="small"
        fullWidth
        InputProps={{
          sx: {
            color: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7b1fa2",
            },
          },
        }}
        sx={{}}
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Enter the amount here..."
          fullWidth
          InputProps={{
            sx: {
              color: "#fff",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7b1fa2",
              },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: isSmallScreen ? "start" : "center",
          gap: isSmallScreen ? "10px" : " 0",
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
          mt: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Switch
            checked={isAnonymous}
            onChange={handleToggle}
            color="secondary"
            sx={{
              "& .MuiSwitch-thumb": {
                backgroundColor: isAnonymous ? "#7b1fa2" : "#fff",
              },
              "& .MuiSwitch-track": {
                backgroundColor: isAnonymous
                  ? "#7b1fa2"
                  : "rgba(255, 255, 255, 0.5)",
              },
            }}
          />{" "}
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
            }}
          >
            Make anonymous
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default InputForm;
