<template>
  <section class="overview">
    <div class="grid">
      <div>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Version Control:</strong> GitHub <a href="https://github.com/lancehall123/devops-status-dashboard" target="_blank" rel="noopener">https://github.com/lancehall123/devops-status-dashboard</a></li>
          <li><strong>Frontend:</strong> Vue 3, Vite, TypeScript</li>
          <li><strong>Backend:</strong> Node.js, Express, TypeScript</li>
          <li><strong>CI/CD:</strong> GitHub Actions with Docker builds</li>
          <li><strong>Hosting:</strong> Google Cloud Run (frontend & backend)</li>
          <li><strong>Infrastructure as Code:</strong> Terraform</li>
        </ul>
        <br>
      </div>

      <div>
        <h2>How It Works</h2>
        <ol>
          <li>Code pushed to the <code>dev</code> branch.</li>
          <li>A Pull request is reviewed with the intent of merging into the <code>main</code> branch.</li>
          <li>Code merged into the <code>main</code> branch triggers a CI workflow.</li>
          <li>GitHub Actions installs dependencies.</li>
          <li>GitHub Actions builds Docker images for the frontend and backend.</li>
          <li>GitHub Actions runs production tests of the backend.</li>
          <li>Containers are deployed to Cloud Run via GitHub Actions.</li>
          <li>The frontend calls the backend's <code>/builds</code> endpoint for build data.</li>
        </ol>
      </div>

      <div>
        <h2>Security Practices</h2>
        <ul>
          <li>Tokens and credentials are stored in GitHub Secrets.</li>
          <li>Secrets are injected at runtime during CI/CD only.</li>
          <li>No sensitive data is committed to source control.</li>
        </ul>
      </div>

      <div>
        <h2>Testing</h2>
        <ul>
          <li>Backend tested using Jest and Supertest.</li>
          <li>Tests run automatically in the CI pipeline.</li>
        </ul>
      </div>
      <div>
        <h2>Infrastructure</h2>
        <ul>
          <li>Terraform used for infrastructure as code.</li>
          <li>Google Cloud resources managed through Terraform.</li>
        </ul>
      </div>
      <div>
        <h2>Future Enhancements</h2>
        <ul>
          <li>Display metrics from GCP Cloud Monitoring</li>
          <li>Add Prometheus + Grafana integration</li>
          <li>Configure Slack or Teams alerts for failed builds</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.overview {
  padding: 2.5rem;
  max-width: 1200px;
  margin: auto;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  font-family: 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  color: #333;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

h2 {
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 0.5rem;
}

ul,
ol {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

code {
  background-color: #f4f4f4;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
