const path = require("path");

module.exports = {
     entry: "./lib/components/Index.js",
     output: {
          path: path.resolve(__dirname, "public"),
          filename: "bundle.js"
     },
     module: {
          rules: [
               { test: /\.(js|jsx)$/, exclude: "/node_modules/", use: "babel-loader" },
               {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
               },
               { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
               { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
          ]
     }
};   