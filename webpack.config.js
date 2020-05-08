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
               {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: "url-loader",
                    options: {
                         limit: 10000
                    }
               }
          ]
     }
};   