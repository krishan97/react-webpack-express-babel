import express from 'express'; 
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
const app = express();
const PORT = 4000;
app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(PORT, () => {
  console.log('server started on: ${PORT}');
});
