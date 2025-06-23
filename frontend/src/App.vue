<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const healthStatus = ref(null)
const ciStatus = ref(null)
const logs = ref([])

onMounted(async () => {
  const baseURL = import.meta.env.VITE_API_URL

  const healthRes = await axios.get(`${baseURL}/health`)
  healthStatus.value = healthRes.data

  const ciRes = await axios.get(`${baseURL}/ci-status`)
  ciStatus.value = ciRes.data

  const logsRes = await axios.get(`${baseURL}/logs`)
  logs.value = logsRes.data
})
</script>

<template>
  <div>
    <h2>Health: {{ healthStatus?.status }}</h2>
    <h3>CI Status: {{ ciStatus?.status }}</h3>

    <h4>Recent Logs</h4>
    <ul>
      <li v-for="(log, i) in logs" :key="i">
        [{{ log.level }}] {{ log.message }}
      </li>
    </ul>
  </div>
</template>
