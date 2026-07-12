import { useEffect, useState } from "react";

function Monitoring() {
  const [metrics, setMetrics] = useState({
    cpu_usage: "0%",

    ram_usage: "0%",

    disk_usage: "0%",

    processes: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8080/metrics");

        const data = await response.json();

        setMetrics(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMetrics();

    const interval = setInterval(() => {
      fetchMetrics();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="top-bar">
        <h1>System Monitoring</h1>

        <div className="environment">
          <span>Live Metrics</span>

          <div className="online-dot"></div>

          <span>Active</span>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>CPU Usage</h3>

          <p>{metrics.cpu_usage}</p>
        </div>

        <div className="metric-card">
          <h3>RAM Usage</h3>

          <p>{metrics.ram_usage}</p>
        </div>

        <div className="metric-card">
          <h3>Disk Usage</h3>

          <p>{metrics.disk_usage}</p>
        </div>

        <div className="metric-card">
          <h3>Processes</h3>

          <p>{metrics.processes}</p>
        </div>
      </div>

      <div className="monitoring-section">
        <div className="monitor-card">
          <h2>CPU Health</h2>
          <p>Monitoring processor utilization in real-time.</p>
        </div>

        <div className="monitor-card">
          <h2>Memory Health</h2>
          <p>Tracking RAM consumption dynamically.</p>
        </div>

        <div className="monitor-card">
          <h2>Disk Activity</h2>
          <p>Checking storage usage and system pressure.</p>
        </div>
      </div>
    </>
  );
}

export default Monitoring;
