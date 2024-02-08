import vite
const ws = new WebSocket('ws://localhost:5173')
ws.addEventListener('message', ({ data }) => {
  const payload = JSON.parse(data)
  switch (payload.type) {
    case '...':
    // Handle payloads...
  }
})
// Send any events to the Vite dev server
ws.send('...')