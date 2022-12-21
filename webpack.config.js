const path = require("path");

module.exports = {
  mode: "production",
  entry: "./elektu.js",
  output: {
    path: path.resolve(__dirname),
    filename: "elektu.min.js",
  },
};
