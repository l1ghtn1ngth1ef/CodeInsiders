import express from 'express';
import * as filesystem from 'fs'; 
import { fileURLToPath } from 'url';
import path from 'path';

const endPoint = express();
const endPointInstance = {}

for (let i = 0; i < 1; i++) {

    if (i = 1) {
        const DevServer = express(); DevServer.set('name', 'DevServer'); DevServer.listen('5555');
      //  console.log(DevServer.get('name'));
      //  endPointInstance[i] = DevServer
       // console.log(endPointInstance[i]);
        const vite = await import('vite');

        const viteDevMiddleware = (
            await vite.createServer({
                server: { middlewareMode: true }
            })).middlewares

        DevServer.use(viteDevMiddleware)
        DevServer.use('*', async (req, res) => {
            const url = req.originalUrl;

            try {
                const template = await vite.transformIndexHTML(url, filesystem.readFileSync('index.html', 'utf8'));
                const render = await vite.ssrLoadModule('./endPointModules/SSRServer.jsx');
                const html = template.replace(`<!--outlet-->`, render);

                res.status(200).set({ 'Content-Type': 'text/html' }).end(html);

            } catch (error) {

                res.status(500).end(error.message);
            }

        });
    }
    if (i = 2) {
        console.log("Testing")
        const SSRServer = express(); SSRServer.set('name', 'SSRServer'); SSRServer.listen('9999'); //console.log(SSRServer.set('env', 'production'));
        SSRServer.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), './Production/clientSide'), { index: false }));

     //   console.log(SSRServer.get('name'));
     //   endPointInstance[i] = SSRServer.get('name');
    //    console.log(endPointInstance[i]);

        SSRServer.use('*', async (_, res) => {

            try {
                const template = filesystem.readFileSync('./Production/clientSide/index.html', 'utf-8');
                const render = await import('../Production/mainFrame/SSRServer.js');
                const html = template.replace(`<!--outlet-->`, render ?? "");

                res.status(200).set({ 'Content-Type': 'text/html' }).end(html);

            } catch (error) {
                res.status(500).end(error);
            }
        });
    }
}

//endPointInstance[1] = console.log("Object Property: for", endPointInstance[1].get('name'), "Env:", endPointInstance[1].get('env'));


