# Mermaid Diagrams Source

These diagrams are public-safe and can be reused in GitHub README files, portfolio pages, or converted to PNG/SVG later.

## Smart Building EKS Modernization

```mermaid
flowchart LR
  Dev[Developers] --> Jenkins[Jenkins CI/CD]
  Jenkins --> ECR[Amazon ECR]
  ECR --> EKS[AWS EKS Cluster]
  EKS --> Linux[Linux Worker Nodes]
  EKS --> Windows[Windows Worker Node]
  ALB[AWS ALB Ingress] --> EKS
  EKS --> Scala[Scala Services]
  EKS --> Node[Node.js Services]
  EKS --> Java[Java Services]
  EKS --> Web[Angular Web]
  EKS --> Kafka[Kafka and Zookeeper]
  EKS --> ES[Elasticsearch]
  EKS --> Mongo[MongoDB]
  CloudWatch[CloudWatch Logs and Metrics] --> EKS
  Argo[ArgoCD Desired State] --> EKS
```

## IoT Healthcare ECS and DR

```mermaid
flowchart TB
  Users[Users] --> GA[AWS Global Accelerator]
  GA --> PrimaryALB[Primary Region ALB]
  GA -. standby .-> StandbyALB[Standby Region ALB]
  PrimaryALB --> ECS1[ECS Fargate Services]
  StandbyALB --> ECS2[Warm Standby ECS Services]
  ECS1 --> DocDB1[DocumentDB / RDS Primary]
  ECS2 --> DocDB2[Replica / Standby Data Layer]
  ECS1 --> S3A[S3 Object Storage]
  CDN[CloudFront] --> S3A
  CW[CloudWatch + Alerts] --> ECS1
  CW --> ECS2
  Sec[Secrets Manager + KMS + IAM] --> ECS1
  Sec --> ECS2
```

## Membership Deployment Automation

```mermaid
flowchart LR
  Admin[Super Admin Portal] --> Request[Deployment Request]
  Request --> Jenkins[Jenkins Pipeline]
  Jenkins --> CFN[CloudFormation]
  Jenkins --> S3[S3 Artifact Bucket]
  Jenkins --> SSM[AWS SSM Run Command]
  CFN --> VPC[VPC + IAM + Security Groups]
  CFN --> EC2[Linux EC2 App Server]
  CFN --> SQL[RDS SQL Server]
  CFN --> MYSQL[RDS MySQL]
  SSM --> EC2
  EC2 --> Nginx[Nginx Reverse Proxy]
  EC2 --> DotNet["ASP.NET Core systemd Service"]
  EC2 --> WP["WordPress /blog"]
  Nginx --> Health["/health Validation"]
  CloudFront[CloudFront + Route 53] --> Nginx
```

## Enterprise Automation AWS Deployment

```mermaid
flowchart TB
  Internet[Internet] --> Nginx[Nginx on EC2]
  Nginx --> React["React Static Frontend /crm/"]
  Nginx --> API["FastAPI Backend /crm-api/"]
  API --> RDS[Private RDS MySQL]
  API --> S3[S3 Document Bucket]
  EC2Role[IAM Role for EC2] --> S3
  Terraform[Terraform Skeleton] --> EC2[EC2 App Server]
  Terraform --> RDS
  Terraform --> S3
  Terraform --> SG[Security Groups]
  Pipeline[Bitbucket Pipeline] --> EC2
```

## Cloud Partner Enablement Flow

```mermaid
flowchart LR
  Evidence[Technical Evidence] --> FTR[AWS FTR Readiness]
  CCoE[CCoE Pre-work] --> FTR
  Cases[Case Study Collateral] --> GTM[GTM and Service Positioning]
  ACE[ACE / Co-sell Inputs] --> GTM
  Billing[Billing and Resource Review] --> Ops[Cloud Operations Handover]
  FTR --> Partner[Partner Enablement Program]
  GTM --> Partner
  Ops --> Partner
```
