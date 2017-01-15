require('dotenv').config();
import * as express from 'express';
import * as http from 'http';
import router from './backend/routes';
import { json, urlencoded } from 'body-parser';
import * as webpack from 'webpack';
import * as path from 'path';
import * as fs from 'fs';


const app: express.Express = express();

app.use(express.static('./backend/public'));
app.use(urlencoded({ extended: false }));
app.use(json());

if (process.env.NODE_ENV !== 'production') {
    try {
        fs.unlinkSync('./backend/public/bundle.js');
    }catch(e) {}
    const config = require('./webpack.config');
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}

app.use('/', router);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/index.html'));
});

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => console.log(`server started on port ${port}`));
