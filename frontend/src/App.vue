<template>
  <main>
   
    <h1>DevOps Build Monitor</h1>

    <section class="builds">
      <h2>Recent GitHub Builds</h2>
      <ul v-if="builds.length">
        <li v-for="build in builds" :key="build.id">
          <a :href="build.url" target="_blank" rel="noopener">
            <span class="build-meta">
              <span class="build-id">#{{ build.id }}</span>
              <span :class="['status-badge', build.status.toLowerCase()]">
                {{ build.status }}
              </span>
              <span class="build-date">{{ build.date }}</span>
            </span>
          </a>
        </li>
      </ul>
      <p v-else class="loading">Loading builds…</p>
    </section>
     <AppOverview />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import AppOverview from './components/AppOverview.vue'

interface Build {
  id: number
  status: string
  date: string
  url: string
}

const API_URL = import.meta.env.VITE_API_URL || 'https://your-backend-url'
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
  max-width: 800px;
  margin: auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

section {
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #444;
}

.builds ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.builds li {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  font-family: monospace;
}

.builds li:last-child {
  border-bottom: none;
}

.builds a {
  text-decoration: none;
  color: #333;
  display: block;
}

.build-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.build-id {
  font-weight: bold;
}

.status-badge {
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
}

.status-badge.success {
  background-color: #28a745;
}

.status-badge.failure {
  background-color: #dc3545;
}

.status-badge.pending,
.status-badge.in_progress {
  background-color: #ffc107;
  color: #222;
}

.build-date {
  font-size: 0.85rem;
  color: #666;
}

.loading {
  font-style: italic;
  color: #888;
  text-align: center;
}
</style>
