import "./App.css";

import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Assistant from "./pages/Assistant";
import Deployments from "./pages/Deployments";
import Kubernetes from "./pages/Kubernetes";
import Monitoring from "./pages/Monitoring";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="main">
        {activePage === "dashboard" && <Dashboard />}

        {activePage === "assistant" && <Assistant />}

        {activePage === "deployments" && <Deployments />}

        {activePage === "kubernetes" && <Kubernetes />}

        {activePage === "monitoring" && <Monitoring />}
      </div>
    </div>
  );
}

export default App;
