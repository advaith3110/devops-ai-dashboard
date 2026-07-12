import { LayoutDashboard, Bot, Rocket, Boxes, Activity } from "lucide-react";

function Sidebar({
  activePage,

  setActivePage,
}) {
  return (
    <div className="sidebar">
      <div>
        <h1 className="logo">DevOps AI</h1>

        <div className="nav-links">
          <div
            className={
              activePage === "dashboard" ? "nav-item active" : "nav-item"
            }
            onClick={() => setActivePage("dashboard")}
          >
            <LayoutDashboard size={22} />

            <span>Dashboard</span>
          </div>

          <div
            className={
              activePage === "assistant" ? "nav-item active" : "nav-item"
            }
            onClick={() => setActivePage("assistant")}
          >
            <Bot size={22} />

            <span>AI Assistant</span>
          </div>

          <div
            className={
              activePage === "deployments" ? "nav-item active" : "nav-item"
            }
            onClick={() => setActivePage("deployments")}
          >
            <Rocket size={22} />

            <span>Deployments</span>
          </div>

          <div
            className={
              activePage === "kubernetes" ? "nav-item active" : "nav-item"
            }
            onClick={() => setActivePage("kubernetes")}
          >
            <Boxes size={22} />

            <span>Kubernetes</span>
          </div>

          <div
            className={
              activePage === "monitoring" ? "nav-item active" : "nav-item"
            }
            onClick={() => setActivePage("monitoring")}
          >
            <Activity size={22} />

            <span>Monitoring</span>
          </div>
        </div>
      </div>

      <div className="cluster-box">
        <h3>Cluster Status</h3>

        <p>Healthy</p>
      </div>
    </div>
  );
}

export default Sidebar;
