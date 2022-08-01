module.exports = {
    entry:'./src/index.js',
    module: {
        rules:[{ test: /\.svg$/, use: 'svg-inline-loader' }]
    }
}