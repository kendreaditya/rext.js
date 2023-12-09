import express from 'express';
import React, { render } from './react';
import { JSDOM } from 'jsdom';

import { App } from './App';

const app = express();

// app.use(express.static('dist'));


app.get('*', (req, res) => {
    const env = new JSDOM(`
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

    render(<App path={req.path} />, document.getElementById("app"));

    res.send(document.documentElement.outerHTML);
});

app.listen(4000, () => {
    console.log('Listening on port http://localhost:4000');
});