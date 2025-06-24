<template>
  <main>
    <h1>🛠️ DevOps Build Monitor</h1>

    <section class="builds">
      <h2>🔄 Recent GitHub Builds</h2>
      <ul v-if="builds.length">
        <li v-for="build in builds" :key="build.id">
          <a :href="build.url" target="_blank" rel="noopener">
            <span :class="build.status === 'success' ? 'success' : 'failure'">
              {{ statusIcon(build.status) }}
            </span>
            Build #{{ build.id }} – {{ build.status }} – {{ build.date }}
          </a>
        </li>
      </ul>
      <p v-else>Loading builds…</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

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

function statusIcon(status: string) {
  if (!status) return '🔄'
  if (status.toLowerCase() === 'success') return '✅'
  if (status.toLowerCase() === 'failure') return '❌'
  return '⚠️'
}
</script>


<style scoped>
main {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f7f7f7;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

section {
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}

.builds ul {
  list-style: none;
  padding: 0;
}

.builds li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  font-family: monospace;
}

.builds a {
  text-decoration: none;
  color: #333;
}

.success {
  color: green;
  font-weight: bold;
  margin-right: 0.5rem;
}

.failure {
  color: red;
  font-weight: bold;
  margin-right: 0.5rem;
}
</style>
