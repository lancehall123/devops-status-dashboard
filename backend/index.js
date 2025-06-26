const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

app.get('/builds', async (req, res) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER = process.env.GITHUB_OWNER;
  const GITHUB_REPO = process.env.GITHUB_REPO;

  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    console.warn("Missing required environment variables.");
    return res.status(400).json({ error: 'Missing configuration' });
  }

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/runs?per_page=5`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'devops-dashboard'
        }
      }
    );

    const builds = response.data.workflow_runs.map(run => {
      const created = new Date(run.created_at);
      const updated = new Date(run.updated_at);
      const durationSec = Math.floor((updated - created) / 1000);

      return {
        id: run.id,
        status: run.conclusion || run.status,
        date: created.toLocaleString(),
        url: run.html_url,
        message: run.head_commit?.message || 'No commit message',
        author: run.head_commit?.author?.name || run.actor?.login || 'Unknown',
        sha: run.head_commit?.id?.substring(0, 7) || run.head_sha?.substring(0, 7),
        event: run.event,
        run_number: run.run_number,
        branch: run.head_branch || 'unknown',
        workflow: run.name || 'workflow',
        duration: `${durationSec}s`,
        commit_url: run.head_commit?.url || `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/commit/${run.head_sha}`
      };
    });

    res.json(builds);
  } catch (err) {
    console.error('Error fetching builds:', err.message);
    res.status(500).json({ error: 'Failed to fetch builds from GitHub' });
  }
});
