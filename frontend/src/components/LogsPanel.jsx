function LogsPanel() {
  const logs = [
    "[INFO] Deployment Successful",
    "[INFO] Kubernetes Pod Running",
    "[WARNING] High CPU Usage",
    "[INFO] CI/CD Pipeline Triggered",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
      <h2 className="text-lg font-semibold mb-4">System Logs</h2>

      <div className="space-y-3">
        {logs.map((log, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-sm"
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogsPanel;
