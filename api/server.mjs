// Local development server — runs the Hono app via @hono/node-server
import { createServer } from 'http'
import { Hono } from 'hono'

// ── Inline the HTML (same as index.ts) for local Node.js run ──
// We import the handler function built for Vercel and wrap it.
// Since index.ts uses TypeScript, we run this via tsx (see ecosystem.config.cjs)

const PORT = process.env.PORT || 3000

// Import the app via dynamic import (tsx handles .ts → .mjs on-the-fly)
const mod = await import('./index.ts')
const handler = mod.default

const server = createServer(async (req, res) => {
  try {
    await handler(req, res)
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Min Hospital dev server → http://localhost:${PORT}`)
})
