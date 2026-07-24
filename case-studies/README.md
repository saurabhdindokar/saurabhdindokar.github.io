# Expanded Public-Safe Case Studies

Prepared for: Saurabh Dindokar  
Role focus: AWS DevOps Engineer, Cloud Migration, Kubernetes, CI/CD, Production Operations  
Public-safe version: Do not include real client names or internal project names.

## 01. Smart Building Management Platform - AWS EKS Modernization

### Project Overview

This project involved modernizing a large smart building management and automation platform from manually managed infrastructure toward a containerized AWS architecture. The platform supported real-time building operations, access-control workflows, telemetry processing, mobile applications, administrative portals, analytics, reporting, and integration with building systems.

The application estate was large and mixed. It included Scala backend services, Node.js services, Angular web applications, Java components, mobile build pipelines, Kafka, Elasticsearch, MongoDB, and Windows-dependent access-control workloads. The modernization required a practical AWS design that could support microservices, stateful components, routing complexity, observability, release automation, and production support handover.

### Business Challenge

- Existing deployments depended heavily on manual server operations, terminal sessions, ad hoc service restarts, and scattered operational knowledge.
- Multiple services and technology stacks had different build, deployment, startup, and health-check behavior.
- The platform needed a repeatable migration path into AWS without losing operational control of real-time services.
- Stateful services such as Kafka, Zookeeper, Elasticsearch, and MongoDB required careful handling during containerization.
- The platform needed stronger deployment visibility, rollback readiness, and health validation at service and pod level.

### My Responsibilities

- Supported AWS migration planning for a multi-service smart building platform.
- Helped containerize and structure backend services for Kubernetes-based deployment.
- Worked on Kubernetes deployment definitions, service exposure, health checks, and operational documentation.
- Added and standardized application-level health-check endpoints across Scala, Node.js, Angular, and Java services.
- Configured Kubernetes liveness and readiness probes so unhealthy pods could be detected and restarted correctly.
- Supported ECR image publishing, deployment tagging, and release traceability.
- Worked on ALB path-based routing for multiple backend service paths through a controlled public entry point.
- Prepared deployment, monitoring, troubleshooting, and handover documentation for support teams.

### Technical Work Completed

- Designed a Kubernetes-oriented deployment model for a platform with more than 30 application service routes.
- Improved pod-level stability using liveness and readiness probes aligned with each service's startup behavior.
- Added health-check files and endpoints across multiple stacks so infrastructure checks were not only port-based.
- Supported EKS workload definitions for backend services, web services, and supporting components.
- Helped establish image build and push flow into Amazon ECR.
- Supported ALB ingress/path-routing design to simplify external routing for a large number of services.
- Documented deployment sequence, troubleshooting steps, dependency checks, and handover runbooks.

### Technologies Used

AWS EKS, Amazon ECR, AWS ALB, Route 53, CloudWatch, Docker, Kubernetes, Jenkins, ArgoCD, Kafka, Zookeeper, Elasticsearch, MongoDB, Scala, Node.js, Angular, Java, Linux, YAML, Bash, CI/CD.

### Outcome

- Moved the platform closer to a repeatable AWS deployment model.
- Reduced dependency on manual service checks by introducing proper health endpoints and pod probes.
- Improved operational visibility at the Kubernetes level.
- Created a stronger foundation for future GitOps, monitoring, rollback, and production support.

## 02. Smart Building Management Platform - Hybrid Linux and Windows EKS Stabilization

### Project Overview

The smart building platform contained both Linux-friendly services and a Windows-dependent access-control component. The challenge was to support this mixed environment while keeping the operational model manageable for deployment, monitoring, and troubleshooting.

### Business Challenge

- Most services were suitable for Linux container workloads, but one critical access-control component required Windows compatibility.
- The platform needed consistent release and support practices despite different operating system requirements.
- Scheduling, service discovery, health checks, and troubleshooting differed between Linux and Windows workloads.
- A poor migration design could have created unstable access-control behavior or a difficult support model.

### My Responsibilities

- Supported the hybrid workload design for Linux and Windows components.
- Helped validate deployment behavior and dependency readiness across mixed workloads.
- Documented operational risks, troubleshooting steps, and handover details.
- Worked on startup health behavior, internal DNS/service reachability checks, and readiness validation.

### Technical Work Completed

- Supported EKS planning with Linux node groups for core microservices and Windows node groups for Windows-native workloads.
- Helped define service checks for components that depended on other internal services.
- Documented rollout and troubleshooting steps for mixed workload deployment.
- Supported stabilization of health-check behavior so platform status could be trusted during deployments.

### Technologies Used

AWS EKS, Windows node groups, Linux node groups, Kubernetes, Docker, ALB, CloudWatch, Jenkins, ArgoCD, Windows services, Linux services, DNS/service discovery.

### Outcome

- Created a clearer migration path for a platform that could not be moved as pure Linux workloads.
- Improved support readiness by documenting differences between Linux and Windows workloads.
- Reduced risk during platform stabilization and future production migration.

## 03. Smart Building Management Platform - Jenkins Release Automation and Server Stabilization

### Project Overview

Before automation, deployments were heavily dependent on manual actions, terminal sessions, direct server access, and inconsistent restart methods. The goal was to make QA and production-like deployments repeatable, restart-safe, and supportable.

### Business Challenge

- Backend services were previously run through manual terminal/screen sessions.
- Restart behavior after server reboot was unreliable.
- Multiple Scala and Node.js services needed consistent deployment and rollback behavior.
- Release history and current/previous artifact tracking were not strong enough for fast recovery.

### My Responsibilities

- Supported Jenkins-based deployment automation for backend services.
- Helped replace manual service execution with managed process control.
- Prepared deployment documentation and troubleshooting runbooks.
- Helped standardize service restart and rollback behavior.

### Technical Work Completed

- Supported Jenkins pipelines for multiple Scala backend services.
- Helped move long-running services into `systemd` so they survived reboots and could be managed consistently.
- Supported Node.js service management with PM2/system service patterns.
- Helped define release directory structure using current and previous release references.
- Documented rollback steps and deployment verification checks.
- Supported shared library publishing practices for reproducible builds.

### Technologies Used

Jenkins, Linux, systemd, PM2, Scala, Node.js, Angular, Nexus-style artifact publishing, Bash, Git, CI/CD, deployment runbooks.

### Outcome

- Reduced manual deployment effort and operational risk.
- Improved restart behavior after server reboot.
- Made rollback and service status verification clearer for support teams.
- Built a practical release automation foundation for a large multi-service platform.

## 04. Smart Building Management Platform - Real-Time Data Backbone and Observability

### Project Overview

The platform relied on real-time events, building telemetry, integrations, search, and operational analytics. Supporting this required stable event and data services alongside application deployment work.

### Business Challenge

- Building telemetry and automation events required reliable event streaming.
- Search and operational analytics depended on Elasticsearch availability and data retention.
- MongoDB and Elasticsearch workloads introduced stateful operational concerns.
- Logs, alerts, and troubleshooting documentation were needed for support readiness.

### My Responsibilities

- Supported infrastructure and operations planning around Kafka, Zookeeper, Elasticsearch, and MongoDB.
- Helped document service dependencies, operational checks, restart steps, and known risks.
- Supported monitoring and data retention planning.
- Prepared support-friendly troubleshooting notes for common operational issues.

### Technical Work Completed

- Documented real-time service dependencies and startup order considerations.
- Supported Kubernetes/stateful workload planning for event and data services.
- Worked on Elasticsearch retention and archive planning to control growth and improve maintainability.
- Prepared monitoring and handover notes for logs, service health, and recovery checks.

### Technologies Used

Kafka, Zookeeper, Elasticsearch, MongoDB, AWS EKS, Docker, Kubernetes, CloudWatch, Linux, Jenkins, S3 archival concepts.

### Outcome

- Improved operational understanding of the event and data layer.
- Reduced risk of support teams treating stateful services like simple stateless apps.
- Created a stronger base for monitoring, retention, backup, and restore discussions.

## 05. IoT Healthcare Platform - AWS ECS Modernization

### Project Overview

This project involved modernizing a healthcare workflow platform used for case management, image/document handling, reports, subscriptions, notifications, authentication, and administrative operations. The target architecture used AWS managed services and container deployment to reduce manual server operations and improve scalability.

### Business Challenge

- Existing infrastructure had manual operations and limited repeatability.
- The application needed secure storage for healthcare-related images and documents.
- Backend services required a containerized deployment model.
- Database, cache, file storage, frontend delivery, security, and monitoring needed to be designed together.

### My Responsibilities

- Supported AWS modernization planning and deployment documentation.
- Helped structure application deployment with container images and managed AWS services.
- Supported ECS/Fargate, ECR, ALB/NLB, S3, CloudFront, DocumentDB, RDS, and Redis/ElastiCache planning.
- Prepared operational documentation for deployment, monitoring, backups, security, and handover.

### Technical Work Completed

- Supported container image publishing to ECR.
- Helped define ECS/Fargate deployment model for backend services.
- Supported frontend/static asset delivery through S3 and CloudFront.
- Helped document managed database usage with DocumentDB and PostgreSQL/RDS patterns.
- Supported Redis/ElastiCache planning for caching/session-related use cases.
- Documented monitoring, IAM, secrets, and operational governance expectations.

### Technologies Used

AWS ECS Fargate, Amazon ECR, ALB, NLB, S3, CloudFront, Route 53, DocumentDB, RDS PostgreSQL, Redis/ElastiCache, Secrets Manager, KMS, IAM, CloudWatch, CloudTrail, AWS Config, GuardDuty, Security Hub.

### Outcome

- Produced a clearer AWS managed-service deployment direction.
- Improved separation of application, storage, database, security, and observability responsibilities.
- Reduced dependency on manually managed infrastructure.

## 06. IoT Healthcare Platform - Active-Passive Disaster Recovery and Global Traffic

### Project Overview

The healthcare platform required a disaster recovery design that balanced availability with data consistency. The chosen model was active-passive DR with a primary region and a warm standby region.

### Business Challenge

- The platform had write-heavy and session-dependent workflows.
- Active-active design could introduce data consistency and operational complexity.
- DNS-only failover was not ideal for controlled recovery.
- The team needed documented failover steps and validation checks.

### My Responsibilities

- Supported DR architecture documentation and operational runbook preparation.
- Helped compare active-active and active-passive models.
- Supported traffic routing design using AWS Global Accelerator.
- Helped document failover validation, database promotion, notification, and state tracking steps.

### Technical Work Completed

- Documented active-passive DR model with one active region and one warm standby region.
- Supported Global Accelerator traffic model with controlled traffic dials.
- Helped document health monitoring and sustained outage validation before failover.
- Supported database promotion and application endpoint validation planning.
- Prepared DR runbook content for incident response and handover.

### Technologies Used

AWS Global Accelerator, ECS/Fargate, ECR, ALB/NLB, Route 53, DocumentDB/RDS concepts, Secrets Manager, CloudWatch, SNS/notification concepts, IAM, DR runbooks.

### Outcome

- Created a safer DR direction for healthcare workflows where data consistency matters.
- Reduced dependency on manual DNS changes during regional failover.
- Improved DR operational readiness through documented validation and recovery steps.

## 07. IoT Healthcare Platform - Backup, Restore, and Cloud Operations Handover

### Project Overview

Beyond migration and DR, the platform needed operational maturity: backup validation, restore procedures, monitoring, incident response, access governance, cost awareness, and clear handover documentation.

### Business Challenge

- Support teams needed clear procedures for backup restore, health checks, and incidents.
- Cloud services were spread across compute, database, storage, security, and networking layers.
- Without handover documentation, production support would depend on a small number of people.

### My Responsibilities

- Prepared cloud operations documentation and handover material.
- Supported backup and restore procedure documentation.
- Helped define monitoring, alerting, incident, and known-risk sections.
- Documented access governance and secrets handling expectations.

### Technical Work Completed

- Created service maps and deployment notes.
- Documented backup and restore workflows for object storage and database-related components.
- Prepared monitoring and alerting notes around application and infrastructure health.
- Documented incident response flow, known risks, cost considerations, and support ownership.

### Technologies Used

S3, CloudFront, ECS/Fargate, RDS, DocumentDB, CloudWatch, CloudTrail, Config, GuardDuty, Security Hub, IAM, Secrets Manager, KMS, runbooks.

### Outcome

- Improved production support readiness.
- Reduced operational knowledge gaps.
- Created reusable handover patterns for future AWS projects.

## 08. Cloud-Based Membership Platform - Linux-First AWS Deployment Automation

### Project Overview

This project focused on creating a Linux-first AWS deployment model for a membership platform. The architecture included a central Super Admin control panel, client application deployments, WordPress blog support, SQL Server and MySQL databases, CloudFront, Route 53, S3 artifacts, SSM automation, Jenkins pipelines, Nginx, and systemd.

### Business Challenge

- The deployment model needed to support first-time client provisioning and later redeployment.
- Existing direction included Windows/IIS references, but Linux-first deployment was preferred for cost and operational simplicity.
- Super Admin needed to trigger deployment workflows without directly changing servers.
- WordPress `/blog` automation, DNS/HTTPS, CloudFront, backup validation, and monitoring needed to be planned before production readiness.

### My Responsibilities

- Helped create and validate the Linux AWS UAT deployment flow.
- Supported Jenkins pipeline structure for infrastructure, Super Admin deployment, client first-time deployment, and redeployment.
- Worked with CloudFormation-based AWS infrastructure planning.
- Supported health validation through Kestrel and Nginx.
- Documented current status, limitations, next steps, production checklist, rollback, DNS, and cost notes.

### Technical Work Completed

- Supported shared AWS network, IAM, artifact bucket, SQL Server RDS, and MySQL RDS planning.
- Helped deploy Super Admin on Linux with Jenkins, Nginx, systemd, and SQL Server RDS.
- Supported client first-time deployment and redeployment flow.
- Helped implement repeat publish behavior so existing clients route to redeploy instead of duplicate stack creation.
- Supported client configuration sync, logo sync, and appsettings merge fixes.
- Added health validation for first-time and redeploy pipelines.
- Documented remaining blockers, including WordPress automation, DNS/HTTPS, CloudFront/ALB, backup validation, and monitoring alarms.

### Technologies Used

AWS CloudFormation, EC2 Linux, Graviton planning, RDS SQL Server, RDS MySQL, S3, SSM, Jenkins, Nginx, ASP.NET Core, systemd, CloudFront, Route 53, Bash, PowerShell, CI/CD.

### Outcome

- Proved a working Linux AWS UAT deployment flow for Super Admin and client .NET application deployment.
- Created a repeatable automation model for first-time deployment and redeployment.
- Clearly identified production readiness gaps before wider rollout.

## 09. Cloud-Based Membership Platform - Windows/IIS Deployment Reference and Hybrid Migration Path

### Project Overview

The membership platform also contained a Windows/IIS deployment package and historical production direction. This became reference material as the project moved toward Linux-first AWS deployment, but it remained important for understanding fallback options and Windows-specific deployment needs.

### Business Challenge

- Some deployment knowledge existed in Windows/IIS scripts and runbooks.
- The project direction changed from Windows/IIS to Linux-first.
- Teams needed to avoid mixing old and new deployment assumptions.
- A controlled migration path was needed from Windows references to Linux production automation.

### My Responsibilities

- Reviewed Windows/IIS deployment model as reference material.
- Helped separate old deployment logic from current Linux-first target.
- Supported documentation showing which folder/package was current and which was historical.
- Helped define Jenkins, SSM, and server-role responsibilities.

### Technical Work Completed

- Documented role-based deployment structure with shared infrastructure, Super Admin first-time deployment, Super Admin redeployment, client first-time deployment, and client redeployment.
- Defined Super Admin as the control plane and Jenkins as the deployment executor.
- Supported S3 artifact upload and SSM-based remote execution model.
- Documented database handling, client configuration, WordPress, and module update behavior.

### Technologies Used

Windows Server, IIS, PowerShell, AWS SSM, S3, Jenkins, CloudFormation, SQL Server RDS, EC2, Nginx, Linux, systemd.

### Outcome

- Reduced confusion between legacy Windows deployment and current Linux deployment direction.
- Preserved useful Windows/IIS knowledge without treating it as the active production target.
- Improved handover quality for future deployment decisions.

## 10. Fitness and Wellness Application - Production Support and Deployment Stabilization

### Project Overview

This project involved production support and cloud operations for a fitness and wellness application. The focus was on deployment coordination, environment stability, issue investigation, and operational communication.

### Business Challenge

- Production support required careful coordination across application and infrastructure layers.
- Releases and incidents needed clear checks before and after deployment.
- Operational work had to be communicated in a way business and technical stakeholders could understand.

### My Responsibilities

- Supported production environment troubleshooting and deployment coordination.
- Helped review infrastructure and service behavior during incidents or releases.
- Prepared or followed deployment steps, validation checks, and support notes.
- Coordinated with developers and stakeholders for fixes and verification.

### Technical Work Completed

- Supported application deployment and post-deployment validation.
- Helped investigate infrastructure, service, or configuration-related issues.
- Supported monitoring/log review and operational communication.
- Documented findings and next steps for handover or follow-up.

### Technologies Used

AWS, EC2, CloudWatch, Linux/Windows operations, deployment runbooks, CI/CD support, application logs, DNS/SSL concepts.

### Outcome

- Improved stability and support visibility during application operations.
- Strengthened release discipline and production troubleshooting process.

## 11. Enterprise Automation Platform - AWS Deployment and Infrastructure Templates

### Project Overview

This project focused on deploying an internal enterprise automation/CRM-style application on AWS using a low-cost architecture that could scale later. The architecture included an EC2 application server, private RDS MySQL, S3 document storage, IAM roles, Nginx reverse proxy, FastAPI backend, React frontend, Docker Compose or systemd, and Bitbucket pipeline templates.

### Business Challenge

- The application needed a clean AWS deployment path from an existing non-cloud/on-prem style setup.
- Document uploads needed to move toward S3-backed storage.
- Backend API routing needed to be simplified through Nginx instead of a gateway pattern.
- Infrastructure needed to be repeatable and low-cost for the first deployment.

### My Responsibilities

- Prepared AWS deployment plan and infrastructure template structure.
- Supported Terraform skeleton covering EC2, RDS, S3, IAM, and security groups.
- Helped design Nginx routing for frontend and backend API paths.
- Prepared backend deployment options using Docker Compose or systemd.
- Supported Bitbucket pipeline template planning.

### Technical Work Completed

- Created conservative AWS architecture with EC2, private RDS MySQL, S3 document bucket, IAM role, and security groups.
- Documented Nginx routing for static frontend and FastAPI backend.
- Prepared Dockerfile, Docker Compose, systemd service, and Bitbucket pipeline examples.
- Documented Terraform initialization, plan, apply, variables, outputs, and secret-handling warnings.
- Supported migration checklist, cost/scaling notes, security/operations notes, and application change tasks.

### Technologies Used

AWS EC2, RDS MySQL, S3, IAM, Security Groups, Terraform, Nginx, FastAPI, React, Docker Compose, systemd, Bitbucket Pipelines, Linux.

### Outcome

- Created a practical AWS deployment path for a lightweight enterprise automation platform.
- Improved infrastructure repeatability through Terraform planning.
- Reduced operational complexity by simplifying API routing and storage design.

## 12. Enterprise Automation Platform - Document Processing POC

### Project Overview

This POC explored automation for converting structured document information into usable data outputs. The solution used Python-based processing, API components, MongoDB/Excel-style outputs, and sample documents to validate feasibility.

### Business Challenge

- Manual document review and data extraction can be slow and error-prone.
- Business users needed structured outputs from uploaded documents.
- The POC needed to validate whether document parsing could support future automation.

### My Responsibilities

- Reviewed POC structure and supported documentation of its purpose.
- Helped position the POC as an automation accelerator rather than a production system.
- Supported packaging of POC evidence for portfolio-safe explanation.

### Technical Work Completed

- Worked with a Python/FastAPI-style POC structure.
- Supported document-to-structured-output workflow using sample files.
- Validated output generation into Excel/JSON-like formats.
- Documented how the POC could later be secured, containerized, and deployed.

### Technologies Used

Python, FastAPI, MongoDB concepts, Excel output, JSON, document parsing, local POC packaging.

### Outcome

- Demonstrated feasibility of document-to-data automation.
- Created a base that could later be productionized with authentication, file storage, queues, logging, and cloud deployment.

## 13. Cloud Partner Enablement Program - AWS Readiness, FTR, and GTM Operations

### Project Overview

This work supported AWS partner readiness and cloud business enablement. It included partner onboarding material, foundational technical review evidence, solution readiness notes, ACE/co-sell opportunity preparation, GTM case study collateral, AWS billing/resource workbook support, and operational handover documents.

### Business Challenge

- Partner readiness requires evidence, documentation, controls, case studies, and operational clarity.
- Technical teams needed organized material for AWS partner programs, FTR, opportunity submissions, and GTM collateral.
- Billing, resource review, and service-offering documentation needed to be traceable and review-ready.

### My Responsibilities

- Organized and prepared AWS partner journey documentation.
- Supported FTR evidence tracking and readiness material.
- Prepared case study and solution collateral in AWS-aligned formats.
- Supported ACE opportunity preparation and cloud service positioning.
- Helped prepare billing/resource review material and handover notes.

### Technical Work Completed

- Created and maintained partner journey trackers, readiness notes, evidence trackers, and handover files.
- Prepared cloud case study collateral using AWS-style templates.
- Supported opportunity import review notes and submission-ready drafts.
- Assisted with AWS service page review, QA page review, and collateral feedback.
- Organized billing/resource information and operational workbooks for review.

### Technologies Used

AWS Partner Central concepts, AWS FTR, ACE/co-sell, CCoE pre-work, AWS billing/resource review, Excel, Word, Markdown, HTML, cloud operations documentation.

### Outcome

- Improved partner readiness and internal cloud governance.
- Created reusable documentation patterns for AWS service offerings and case-study collateral.
- Strengthened presales and cloud operations support capability.

## 14. Digital Learning Accessibility Tool - Interactive Widget Review and Packaging

### Project Overview

This project involved supporting interactive education content and accessibility review for a number-line learning widget. The work involved static HTML/JS assets, widget player/editor files, accessibility review spreadsheets, packaging, and comparing live/current behavior with fixed or backup versions.

### Business Challenge

- Interactive learning widgets must work consistently across player/editor modes.
- Accessibility issues need structured review and tracking.
- Static content packages can be hard to troubleshoot because they include HTML, JS, CSS, assets, and widget metadata.

### My Responsibilities

- Reviewed widget files, accessibility tracking sheets, and packaged outputs.
- Helped analyze current/live widget behavior compared with backup or fixed versions.
- Supported documentation of fixes and packaging status.

### Technical Work Completed

- Reviewed number-line widget assets including HTML, JS, CSS, manifest, player, editor, and supporting libraries.
- Compared live/current versions with backup versions.
- Supported accessibility issue tracking using spreadsheet-based review material.
- Helped package a fixed output for validation.

### Technologies Used

HTML, JavaScript, CSS, widget packaging, accessibility review, static assets, spreadsheet-based QA tracking.

### Outcome

- Improved traceability of accessibility review and widget packaging work.
- Created a supportable explanation of frontend/tooling work without exposing client details.

