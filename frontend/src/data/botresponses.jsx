const botResponses = {
  docker: `
# Docker Deployment

Build Docker image:

\`\`\`bash
docker build -t my-app .
\`\`\`

Run container:

\`\`\`bash
docker run -p 3000:3000 my-app
\`\`\`
`,

  kubernetes: `
# Kubernetes Commands

Deploy application:

\`\`\`bash
kubectl apply -f deployment.yaml
\`\`\`

Check running pods:

\`\`\`bash
kubectl get pods
\`\`\`
`,

  cicd: `
# CI/CD Pipeline

Typical workflow:

\`\`\`
Code Push
↓
Build
↓
Test
↓
Deploy
\`\`\`
`,

  aws: `
# AWS Deployment Architecture

Recommended services:

- EC2
- S3
- CloudFront
- ECR
- ECS

Deploy backend using EC2 and Docker.
`,
};

export default botResponses;
