/* eslint-disable import/unambiguous */

"use strict";

// This part of the code runs on node so we disable appropriate rules (eslint is set up as browser)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// Webpack config
exports.onCreateWebpackConfig = ({ actions }) => {
  // Tell webpack where to look when using alias in importing component and more
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        config: path.resolve(__dirname, "src/config"),
        contexts: path.resolve(__dirname, "src/contexts"),
        hooks: path.resolve(__dirname, "src/hooks"),
        images: path.resolve(__dirname, "src/images"),
        store: path.resolve(__dirname, "src/store"),
        styles: path.resolve(__dirname, "src/styles"),
        utils: path.resolve(__dirname, "src/utils"),
        types: path.resolve(__dirname, "src/types"),
      },
    },
  });
};
