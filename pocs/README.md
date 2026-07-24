# Expanded Public-Safe POC Blueprints

These POCs are public-safe and can be implemented in a personal GitHub portfolio. They should be built with dummy applications, dummy data, sanitized diagrams, and no client names.

## POC 01. EKS Microservices Health Check and Probe Standardization

### Purpose

Demonstrate how a multi-service platform can be made more stable by adding service-level health endpoints and Kubernetes liveness/readiness probes.

### Scope

- Create dummy services representing Scala, Node.js, Angular, and Java workloads.
- Add `/health`, `/ready`, or equivalent endpoints.
- Create Kubernetes deployment YAML with readiness and liveness probes.
- Show different startup delays and dependency checks.
- Add a troubleshooting guide for failed probes and crash loops.

### Deliverables

- Sample services or mock containers.
- Kubernetes manifests.
- Health-check behavior documentation.
- Before/after explanation showing why pod-level health checks matter.

### Portfolio Value

This directly reflects real work on stabilizing a large platform with multiple application stacks and Kubernetes pod-level health validation.

## POC 02. AWS EKS Path-Based Routing for Multi-Service Platform

### Purpose

Show how many backend services can be exposed through one controlled entry point using ALB ingress and path-based routing.

### Scope

- Create 5 to 8 dummy services.
- Configure ingress paths such as `/api/users`, `/api/events`, `/api/reports`, `/api/admin`.
- Include TLS/host placeholder documentation.
- Add CloudWatch/logging notes.

### Deliverables

- Kubernetes services/deployments.
- ALB ingress example.
- Routing diagram.
- Troubleshooting checklist.

### Portfolio Value

Demonstrates platform routing design for a real multi-service application estate without exposing internal routes.

## POC 03. Jenkins to systemd Release Automation with Rollback

### Purpose

Demonstrate a reliable deployment model for Linux services using Jenkins, release directories, current/previous symlinks, systemd, and rollback.

### Scope

- Use a dummy backend service.
- Jenkins pipeline builds and uploads/deploys artifact.
- Deployment script creates versioned release directory.
- `current` points to active release and `previous` supports rollback.
- systemd manages process lifecycle.

### Deliverables

- Jenkinsfile.
- systemd service file.
- deploy and rollback scripts.
- Runbook with validation and rollback steps.

### Portfolio Value

Reflects real release automation and server stabilization work where manual terminal sessions were replaced by managed services and rollback-aware deployment.

## POC 04. ECS Fargate Application Modernization

### Purpose

Show how a manually deployed backend can be containerized and moved to ECS Fargate with ECR, ALB, CloudWatch, and Secrets Manager.

### Scope

- Build a sample API container.
- Push image to ECR.
- Deploy using ECS Fargate task definition and service.
- Place ALB in front of service.
- Store configuration through Secrets Manager or environment variables.
- Add CloudWatch logs.

### Deliverables

- Dockerfile.
- ECS task definition sample.
- ALB/service design notes.
- Deployment runbook.

### Portfolio Value

Matches healthcare platform modernization work using ECS/Fargate and AWS managed services.

## POC 05. Active-Passive DR with Global Accelerator Concept

### Purpose

Create a sanitized DR blueprint showing primary and standby regions, health monitoring, validation, and traffic switch using AWS Global Accelerator.

### Scope

- Draw primary/standby region diagram.
- Define health-check logic and failover criteria.
- Document database promotion concept.
- Document application validation before traffic switch.
- Include rollback/failback checklist.

### Deliverables

- DR architecture diagram.
- Failover runbook.
- Validation checklist.
- Risk register.

### Portfolio Value

Demonstrates cloud resilience design and the ability to reason about active-passive versus active-active tradeoffs.

## POC 06. Membership SaaS Deployment Automation with Jenkins, S3, SSM, and CloudFormation

### Purpose

Show a controlled deployment model where an admin portal triggers Jenkins, Jenkins stores artifacts in S3, and AWS SSM performs server-side deployment.

### Scope

- Create dummy Super Admin deployment request flow.
- Define CloudFormation templates for network, IAM, EC2, RDS placeholders, and S3 artifact bucket.
- Create Jenkins pipelines for first-time deployment and redeployment.
- Use SSM command execution pattern.
- Add health validation through Nginx and application endpoint.

### Deliverables

- Architecture diagram.
- CloudFormation templates.
- Jenkinsfile examples.
- SSM execution scripts.
- First-time deploy and redeploy runbooks.

### Portfolio Value

Reflects real membership platform deployment automation without disclosing internal code or client names.

## POC 07. Linux .NET Application Deployment Behind Nginx and systemd

### Purpose

Demonstrate a Linux-first deployment pattern for ASP.NET Core using Nginx reverse proxy, systemd, health checks, and rollback.

### Scope

- Deploy a sample .NET API or dummy service.
- Configure Nginx reverse proxy.
- Run application under systemd.
- Add `/health` endpoint validation.
- Include deployment and rollback scripts.

### Deliverables

- Nginx template.
- systemd service file.
- Deployment script.
- Health-check runbook.

### Portfolio Value

Matches Linux-first deployment work on a cloud-based membership platform.

## POC 08. CRM AWS Deployment with Terraform, Nginx, FastAPI, React, RDS, and S3

### Purpose

Build a clean low-cost AWS deployment pattern for a lightweight enterprise automation application.

### Scope

- Terraform skeleton for EC2, RDS MySQL, S3, IAM, and security groups.
- Nginx serves React frontend at `/crm/`.
- Nginx proxies FastAPI backend at `/crm-api/`.
- S3 handles document uploads.
- Backend runs with Docker Compose or systemd.

### Deliverables

- Terraform code.
- Nginx config.
- Docker Compose file.
- systemd alternative.
- Bitbucket pipeline example.
- Deployment and migration checklist.

### Portfolio Value

Demonstrates practical AWS infrastructure and application deployment for small-to-medium business applications.

## POC 09. Elasticsearch Retention and S3 Archive Workflow

### Purpose

Demonstrate how operational data growth can be controlled using retention rules, archive/export workflow, and restore documentation.

### Scope

- Create dummy Elasticsearch indexes.
- Define retention policy.
- Export old data to S3-compatible storage.
- Document restore validation.
- Include monitoring and cost notes.

### Deliverables

- Retention policy document.
- Archive script concept.
- Restore runbook.
- Monitoring checklist.

### Portfolio Value

Reflects operational work around large data/search systems and cloud storage governance.

## POC 10. AWS Cloud Operations Handover Pack

### Purpose

Create a reusable handover template for any AWS project covering architecture, access, deployment, monitoring, backup, incident response, DR, cost, and known risks.

### Scope

- Build a sample handover pack for a dummy AWS application.
- Include ownership matrix, escalation flow, runbooks, and checklist.
- Add monitoring and backup validation sections.
- Add cost optimization and security review sections.

### Deliverables

- Handover document.
- Operations checklist.
- Incident response template.
- Backup and restore checklist.
- Cost review template.

### Portfolio Value

Shows operational maturity beyond simple deployment work.

## POC 11. ArgoCD GitOps Drift Detection for EKS

### Purpose

Demonstrate desired-state deployment and drift detection for EKS workloads using ArgoCD.

### Scope

- Store Kubernetes manifests in Git.
- Connect ArgoCD to the repository.
- Deploy a sample app into EKS or a local Kubernetes cluster.
- Manually change a running resource to create drift.
- Show ArgoCD detecting and correcting drift.

### Deliverables

- GitOps repository structure.
- ArgoCD application manifest.
- Drift detection screenshots or sanitized logs.
- Sync and rollback notes.

### Portfolio Value

Reflects real-world GitOps thinking for Kubernetes environments.

## POC 12. Mobile App CI/CD Signing and Internal Test Release

### Purpose

Demonstrate a secure mobile build and release pipeline pattern using dummy mobile code and placeholder signing assets.

### Scope

- Use a dummy Flutter or Android project.
- Store signing asset references securely.
- Build mobile artifact through Jenkins or AWS CodePipeline.
- Publish artifact to a simulated internal test release folder.
- Document release validation and rollback behavior.

### Deliverables

- Pipeline definition.
- Secure signing asset handling notes.
- Build artifact folder structure.
- Internal test release runbook.

### Portfolio Value

Shows CI/CD capability beyond backend deployments, while keeping real mobile app details private.

## POC 13. Windows Workload on Kubernetes/EKS Design Lab

### Purpose

Demonstrate hybrid Kubernetes workload planning for Linux and Windows workloads.

### Scope

- Document Linux and Windows node-group model.
- Deploy mock Linux service and mock Windows workload design.
- Explain scheduling constraints and operational differences.
- Add monitoring, logging, and support notes.

### Deliverables

- Architecture diagram.
- Node scheduling notes.
- Troubleshooting guide.
- Support runbook.

### Portfolio Value

Reflects experience with platforms that cannot be treated as pure Linux container workloads.

## POC 14. S3 Glacier Restore and Validation Runbook

### Purpose

Demonstrate archive and restore discipline for cloud object storage.

### Scope

- Create a dummy S3 lifecycle policy.
- Move old objects to Glacier-style archive tier.
- Document restore request process.
- Validate restored objects and update handover checklist.

### Deliverables

- Lifecycle policy example.
- Restore runbook.
- Validation checklist.
- Cost and timing notes.

### Portfolio Value

Shows backup/restore maturity, which is important for production cloud operations.

## POC 15. WordPress /blog Automation Behind Nginx for SaaS Tenant

### Purpose

Demonstrate automated WordPress deployment under a `/blog` path behind Nginx for a SaaS-style tenant application.

### Scope

- Deploy dummy main app behind Nginx.
- Deploy WordPress under `/blog`.
- Configure PHP-FPM and MySQL placeholder database.
- Automate setup through Jenkins or shell scripts.
- Add health checks and rollback notes.

### Deliverables

- Nginx config.
- WordPress setup script.
- MySQL bootstrap notes.
- Jenkins pipeline example.
- Validation runbook.

### Portfolio Value

Matches the membership platform's pending WordPress automation area and turns it into a public-safe POC.

## POC 16. AWS Presales and FTR Evidence Pack Generator

### Purpose

Create a reusable pack for AWS readiness, presales, FTR-style evidence, and case-study preparation.

### Scope

- Build templates for architecture, controls, monitoring, backup, DR, security, and support.
- Create an evidence checklist.
- Create a sanitized case-study generator structure.
- Add review tracker and readiness status.

### Deliverables

- Evidence checklist.
- Case-study template.
- Review tracker.
- Readiness dashboard or Markdown index.

### Portfolio Value

Shows DevOps plus presales maturity: not only building systems, but also documenting them for review, handover, and business positioning.
