const path = require('path');
const isBuild = process.env.NODE_ENV === 'production';
const Dotenv = require('dotenv-webpack');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    localIdentName: isBuild ? '[hash:base64:5]' : '[local]-[hash:base64:5]',
  },
  webpack: config => {
    config.plugins.push(new Dotenv());
    return config;
  }
};
