import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {

  "input": "lib/index.js",

  "output": {
    // "file": "index.js",
    "dir": "dist",
    "name": "plugjsServer",
    "format": "cjs"
  },

  "external": [
    "dotenv-safe",
    "uuid"
  ],

  "plugins": [
    babel({ exclude: "node_modules"}),
    commonjs({ include: "node_modules/**" })
  ]
}