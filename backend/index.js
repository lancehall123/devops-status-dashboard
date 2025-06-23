const express = require('express')
const axios = require('axios')
require('dotenv').config() // If you're using a .env file locally
const PORT = process.env.PORT || 8080


const app = express()
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`)
})
// New /builds route
app.get('/builds', async (req, res) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN
  const GITHUB_OWNER = process.env.GITHUB_OWNER
  const GITHUB_REPO = process.env.GITHUB_REPO

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/runs?per_page=5`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'devops-dashboard'
        }
      }
    )

    const builds = response.data.workflow_runs.map(run => ({
      id: run.run_number,
      status: run.conclusion || run.status,
      date: new Date(run.created_at).toLocaleString(),
      url: run.html_url
    }))

    res.json(builds)
  } catch (err) {
    console.error('Error fetching builds:', err.message)
    res.status(500).json({ error: 'Failed to fetch builds from GitHub' })
  }
})
