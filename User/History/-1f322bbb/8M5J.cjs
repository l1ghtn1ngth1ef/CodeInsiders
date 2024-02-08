import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { watchAndRun } from 'vite-plugin-watch-and-run'
import path from 'path';
import HotBuild from './Components/VitePrint/SSRhmr.js'

export default defineConfig({
  server: {
    watch: false,
  },
  build: {
    //  watch: {
    //   include: '/**'
    //   },
  },

  resolve: {
    alias: {
      fs: require.resolve('rollup-plugin-node-builtins'),
    },
  },
  // build: {
  rollupOptions: {
    input: {
      //  client: 'endPointModules/SSRRecipient.jsx',
      //  server: 'endPointModules/SSRServer.jsx',
      //  app: 'endPoints/devServer.js',
      //     }
    }
  },

  plugins: [
    {
      // ...
      configureServer(server) {
        // Example: wait for a client to connect before sending a message
        server.ws.on('connection', () => {
          server.ws.send('my:greetings', { msg: 'hello' })
        })
      },
    },
    react(),

    //   watchAndRun([
    //    {
    //     name: 'gen',
    //       watchKind: ['add', 'change', 'unlink'],
    //       watch: path.resolve('../**/*.(jsx|tsx|ts|js|json|mjs)'),
    //       run: 'echo $(pkill node && npm run build && npx kill-port 5555 && npx kill-port 9999 && node ./devServer.js)', 
    //       delay: 300
    //     }
    //    ]),
    HotBuild(),
  ],

});