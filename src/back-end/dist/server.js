"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const chatServer_1 = require("./chatServer");
let app = new chatServer_1.ChatServer().app;
exports.app = app;
//# sourceMappingURL=server.js.map