const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    output: {
        filename: 'static/bundle.js'
    }
};
