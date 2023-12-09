"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const react_1 = __importStar(require("./react"));
const jsdom_1 = require("jsdom");
const App_1 = require("./App");
const app = (0, express_1.default)();
// app.use(express.static('dist'));
app.get('*', (req, res) => {
    const env = new jsdom_1.JSDOM(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>SSR Good Bois</title>
            </head>
            <body>
                <div id="app"></div>
                <script src="/client.js"></script>
                <script src="/react.js"></script>
            </body>
        </html>`);
    global.document = env.window.document;
    global.window = env.window;
    (0, react_1.render)(react_1.default.createElement(App_1.App, { path: req.path }), document.getElementById("app"));
    res.send(document.documentElement.outerHTML);
});
app.listen(4000, () => {
    console.log('Listening on port http://localhost:4000');
});
