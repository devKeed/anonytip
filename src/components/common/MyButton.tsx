import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Extend ButtonProps to include the custom active prop
interface CustomButtonProps extends ButtonProps {
  active?: boolean;
}

const PurpleButton = styled(Button)<CustomButtonProps>(({ active }) => ({
  backgroundColor: active ? "#7b1fa2" : "#363749",
  color: "#fff",
  "&:hover": {
    backgroundColor: active ? "#7b1fa2" : "#4a0072",
  },
  "&:disabled": {
    backgroundColor: "#bdbdbd",
    color: "#757575",
  },
}));

type MyButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
};

const MyButton: React.FC<MyButtonProps> = ({
  children,
  onClick,
  disabled = false,
  active = false,
}) => {
  return (
    <PurpleButton
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      active={active} // Custom active prop
    >
      {children}
    </PurpleButton>
  );
};

export default MyButton;
