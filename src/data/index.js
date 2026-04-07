export const personalInfo = {
  name: "Vishal Kumar",
  role: "DevOps | Site Reliability Engineer",
  tagline: "Architecting high-availability systems where 99.9% is just the starting point.",
  email: "vishal.kumar030508@gmail.com",
  github: "https://github.com/mishravishal0308",
  linkedin: "https://www.linkedin.com/in/mishravishalkumar/",
  resumeUrl: "/Vishal_Kumar-Resume.pdf",
};

export const aboutSummary = `I specialize in engineering reliability at scale. By leveraging Kubernetes orchestration and Infrastructure as Code, I transform complex cloud environments into stable, self-healing systems. My mission is to ensure mission-critical applications remain performant, secure, and always available.`;

export const skillCategories = [
  {
    title: "Cloud & Platforms",
    icon: "Cloud",
    skills: ["AWS", "Azure", "Linux (Ubuntu)", "Networking (VPC, DNS, Load Balancing)"],
    color: "cyan",
  },
  {
    title: "Containers & Orchestration",
    icon: "Container",
    skills: ["Docker", "Kubernetes", "Helm", "EKS", "AKS", "Service Mesh (Istio)"],
    color: "blue",
  },
  {
    title: "Automation & Scripting",
    icon: "GitBranch",
    skills: ["Python", "Bash", "GitHub Actions", "Azure DevOps", "Git", "ArgoCD"],
    color: "violet",
  },
  {
    title: "Monitoring & Observability",
    icon: "Activity",
    skills: ["Prometheus", "Grafana", "Loki", "ELK Stack"],
    color: "emerald",
  },
  {
    title: "Infrastructure as Code",
    icon: "Server",
    skills: ["Terraform", "Ansible", "CloudFormation", "Terragrunt"],
    color: "amber",
  },
  {
    title: "DevSecOps & Security",
    icon: "Shield",
    skills: ["Orca Security", "SonarQube", "BlackDuck", "Coverity", "AWS Secrets Manager"],
    color: "rose",
  },
];

export const certifications = [
  // {
  //   title: "Certified Kubernetes Administrator",
  //   issuer: "CNCF / Linux Foundation",
  //   year: "2026",
  //   color: "from-blue-400 to-indigo-500",
  //   abbr: "CKA",
  //   certUrl: "/certs/CKA.pdf",
  // },
  {
    title: "Microsoft Github Copilot - GH300",
    issuer: "Microsoft",
    year: "2025",
    color: "from-emerald-400 to-green-500",
    abbr: "GH300",
    certUrl: "/certs/Credentials - KumarVishal-1378 _ Microsoft-GH300.pdf",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    color: "from-orange-400 to-amber-500",
    abbr: "AWS",
    certUrl: "/certs/AWS Certified Solutions Architect - Associate certificate.pdf",
  },
  {
    title: "Terraform Associate HCTA0-003",
    issuer: "HashiCorp",
    year: "2024",
    color: "from-violet-400 to-purple-500",
    abbr: "TF",
    certUrl: "/certs/TerraformAssociate00320241208-27-tyy5q4.pdf",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "from-orange-400 to-amber-500",
    abbr: "AWS",
    certUrl: "/certs/AWS Certified Cloud Practitioner certificate.pdf",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    color: "from-cyan-400 to-blue-500",
    abbr: "AZ",
    certUrl: "/certs/Certifications - kumarvishal-1378 _ Microsoft Learn.pdf",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    year: "2022",
    color: "from-emerald-400 to-green-500",
    abbr: "CCNA",
    certUrl: "/certs/CCNAITNUpdated20250704-28-3wbz5j.pdf",
  },
];

export const projects = [
  {
    title: "K8s Auto-Scaler Platform",
    description: "Custom Kubernetes auto-scaling solution with predictive scaling based on traffic patterns, reducing infrastructure costs by 40%.",
    techStack: ["Kubernetes", "Go", "Prometheus", "Terraform"],
    github: "https://github.com/vishalkumar/k8s-autoscaler",
    demo: "https://k8s-autoscaler.demo.com",
    category: "Cloud",
  },
  {
    title: "GitOps CI/CD Pipeline",
    description: "Complete GitOps workflow using ArgoCD and GitHub Actions with automated rollbacks and canary deployments.",
    techStack: ["ArgoCD", "GitHub Actions", "Kubernetes", "Helm"],
    github: "https://github.com/vishalkumar/gitops-pipeline",
    demo: "",
    category: "DevOps",
  },
  {
    title: "IaC Multi-Cloud Templates",
    description: "Comprehensive Terraform modules for multi-cloud infrastructure provisioning with security best practices baked in.",
    techStack: ["Terraform", "AWS", "Azure", "Python"],
    github: "https://github.com/vishalkumar/iac-templates",
    demo: "",
    category: "Automation",
  },
  {
    title: "Observability Stack",
    description: "Full-stack monitoring solution with Prometheus, Grafana, and custom alerting — achieving 99.9% incident detection rate.",
    techStack: ["Prometheus", "Grafana", "AlertManager", "Docker"],
    github: "https://github.com/vishalkumar/observability-stack",
    demo: "https://grafana.demo.com",
    category: "DevOps",
  },
  {
    title: "Cloud Cost Optimizer",
    description: "Automated cloud cost analysis tool that identifies unused resources and recommends right-sizing, saving $50K+/month.",
    techStack: ["Python", "AWS SDK", "React", "PostgreSQL"],
    github: "https://github.com/vishalkumar/cloud-cost-optimizer",
    demo: "https://cost-optimizer.demo.com",
    category: "Cloud",
  },
  {
    title: "Deploy CLI Tool",
    description: "CLI for zero-downtime deployments with blue-green and canary strategies across multiple environments.",
    techStack: ["Node.js", "Docker", "Kubernetes", "Shell"],
    github: "https://github.com/vishalkumar/deploy-cli",
    demo: "",
    category: "Automation",
  },
];

export const experiences = [
  {
    role: "Enterprise Software Engineer",
    company: "Wolters Kluwer",
    duration: "Oct,2025 – Present",
    achievements: [
      "Redesigned a multi-namespace Kubernetes Service API, improving scalability and reducing infrastructure costs by over 70%.",
      "Built centralized observability using Prometheus, Grafana, and Loki, enhancing real-time monitoring and incident response.",
      "Developed reusable Terraform modules for AWS and Azure, enabling consistent and automated infrastructure provisioning.",
      "Optimized cloud resource utilization and cluster performance for production-grade environments.",
    ],
  },
  {
    role: "Associate Enterprise Software Engineer",
    company: "Wolters Kluwer",
    duration: "Aug,2023 – Sep,2025",
    achievements: [
      "Designed and Developed a highly available multi-cloud SFTP platform using AWS Transfer Family and Azure services.",
      "Automated IAM workflows with SailPoint, streamlining user lifecycle and access management across cloud systems.",
      "Built automation pipelines integrating SonarQube and BlackDuck for centralized code quality and security scanning.",
      "Managed an EKS-based automation platform for provisioning VPC/VNet and cloud accounts, enabling scalable DevOps workflows.",
    ],
  },
  {
    role: "Associate Enterprise Software Engineer - Intern",
    company: "Wolters Kluwer",
    duration: "Mar,2023 – Jul,2023",
    achievements: [
      "Resolved technical debt by performing version upgrades, dependency updates, and codebase patching to improve stability and security.",
      "Developed Python and Shell scripts to automate routine operational and deployment tasks.",
      "Assisted in Docker containerization and supported Kubernetes-based application deployments.",
      "Collaborated with the team to troubleshoot deployment issues and improve CI/CD pipeline efficiency.",
    ],
  },
];

export const blogPosts = [
  {
    slug: "building-zero-trust-networks-in-kubernetes",
    title: "Building Zero-Trust Networks in Kubernetes",
    author: "Vishal Kumar",
    date: "March 15, 2026",
    description: "A deep dive into implementing zero-trust security models in Kubernetes clusters using service mesh and network policies.",
    tags: ["Kubernetes", "Security", "Istio"],
    readTime: "8 min read",
    content: `## Why Zero-Trust?

Traditional network security relies on perimeter defenses — once you're inside the network, you're trusted. In Kubernetes, where pods are ephemeral and microservices communicate constantly, this model breaks down.

**Zero-trust assumes no implicit trust.** Every request must be authenticated and authorized, regardless of its origin.

## Key Components

### 1. Service Mesh with Istio

Istio provides mutual TLS (mTLS) between all services automatically:

\`\`\`yaml
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: production
spec:
  mtls:
    mode: STRICT
\`\`\`

### 2. Network Policies

Kubernetes NetworkPolicies restrict pod-to-pod communication:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-allow
spec:
  podSelector:
    matchLabels:
      app: api-server
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - port: 8080
\`\`\`

### 3. RBAC & Service Accounts

Every workload gets its own service account with minimal permissions. No shared credentials, no broad access.

## Implementation Checklist

- Enable mTLS across all namespaces
- Define NetworkPolicies for every service
- Use OPA/Gatekeeper for policy enforcement
- Implement audit logging for all API calls
- Rotate certificates automatically with cert-manager

## Conclusion

Zero-trust in Kubernetes isn't a single tool — it's a layered approach combining service mesh, network policies, RBAC, and continuous monitoring. Start with mTLS and network policies, then layer on policy enforcement and audit logging.`,
  },
  {
    slug: "terraform-at-scale-lessons",
    title: "Terraform at Scale: Lessons from 1000+ Resources",
    author: "Vishal Kumar",
    date: "February 28, 2026",
    description: "Practical patterns and anti-patterns for managing large-scale Terraform codebases across multiple teams.",
    tags: ["Terraform", "IaC", "Best Practices"],
    readTime: "12 min read",
    content: `## The Challenge

Managing 1000+ Terraform resources across multiple teams and environments is fundamentally different from managing 50. What works at small scale becomes a bottleneck.

## Patterns That Work

### 1. Module Composition over Monoliths

Break infrastructure into small, composable modules:

\`\`\`hcl
module "vpc" {
  source  = "./modules/vpc"
  cidr    = var.vpc_cidr
  region  = var.region
}

module "eks" {
  source     = "./modules/eks"
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnet_ids
}
\`\`\`

### 2. State Isolation

Never share state files across teams. Use workspaces or separate backends:

- One state per environment per service
- Remote state with locking (S3 + DynamoDB)
- Use \`terraform_remote_state\` for cross-stack references

### 3. Policy as Code

Use Sentinel or OPA to enforce guardrails:

- No public S3 buckets
- All resources must have tags
- Instance types restricted to approved list

## Anti-Patterns to Avoid

- **God modules** — modules that do everything
- **Manual state surgery** — always use \`terraform state mv\`
- **Ignoring drift** — run plan regularly in CI
- **Hardcoded values** — use variables and data sources

## CI/CD Integration

Every Terraform change should go through:

1. \`terraform fmt -check\`
2. \`terraform validate\`
3. \`terraform plan\` (posted as PR comment)
4. Manual approval
5. \`terraform apply\`

## Key Takeaway

Treat Terraform code like application code: version it, test it, review it, and automate it.`,
  },
  {
    slug: "sre-handbook-oncall",
    title: "The SRE Handbook: On-Call That Doesn't Burn Out",
    author: "Vishal Kumar",
    date: "January 10, 2026",
    description: "Strategies for building sustainable on-call rotations and incident management processes.",
    tags: ["SRE", "Culture", "Incident Mgmt"],
    readTime: "6 min read",
    content: `## The On-Call Problem

On-call shouldn't mean sleepless nights and constant anxiety. If your team dreads on-call rotations, something is fundamentally broken.

## Building Sustainable On-Call

### 1. Reduce Alert Noise

The #1 cause of burnout is alert fatigue. For every alert, ask:

- **Is it actionable?** If not, remove it.
- **Is it urgent?** If not, make it a ticket.
- **Does it need a human?** If not, automate the response.

### 2. Runbooks for Everything

Every alert should link to a runbook:

- What the alert means
- How to diagnose
- Step-by-step remediation
- When to escalate

### 3. Fair Rotations

- Minimum 1-week rotations (shorter = more context switching)
- At least 4 people in rotation
- Compensate on-call time fairly
- No on-call during vacation

### 4. Blameless Post-Mortems

After every incident:

- Focus on systems, not people
- Identify contributing factors
- Create actionable follow-ups
- Share learnings broadly

## Metrics That Matter

- **MTTA** (Mean Time to Acknowledge) — target < 5 min
- **MTTR** (Mean Time to Resolve) — track trends, not absolutes
- **Alert-to-incident ratio** — should be close to 1:1
- **On-call load** — pages per shift

## The Goal

On-call should be boring. If it's exciting, your systems need work.`,
  },
  {
    slug: "gitops-vs-traditional-cicd",
    title: "GitOps vs Traditional CI/CD: When to Use What",
    author: "Vishal Kumar",
    date: "December 5, 2025",
    description: "Comparing GitOps and traditional CI/CD approaches with real-world examples.",
    tags: ["GitOps", "CI/CD", "ArgoCD"],
    readTime: "10 min read",
    content: `## What is GitOps?

GitOps is an operational framework where Git is the single source of truth for declarative infrastructure and applications. Changes are made via pull requests, and an operator ensures the live state matches the desired state in Git.

## Traditional CI/CD vs GitOps

| Aspect | Traditional CI/CD | GitOps |
|--------|------------------|--------|
| Trigger | Push-based | Pull-based |
| Source of truth | CI server | Git repository |
| Deployment | CI pushes to cluster | Operator pulls from Git |
| Rollback | Re-run pipeline | Git revert |
| Audit trail | CI logs | Git history |

## When to Use GitOps

- **Kubernetes-native workloads** — GitOps shines with declarative K8s manifests
- **Multi-cluster deployments** — manage many clusters from one repo
- **Strict audit requirements** — Git provides a complete change history
- **Drift detection** — operators continuously reconcile desired vs actual state

## When Traditional CI/CD is Better

- **Non-declarative targets** — VMs, serverless, databases
- **Complex build pipelines** — many stages, tests, approvals
- **Imperative operations** — database migrations, data processing
- **Simple projects** — GitOps adds overhead for small teams

## ArgoCD Example

\`\`\`yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
spec:
  project: default
  source:
    repoURL: https://github.com/org/k8s-manifests
    path: apps/my-app
    targetRevision: main
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
\`\`\`

## The Hybrid Approach

Most teams benefit from combining both:

1. **CI** — Build, test, scan, push images (GitHub Actions / Jenkins)
2. **CD** — GitOps operator deploys to Kubernetes (ArgoCD / Flux)

This gives you the best of both worlds: powerful CI pipelines with declarative, auditable deployments.`,
  },
];

export const terminalCommands = [
  {
    command: "whoami",
    output: `vishal.kumar — DevOps Engineer & SRE
> Location: India
> Focus: Cloud Infrastructure & Reliability Engineering`,
  },
  {
    command: "skills --list --category all",
    output: `CLOUD        → AWS, Azure
Containers & Orchestration  → Docker, Kubernetes, Helm, EKS, AKS, Istio
Automation & Scripting       → Python, Bash, GitHub Actions, Azure DevOps, Git, ArgoCD
Monitoring & Observability  → Prometheus, Grafana, ELK/EFK, Loki
IAC          → Terraform, Ansible, CloudFormation, Terragrunt
DevSecOps & Security     → SonarQube, BlackDuck, Orca, AWS Secret Manager`,
  },
  {
    command: "uptime --career",
    output: `3+ years in production • 99.99% reliability advocate
> Deployments automated: 10,000+
> Incidents resolved: 500+
> Coffee consumed: ∞`,
  },
  {
    command: "cat /etc/philosophy.conf",
    output: `automate_everything=true
infrastructure_as_code=always
monitoring_first=true
blameless_postmortems=enabled
continuous_improvement=∞`,
  },
];

export const architectureNodes = [
  { id: "users", label: "Users / CDN", icon: "Globe", description: "End users via CloudFront CDN", group: "edge" },
  { id: "lb", label: "Load Balancer", icon: "Network", description: "Application Load Balancer with SSL termination", group: "edge" },
  { id: "ingress", label: "Ingress Controller", icon: "ArrowRightLeft", description: "Nginx Ingress with rate limiting & WAF", group: "k8s" },
  { id: "frontend", label: "Frontend Pods", icon: "Monitor", description: "React SPA served via Nginx containers", group: "k8s" },
  { id: "api", label: "API Services", icon: "Cpu", description: "Go/Node.js microservices in K8s pods", group: "k8s" },
  { id: "queue", label: "Message Queue", icon: "Layers", description: "RabbitMQ / SQS for async processing", group: "data" },
  { id: "db", label: "Database", icon: "Database", description: "PostgreSQL RDS with read replicas", group: "data" },
  { id: "cache", label: "Redis Cache", icon: "Zap", description: "ElastiCache for sessions & query cache", group: "data" },
  { id: "cicd", label: "CI/CD Pipeline", icon: "GitBranch", description: "GitHub Actions + ArgoCD GitOps", group: "devops" },
  { id: "monitoring", label: "Monitoring", icon: "Activity", description: "Prometheus + Grafana + PagerDuty", group: "devops" },
  { id: "logs", label: "Log Aggregation", icon: "FileText", description: "ELK Stack / CloudWatch Logs", group: "devops" },
  { id: "secrets", label: "Secrets Mgmt", icon: "Lock", description: "HashiCorp Vault + AWS Secrets Manager", group: "devops" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];
