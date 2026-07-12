function Dashboard() {
  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="top-bar">
        <h1>DevOps Operations Center</h1>

        <div className="environment">
          <span>Environment: Production</span>

          <div className="online-dot"></div>

          <span>Online</span>
        </div>
      </div>

      {/* ================= OVERVIEW METRICS ================= */}

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Containers</h3>

          <p>18</p>
        </div>

        <div className="metric-card">
          <h3>Deployments</h3>

          <p>7</p>
        </div>

        <div className="metric-card">
          <h3>Alerts</h3>

          <p>2</p>
        </div>
      </div>

      {/* ================= INFRASTRUCTURE SECTION ================= */}

      <div className="dashboard-section">
        <div className="dashboard-card">
          <h2>Infrastructure Overview</h2>

          <p>Kubernetes cluster operational and stable.</p>

          <p>Docker containers running normally.</p>

          <p>Cloud infrastructure healthy.</p>
        </div>

        <div className="dashboard-card">
          <h2>CI/CD Pipelines</h2>

          <p>Jenkins pipelines active.</p>

          <p>Automated deployments enabled.</p>

          <p>GitHub webhooks connected.</p>
        </div>

        <div className="dashboard-card">
          <h2>Security Status</h2>

          <p>No critical vulnerabilities detected.</p>

          <p>Monitoring agents healthy.</p>

          <p>Firewall operational.</p>
        </div>
      </div>

      {/* ================= RECENT ACTIVITY ================= */}

      <div className="deployment-activity">
        <h2>Recent Activity</h2>

        <div className="activity-card">Docker image built successfully</div>

        <div className="activity-card">CI/CD pipeline executed</div>

        <div className="activity-card">Kubernetes deployment updated</div>

        <div className="activity-card">AWS EC2 instance healthy</div>

        <div className="activity-card">Prometheus monitoring synchronized</div>
      </div>
    </>
  );
}

export default Dashboard;
