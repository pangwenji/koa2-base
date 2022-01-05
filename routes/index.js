const fs = require("fs");
class Router {
    readerRouter = (app) => {
        const user = require('./users');
        app.use(user.routes()).use(user.allowedMethods());
    };
}

module.exports = new Router();