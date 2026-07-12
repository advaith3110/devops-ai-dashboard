from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import psutil
import platform
import socket
import time

# =========================================================
# FASTAPI APP
# =========================================================

app = FastAPI()

# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================================
# REQUEST MODEL
# =========================================================

class ChatRequest(BaseModel):
    message: str

# =========================================================
# HOME ROUTE
# =========================================================

@app.get("/")
def home():

    return {
        "message": "DevOps AI Backend Running"
    }

# =========================================================
# HEALTH CHECK
# =========================================================

@app.get("/health")
def health():

    return {
        "status": "healthy"
    }

# =========================================================
# LIVE SYSTEM METRICS
# =========================================================

@app.get("/metrics")
def metrics():

    # CPU Usage
    cpu_usage = psutil.cpu_percent(interval=1)

    # RAM Usage
    ram = psutil.virtual_memory()

    ram_usage = ram.percent

    total_ram = round(ram.total / (1024 ** 3), 2)

    available_ram = round(ram.available / (1024 ** 3), 2)

    # Disk Usage
    disk = psutil.disk_usage("C:\\")

    disk_usage = disk.percent

    total_disk = round(disk.total / (1024 ** 3), 2)

    free_disk = round(disk.free / (1024 ** 3), 2)

    # Running Processes
    processes = len(psutil.pids())

    # System Boot Time
    boot_time = time.strftime(
        "%Y-%m-%d %H:%M:%S",
        time.localtime(psutil.boot_time())
    )

    # Hostname
    hostname = socket.gethostname()

    # Operating System
    operating_system = platform.system()

    # Platform Release
    os_release = platform.release()

    return {

        "cpu_usage": f"{cpu_usage}%",

        "ram_usage": f"{ram_usage}%",

        "disk_usage": f"{disk_usage}%",

        "processes": processes,

        "hostname": hostname,

        "os": operating_system,

        "os_release": os_release,

        "boot_time": boot_time,

        "total_ram_gb": total_ram,

        "available_ram_gb": available_ram,

        "total_disk_gb": total_disk,

        "free_disk_gb": free_disk,

        "status": "Healthy"
    }

# =========================================================
# DEVOPS AI CHAT
# =========================================================

@app.post("/chat")
def chat(request: ChatRequest):

    user_message = request.message.lower()

    # =====================================================
    # DEVOPS TERMS
    # =====================================================

    if "docker" in user_message:

        response = """
Docker is a containerization platform used to package applications and dependencies into lightweight containers.
"""

    elif "kubernetes" in user_message or "k8s" in user_message:

        response = """
Kubernetes is a container orchestration platform used for deployment, scaling, and management of containers.
"""

    elif "devops" in user_message:

        response = """
DevOps combines Development and IT Operations to improve software delivery speed, automation, and reliability.
"""

    elif "aws" in user_message:

        response = """
AWS provides cloud services like EC2, S3, Lambda, IAM, EKS, and RDS.
"""

    elif "gcp" in user_message or "google cloud" in user_message:

        response = """
Google Cloud Platform (GCP) provides services like Compute Engine, GKE, Cloud Storage, BigQuery, and Cloud Run.
"""

    elif "azure" in user_message:

        response = """
Microsoft Azure provides cloud computing services including Virtual Machines, AKS, Azure DevOps, and Blob Storage.
"""

    elif "terraform" in user_message:

        response = """
Terraform is an Infrastructure as Code tool used for provisioning and managing infrastructure.
"""

    elif "ansible" in user_message:

        response = """
Ansible is an automation tool used for configuration management and application deployment.
"""

    elif "jenkins" in user_message:

        response = """
Jenkins is an automation server used for building CI/CD pipelines.
"""

    elif "github actions" in user_message:

        response = """
GitHub Actions is a CI/CD platform used to automate software workflows.
"""

    elif "gitlab ci" in user_message:

        response = """
GitLab CI/CD provides automated build, test, and deployment pipelines.
"""

    elif "argocd" in user_message:

        response = """
ArgoCD is a GitOps continuous delivery tool for Kubernetes.
"""

    elif "helm" in user_message:

        response = """
Helm is a package manager used for deploying Kubernetes applications.
"""

    elif "kubectl" in user_message:

        response = """
Kubectl is the command-line tool used to manage Kubernetes clusters.
"""

    elif "pod" in user_message:

        response = """
A Pod is the smallest deployable unit inside Kubernetes.
"""

    elif "deployment" in user_message:

        response = """
A Deployment manages application updates and desired state in Kubernetes.
"""

    elif "service" in user_message:

        response = """
A Kubernetes Service exposes Pods and enables communication between applications.
"""

    elif "ingress" in user_message:

        response = """
Ingress manages external access to services running inside Kubernetes.
"""

    elif "namespace" in user_message:

        response = """
A Namespace logically separates resources inside a Kubernetes cluster.
"""

    elif "configmap" in user_message:

        response = """
ConfigMap stores application configuration data in Kubernetes.
"""

    elif "secret" in user_message:

        response = """
A Secret stores sensitive information such as passwords, tokens, and API keys.
"""

    elif "container" in user_message:

        response = """
Containers package applications and dependencies into isolated runtime environments.
"""

    elif "dockerfile" in user_message:

        response = """
A Dockerfile contains instructions used to build Docker images.
"""

    elif "docker hub" in user_message:

        response = """
Docker Hub is a cloud repository used to store and share Docker images.
"""

    elif "linux" in user_message:

        response = """
Linux is the most widely used operating system in DevOps and cloud infrastructure.
"""

    elif "bash" in user_message:

        response = """
Bash is a command-line shell used extensively in Linux administration.
"""

    elif "ssh" in user_message:

        response = """
SSH allows secure remote access to servers and network devices.
"""

    elif "cron" in user_message:

        response = """
Cron is a Linux scheduler used to automate repetitive tasks.
"""

    elif "nginx" in user_message:

        response = """
NGINX is a web server and reverse proxy commonly used in DevOps infrastructure.
"""

    elif "apache" in user_message:

        response = """
Apache HTTP Server is one of the world's most widely used web servers.
"""

    elif "load balancer" in user_message:

        response = """
A Load Balancer distributes traffic across multiple servers to improve scalability and availability.
"""

    elif "prometheus" in user_message:

        response = """
Prometheus is a monitoring system used for collecting infrastructure and application metrics.
"""

    elif "grafana" in user_message:

        response = """
Grafana is a visualization platform used to create dashboards and graphs.
"""

    elif "loki" in user_message:

        response = """
Loki is a log aggregation system developed by Grafana Labs.
"""

    elif "elk" in user_message:

        response = """
ELK Stack consists of Elasticsearch, Logstash, and Kibana for centralized logging.
"""

    elif "jaeger" in user_message:

        response = """
Jaeger is a distributed tracing platform used in microservices environments.
"""

    elif "monitoring" in user_message:

        response = """
Monitoring helps track system health, performance, availability, and infrastructure metrics.
"""

    elif "observability" in user_message:

        response = """
Observability uses logs, metrics, and traces to understand system behavior.
"""

    elif "vpc" in user_message:

        response = """
A VPC (Virtual Private Cloud) is an isolated network environment inside a cloud provider.
"""

    elif "iam" in user_message:

        response = """
IAM controls authentication and authorization for users and services.
"""

    elif "ec2" in user_message:

        response = """
EC2 is AWS's virtual machine service.
"""

    elif "s3" in user_message:

        response = """
S3 is AWS object storage used for files, backups, logs, and static websites.
"""

    elif "rds" in user_message:

        response = """
RDS is AWS managed relational database service.
"""

    elif "cloudwatch" in user_message:

        response = """
CloudWatch is AWS's monitoring and observability platform.
"""

    elif "lambda" in user_message:

        response = """
AWS Lambda allows serverless execution of code without managing servers.
"""

    elif "network" in user_message:

        response = """
Networking includes IP addresses, DNS, routing, switching, and communication protocols.
"""

    elif "tcp" in user_message:

        response = """
TCP provides reliable communication between network devices.
"""

    elif "udp" in user_message:

        response = """
UDP is a lightweight connectionless communication protocol.
"""

    elif "dns" in user_message:

        response = """
DNS translates domain names into IP addresses.
"""

    elif "dhcp" in user_message:

        response = """
DHCP automatically assigns IP addresses to devices on a network.
"""

    elif "firewall" in user_message:

        response = """
A Firewall filters network traffic based on security rules.
"""

    elif "devsecops" in user_message:

        response = """
DevSecOps integrates security practices throughout the DevOps lifecycle.
"""

    elif "trivy" in user_message:

        response = """
Trivy is a vulnerability scanner for containers, Kubernetes, and source code.
"""

    elif "vault" in user_message:

        response = """
HashiCorp Vault securely stores secrets, tokens, and credentials.
"""

    elif "owasp" in user_message:

        response = """
OWASP provides security best practices and vulnerability awareness.
"""

    elif "sast" in user_message:

        response = """
SAST analyzes source code for security vulnerabilities.
"""

    elif "dast" in user_message:

        response = """
DAST analyzes running applications for vulnerabilities.
"""

    elif "kafka" in user_message:

        response = """
Apache Kafka is a distributed event streaming platform.
"""

    elif "rabbitmq" in user_message:

        response = """
RabbitMQ is a message broker used for asynchronous communication.
"""

    elif "redis" in user_message:

        response = """
Redis is an in-memory database commonly used for caching and messaging.
"""

    elif "mysql" in user_message:

        response = """
MySQL is an open-source relational database management system.
"""

    elif "postgresql" in user_message:

        response = """
PostgreSQL is an advanced open-source relational database.
"""

    elif "mongodb" in user_message:

        response = """
MongoDB is a NoSQL document database used for scalable applications.
"""

    elif "sre" in user_message:

        response = """
Site Reliability Engineering (SRE) focuses on reliability, scalability, and automation.
"""

    # =====================================================
    # DEFAULT RESPONSE
    # =====================================================

    else:

        response = f"""
DevOps AI received your message:

{request.message}

Currently configured for:
- DevOps-specific responses
- Live system monitoring
- Infrastructure metrics
"""

    return {
        "response": response
    }