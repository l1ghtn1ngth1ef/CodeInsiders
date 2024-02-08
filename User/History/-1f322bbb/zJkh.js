import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { watchAndRun } from 'vite-plugin-watch-and-run'
import path from 'path';
//import HotBuild from './Components/VitePrint/SSRhmr.js'

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
    },
    react(),

    //  watchAndRun([
    //    {
    //      name: 'gen',
    //      watchKind: ['add', 'change', 'unlink'],
    //      watch: path.resolve('../**/*.(jsx|tsx|ts|js|json|mjs)'),
    //      run: 'echo $(npx kill-port 9999)',
    //     delay: 300
    //   }
    // ]),
  ],

});