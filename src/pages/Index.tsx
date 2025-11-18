import { useState } from "react";
import MainPage from "@/components/MainPage";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {!showDashboard ? (
        <MainPage onNavigateToDashboard={() => setShowDashboard(true)} />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Index;
