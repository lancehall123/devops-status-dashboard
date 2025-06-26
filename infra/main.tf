provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_cloud_run_service" "backend" {
  name     = "devops-backend"
  location = var.region

  template {
    spec {
      containers {
        image = var.backend_image
        env {
          name  = "GITHUB_TOKEN"
          value = var.github_token
        }
        env {
          name  = "GITHUB_OWNER"
          value = var.github_owner
        }
        env {
          name  = "GITHUB_REPO"
          value = var.github_repo
        }
        ports {
          container_port = 8080
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service" "frontend" {
  name     = "devops-frontend"
  location = var.region

  template {
    spec {
      containers {
        image = var.frontend_image
        ports {
          container_port = 8080
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "backend_invoker" {
  location = google_cloud_run_service.backend.location
  service  = google_cloud_run_service.backend.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

resource "google_cloud_run_service_iam_member" "frontend_invoker" {
  location = google_cloud_run_service.frontend.location
  service  = google_cloud_run_service.frontend.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
