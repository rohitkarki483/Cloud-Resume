# Cloud Resume Project (Serverless on AWS)

This repository contains my Cloud Resume Project, built as part of my cloud learning journey.  
The project demonstrates how to design, deploy, and operate a production-grade serverless web application on AWS using Terraform for Infrastructure as Code and GitHub Actions for CI/CD automation.

This project focuses on real-world architecture, security best practices, and automation, rather than simple static hosting.

---

## Live Demo

- Website: https://www.rohitkarki7.com.np

---

## Architecture Overview

The application follows a serverless, highly available, and globally distributed architecture.
![Architecture Diagram](Images/architecture.png)

### Request Flow

1. A user accesses the website using a custom domain managed in Amazon Route 53.
2. The request is routed to Amazon CloudFront, which serves cached static content from Amazon S3.
3. Frontend JavaScript sends an HTTP request to Amazon API Gateway to retrieve the visitor count.
4. API Gateway invokes an AWS Lambda function.
5. Lambda updates and retrieves the counter value from Amazon DynamoDB.
6. The response is returned to the frontend and displayed on the website.

Direct access to the S3 bucket is blocked; all public traffic flows securely through **CloudFront using Origin Access Control (OAC)**.

---

## AWS Services Used

- **Amazon Route 53** – DNS and domain management  
- **Amazon CloudFront** – Global CDN with HTTPS  
- **Amazon S3** – Private static website hosting  
- **AWS Certificate Manager (ACM)** – SSL/TLS certificates  
- **Amazon API Gateway (HTTP API)** – Serverless API layer  
- **AWS Lambda** – Backend logic for visitor counter  
- **Amazon DynamoDB** – Serverless NoSQL database  
- **AWS IAM** – Least-privilege access control  

---

## Infrastructure as Code (Terraform)

All AWS resources are provisioned using **Terraform**.

### Managed Resources

- S3 bucket (private)
- CloudFront distribution with OAC
- API Gateway
- Lambda function
- DynamoDB table
- IAM roles and policies
- Route 53 records
- ACM certificate

Terraform commands are executed locally from the `terraform/` directory:

```bash
cd terraform
terraform init
terraform plan
terraform apply

```

## CI/CD with GitHub Actions

Frontend deployments are automated using **GitHub Actions**.

### Workflow behavior:
- Triggered on every push to the `main` branch
- Syncs **only the `website/` directory** to Amazon S3
- Optionally invalidates CloudFront cache to reflect changes immediately

This ensures consistent, repeatable, and error-free deployments without manual intervention.

---

## Security Design

- S3 bucket blocks all public access.
- CloudFront is the only service allowed to access S3.
- IAM roles follow the principle of least privilege.
- No AWS credentials are exposed in frontend code.
- Secrets are stored securely in GitHub repository secrets.

---

## Project Structure

```text
cloud-resume/
├── .github/workflows/      # GitHub Actions CI/CD
├── terraform/              # Terraform Infrastructure as Code
├── lambda/                 # Lambda function source & package
├── website/                # Frontend (HTML, CSS, JS)
├── Images/                 # Architecture diagrams
├── .gitignore
└── README.md
```
## Key Learnings

- Understanding CloudFront caching behavior and invalidation strategies.
- Secure serverless backend design.
- Terraform project structuring and state management.
- Separation of infrastructure provisioning and application deployment.
- CI/CD automation using GitHub Actions.

  



