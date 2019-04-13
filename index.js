(async () => {
    //Modules
    require("dotenv").config();
    const { createServer } = require("http");
    const parseURL = require("url").parse;
    const next = require("next");

    //Make app
    const app = next({ dev: process.env.DEV === "true" });
    const handler = app.getRequestHandler();

    //Prepare
    await app.prepare();

    //Create server
    createServer((req, res) => {

        //Parse URL
        const url = parseURL(req.url, true);

        //Handle reqest
        handler(req, res, url);
    }).listen(3001);
})();