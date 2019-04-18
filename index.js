(async () => {
    //Modules
    require("dotenv").config();
    const fs = require("fs");
    const { createServer } = require("https");
    const parseURL = require("url").parse;
    const next = require("next");

    //Make app
    const app = next({ dev: process.env.DEV === "true" });
    const handler = app.getRequestHandler();

    //Prepare
    await app.prepare();

    //Create server
    createServer(
        process.env.DEV === "true" ?
            { key: fs.readFileSync("/home/apixel/key.pem"), cert: fs.readFileSync("/home/apixel/server.crt") } :
            { key: fs.readFileSync("/etc/letsencrypt/live/apixel.me/privkey.pem"), cert: fs.readFileSync("/etc/letsencrypt/live/apixel.me/fullchain.pem") },
        (req, res) => {

            //Parse URL
            const url = parseURL(req.url, true);

            //Handle reqest
            handler(req, res, url);
        }
    ).listen(3001);
})();