"use strict";
require('dotenv').config();
var env = process.env;
env.BLOG_POSTS_PER_PAGE = 21;
env.DEV_SERVER_HOST = process.env.DEV_SERVER_HOST || "localhost";
env.DEV_SERVER_PORT = process.env.DEV_SERVER_PORT ? parseInt(process.env.DEV_SERVER_PORT) : 3099;
module.exports = env;
//# sourceMappingURL=settings.js.map