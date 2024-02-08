const chokidar = await import('chokidar');

chokidar.watch('.', {
    ignored: /node_modules|\.git/,
    persistent: true,
    // followSymlinks: false,
    // useFsEvents: false,
    // usePolling: false,
  })
  .on('all', (event, path) => { console.log(event, path); })
  .on('ready', () => { 'npx kill-port 5555 && npx kill-port 9999 && npm run build && node devServer.js' })
  //.on('raw', console.log.bind(console, 'Raw event:'))