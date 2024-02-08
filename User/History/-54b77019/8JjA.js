/**
 * Custom Hot Reloading Plugin
 * Start `vite build` on Hot Module Reload
 */
import { build } from 'vite'
import { exec } from 'child_process'
import { METHODS } from 'http';

export default function HotBuild() {

    let bundling = false
    const hmrBuild = async () => {
        bundling = true
        await build({'build': { '--ssr ./SSRServer/SSRServer.jsx --outDir ./BasePlatForm/SSRServer ' }}) // <--- you can give a custom config here or remove it to use default options

    };

    return {
        name: 'hot-build',
        enforce: "pre",
        // HMR
        handleHotUpdate({ file, server }) {
            if (!bundling) {
                console.log(`hot vite build starting...`)
                hmrBuild()
                    .then(() => {
                        bundling = false     
                        console.log(`hot vite build finished`) 
                    })
                }
            return []
        }
    }
}
