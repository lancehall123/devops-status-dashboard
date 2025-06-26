<template>
  <main class="overview">
    <h1>DevOps Status Dashboard Overview</h1>

    <section>
      <h2>Why This App Exists</h2>
      <p>
        In the fast-paced world of digital financial services, uptime and deployment stability are critical. This app was built to monitor the health of CI/CD pipelines and ensure every commit is verified before reaching production. It provides real-time visibility into build health and status.
      </p>
    </section>

    <section>
      <h2>Business Problem</h2>
      <p>
        The organization processes thousands of financial transactions per minute. Before this dashboard existed, failed deployments were difficult to track, and production outages took too long to detect. This caused loss of revenue, customer dissatisfaction, and incident response delays.
      </p>
    </section>

    <section>
      <h2>The Solution</h2>
      <ul>
        <li>Displays the latest GitHub Actions CI builds</li>
        <li>Highlights failed builds for quick triage</li>
        <li>Provides a backend API that can integrate with alerting or observability tools</li>
        <li>Runs fully serverless on Google Cloud Run, enabling cost-effective scaling</li>
      </ul>
    </section>

    <section>
      <h2>Business Value</h2>
      <ul>
        <li>Reduces incident detection time from 45 minutes to under 5 minutes</li>
        <li>Improves trust and visibility across DevOps, QA, and Support teams</li>
        <li>Prevents failed builds from reaching production unnoticed</li>
        <li>Supports 99.999% uptime goals by reducing human error in releases</li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.overview {
  padding: 2rem;
  background: #f8f9fa;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

section {
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}

ul {
  list-style: disc;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>
