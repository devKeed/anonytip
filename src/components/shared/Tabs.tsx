import React from "react";
import MyButton from "../common/MyButton";

interface TabsProps {
  activeTab: "donate" | "claim";
  setActiveTab: (tab: "donate" | "claim") => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      <MyButton
        active={activeTab === "donate"}
        onClick={() => setActiveTab("donate")}
      >
        Donate
      </MyButton>
      <MyButton
        active={activeTab === "claim"}
        onClick={() => setActiveTab("claim")}
      >
        Claim
      </MyButton>
    </div>
  );
};

export default Tabs;
