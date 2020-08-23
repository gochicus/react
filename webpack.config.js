const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
        module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['ts-loader','babel-loader'],
            exclude: /node_modules/,


        },


        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },


};

