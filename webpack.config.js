
require("dotenv").config();
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const { findPort } = require("dev-server-ports");


const HOST = process.env.HOST || "localhost";
const DEFAULT_PORT = process.env.PORT || 3000;
const devServerHostCheckDisabled =
    process.env.DISABLE_DEV_SERVER_HOST_CHECK === "true";
const https = process.env.HTTPS === "true";

const generatePortInUsePrompt = () => {
    return `Be sure to update the following configurations if you proceed with the port change.

    1. Update the "PORT" in ".env" file in the app root.
    2. Update the signInRedirectURL & signOutRedirectURL in "src/config.json".
    3. Go to the Asgardeo console and navigate to the protocol tab of your application:
        - Update the Authorized Redirect URL.
        - Update the Allowed Origins.
`;
};

module.exports = async () => {
    const PORT = await findPort(DEFAULT_PORT, HOST, false, {
        extensions: {
            BEFORE_getProcessTerminationMessage: () => {
                return generatePortInUsePrompt();
            },
        },
    });

    return ({
        devServer: {
            static: [path.resolve(__dirname, "dist"),
            path.resolve(__dirname, "public")],
            historyApiFallback: true,
            server: https ? "https" : "http",
            host: HOST,
            allowedHosts: 'all',
            port: PORT,
        },
        devtool: "source-map",
        entry: ["./src/app.tsx"],
        mode: "development",
        target: ["web", "es2020"],
        module: {
            rules: [
                {
                    test: /\.(tsx|ts|js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        // Use browserslist config or specify targets here
                                        targets: "last 2 Chrome versions, last 2 Firefox versions, last 2 Edge versions, last 2 Safari versions",
                                        bugfixes: true,
                                        modules: false
                                    }
                                ],
                                "@babel/preset-react",
                                "@babel/preset-typescript"
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/, // Exclude node_modules from CSS processing
                    use: ["style-loader", "css-loader", "postcss-loader"], // Ensure postcss-loader is included
                },
                {
                    test: /\.(png|jpg|cur|gif|eot|ttf|woff|woff2)$/,
                    use: ["url-loader"]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                    exclude: /node_modules/, // Ignore source maps in node_modules
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "public"), // Copy all files from public folder
                        to: path.resolve(__dirname, "dist"), // Copy to dist folder
                    },
                ],
            }),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
            extensions: [".tsx", ".ts", ".js", ".json"]
        }
    });
};
