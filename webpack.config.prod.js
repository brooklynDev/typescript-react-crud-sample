const webpack = require('webpack');


module.exports = {
    entry: [
        "./frontend/index.tsx"
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/backend/public"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loaders: ["awesome-typescript-loader?configFileName=./frontend/tsconfig.json"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};