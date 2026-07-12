function Deployments() {
  return (
    <div className="activity-panel">
      <h2>Deployment Activity</h2>

      <div className="activity-item">Docker image built successfully</div>

      <div className="activity-item">CI/CD pipeline executed</div>

      <div className="activity-item">Kubernetes deployment updated</div>

      <div className="activity-item">AWS EC2 instance healthy</div>
    </div>
  );
}

export default Deployments;
