variable "project_id" {
  description = "Your GCP project ID"
  type        = string
}

variable "region" {
  description = "Region to deploy resources"
  type        = string
  default     = "europe-west1"
}

variable "backend_image" {
  description = "Full image path for the backend container"
  type        = string
}

variable "frontend_image" {
  description = "Full image path for the frontend container"
  type        = string
}

variable "github_token" {
  description = "GitHub token for API access"
  type        = string
  sensitive   = true
}

variable "github_owner" {
  description = "GitHub repository owner"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
}
