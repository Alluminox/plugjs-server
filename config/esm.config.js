import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'lib/index.js',
  output: {
    // dir: 'dist',
    file: "dist/es6.js",
    name: 'plugjsServer',
    format: 'esm'
  },
  external: [
    "dotenv-safe",
    "uuid"
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};