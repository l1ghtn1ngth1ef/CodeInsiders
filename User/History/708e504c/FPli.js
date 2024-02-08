/* eslint-disable */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import VitePluginRestart from 'vite-plugin-restart'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { watchAndRun } from 'vite-plugin-watch-and-run'
import MultiVerse from './src/Interpreter/Interpreter.js'
import removeConsole from "vite-plugin-remove-console";
import vike from 'vike/plugin'

export default defineConfig({

    plugins: [
        
        VitePluginRestart({
            restart: [
                'src/uniGraph/uniGraph.jsx',
                'src/uniGraph/uniGraphImports.jsx',
                '*.js',
            ],
        }),

        watchAndRun([
            {
                name: "",
                watchKind: ['add', 'change', 'unlink'],
                watch: path.resolve('../**/*.(jsx|tsx|ts|js|json|mjs)'),
                run: 'node src/Interpreter/index.mjs', 
                delay: 300
            }
        ]),

        react({
            // Add this line
            include: "**/*.jsx",
        }), 

        MultiVerse({
            
        }),  

        react(), 
        
        removeConsole(),

        vike(),
        
    ],
}); 