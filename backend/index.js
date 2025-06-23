const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: '*',
}))


app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});


app.get('/ci-status', (req, res) => {
  res.json({
    lastBuild: '2024-06-11T13:00:00Z',
    status: 'success',
    duration: '1m 20s',
    triggeredBy: 'push to main',
  });
});


app.get('/logs', (req, res) => {
  res.json([
    { level: 'INFO', message: 'Service started successfully', timestamp: new Date().toISOString() },
    { level: 'WARN', message: 'CPU usage high on pod devops-api', timestamp: new Date().toISOString() },
    { level: 'ERROR', message: 'Deployment to prod failed', timestamp: new Date().toISOString() }
  ]);
});

app.listen(port, () => {
  console.log(`DevOps API running on http://localhost:${port}`);
});
