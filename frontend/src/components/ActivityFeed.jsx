function ActivityFeed() {
  const activities = [
    "Docker image built successfully",
    "CI/CD pipeline executed",
    "Kubernetes deployment updated",
    "AWS EC2 instance healthy",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
      <h2 className="text-lg font-semibold mb-4">Deployment Activity</h2>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl text-sm"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
