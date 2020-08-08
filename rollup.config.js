import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    format: "cjs",
    exports: "named",
  },
  plugins: [resolve(), svgr(), babel({ babelHelpers: "bundled" })],
};
