# DevOps Status Dashboard

This project demonstrates a full-stack DevOps workflow using a Vue.js frontend, Node.js backend, CI/CD via GitHub Actions, and deployment to Google Cloud Run using Terraform.

## Local Development Setup

### Prerequisites

- Node.js (v18 or above)
- npm
- Google Cloud SDK (for deployment)
- Terraform (if managing infrastructure)

### Environment Setup

Create the following `.env` file in both the `backend` and `frontend` directories:

#### `.env` (backend)

```env
GITHUB_TOKEN=your_github_pat
GITHUB_OWNER=your_github_username_or_org
GITHUB_REPO=your_repository_name
PORT=8080
```

#### `.env` (frontend)

```env
VITE_API_URL=http://localhost:8080
```

>  The `.env` file is ignored from version control by `.gitignore`.

---

##  GitHub Workflows

### 1. Backend CI (`.github/workflows/backend-ci.yml`)

This workflow runs on pushes to the `dev` branch for changes in the `backend/` directory. It:

- Installs dependencies
- Runs tests (Jest)
- Builds the Docker image

### 2. Backend Deployment to Cloud Run (`.github/workflows/deploy-cloudrun.yml`)

Triggered on pushes to `main` with changes in `backend/`. It:

- Authenticates to Google Cloud
- Builds and pushes the Docker image
- Deploys to Cloud Run

### 3. Frontend Deployment to Cloud Run (`.github/workflows/frontend-cloudrun.yml`)

Triggered on pushes to `main` with changes in `frontend/`. It:

- Builds the frontend using Vite
- Deploys it to Cloud Run

---

## Build & Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```



---

## What This Project Demonstrates

- Real-time GitHub Actions status monitoring
- Modern frontend + backend separation
- Containerization and deployment to Google Cloud Run
- CI/CD automation with GitHub Actions
- Infrastructure-as-Code with Terraform (optional)