const nextCSS = require("@zeit/next-css");

module.exports = nextCSS({
    webpack: config => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        };

        return config;
    }
});