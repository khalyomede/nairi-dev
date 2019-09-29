"use strict";

import path from "path";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

function bundle(from, to) {
  return {
    input: path.resolve(__dirname, "resources", "views", from),
    plugins: [
      babel({
        externalHelpers: false,
        include: __dirname + "/resources",
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 5%, Firefox ESR, not dead",
              esmodules: false,
              spec: true,
              loose: false,
              debug: false,
              useBuiltIns: false,
              forceAllTransforms: true,
              shippedProposals: false
            }
          ]
        ]
      }),
      resolve()
    ],
    output: {
      file: path.resolve(__dirname, "public", "js", to),
      format: "iife"
    }
  };
}

export default [bundle("article/show.js", "article/show.js")];
