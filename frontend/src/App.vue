<template>
  <main>
    <h1>DevOps Status Dashboard Overview</h1>

    <section class="builds">
      <p class="description">
        This application is a real-world demonstration of full-stack DevOps practices, showcasing development workflows,
        CI/CD automation (including testing), and containerized cloud deployment using GitHub Actions, Google Cloud, and
        Terraform.
      </p>
      <h2>Recent GitHub Builds</h2>
      <h4>Click on a build to view details on GitHub</h4>
      <ul v-if="builds.length">
        <li v-for="build in builds" :key="build.id" class="build-item">
          <a :href="build.url" target="_blank" rel="noopener">
            <span class="build-meta">
              <span class="build-id">Run #{{ build.run_number }}</span>
              <span :class="['status-badge', build.status.toLowerCase()]">{{ build.status }}</span>
              <span class="build-date">{{ build.date }}</span>
              <span class="build-message">"{{ build.message }}"</span>
            </span>
            <div class="build-details">
              <span>{{ build.author }} on branch {{ build.branch }}</span>
              <span>{{ build.event }} ({{ build.workflow }})</span>
              <span>Commit: <code>{{ build.sha }}</code></span>
              <span>Duration: {{ build.duration }}</span>
            </div>

          </a>
        </li>
      </ul>
      <p v-else class="loading">Loading builds…</p>
    </section>

    <br />
    <AppOverview />
    <Overview />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import AppOverview from './components/AppOverview.vue'
import Overview from './components/Overview.vue'

interface Build {
  id: number
  status: string
  date: string
  url: string
  message: string
  author: string
  sha: string
  event: string
  run_number: number
  branch: string
  workflow: string
  duration: string
}

const API_URL = import.meta.env.VITE_API_URL
const builds = ref<Build[]>([])

onMounted(async () => {
  try {
    const response = await axios.get(`${API_URL}/builds`)
    builds.value = response.data
  } catch (err) {
    console.error('Error fetching builds:', err)
  }
})
</script>

<style scoped>
main {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f4f4f4;
  max-width: 850px;
  margin: auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

.description {
  font-size: 1.05rem;
  color: #111;
  margin-bottom: 1.5rem;
}

section {
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
}

h4 {
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.build-item {
  padding: 0.8rem 0;
  border-bottom: 1px solid #ddd;
}

.build-item:last-child {
  border-bottom: none;
}

a {
  text-decoration: none;
  color: inherit;
}

.build-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  font-family: monospace;
}

.build-id {
  font-weight: bold;
}

.status-badge {
  padding: 0.2rem 0.5rem;
  border-radius: 0.4rem;
  font-weight: bold;
  text-transform: capitalize;
}

.status-badge.success {
  background: #d4edda;
  color: #155724;
}

.status-badge.failure {
  background: #f8d7da;
  color: #721c24;
}

.status-badge.pending,
.status-badge.in_progress {
  background: #fff3cd;
  color: #856404;
}

.build-date,
.build-message {
  font-size: 0.9rem;
  color: #555;
}

.build-details {
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.3rem;
  display: flex;
  gap: 1.2rem;
}
</style>
