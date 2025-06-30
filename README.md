# DevOps Status Dashboard

This project is a full-stack DevOps monitoring dashboard built using:

-  Node.js (Express) backend  
-  Vue 3 frontend with TypeScript and Vite  
-  Deployed to Google Cloud Run  
-  CI/CD via GitHub Actions  
-  Secure secrets via GitHub & environment variables  
-  Containerized using Docker  
-  Monitors latest GitHub Actions build statuses  

---

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/devops-status-dashboard.git
cd devops-status-dashboard
```

---

## Project Structure

```
.
├── backend/              # Node.js + Express API
├── frontend/             # Vue 3 + TypeScript + Vite UI
├── infra/                # Terraform (optional, for GCP setup)
└── .env                  # Environment variables (not committed)
```

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v18+)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional, for container builds)

---

## Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

### 🔐 `.env` file (create in `/backend`)

```env
PORT=8080
GITHUB_TOKEN=ghp_XXXXXXXXXXXXXXXXXXXX
GITHUB_OWNER=your-github-username
GITHUB_REPO=devops-status-dashboard
```

Run the backend:

```bash
npm run dev
```

The API will start at: `http://localhost:8080`

---

