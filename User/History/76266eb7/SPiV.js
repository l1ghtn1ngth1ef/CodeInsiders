/**
 * Custom Hot Reloading Plugin
 * Start `vite build` on Hot Module Reload
 */
import { build } from 'vite'

export default function HotBuild() {

    let bundling = false
    const hmrBuild = async () => {
        bundling = true
        await build({ 'build': { outDir: './BasePlatForm' } }) // <--- you can give a custom config here or remove it to use default options
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
                    }).then(() => {
                        run-func `devServer.js` ``
            });
                }
            return []
        }
    }
}