import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

const globby = require('globby');
const icons = globby.sync('src/svgs/*.svg');

export default {
  input: ['src/index.js', ...icons],
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'auto',
    },
    {
      dir: 'lib/esm',
      format: 'es',
      exports: 'auto',
    },
  ],
  external: ['react', 'prop-types'],
  plugins: [resolve(), svgr(), babel({ babelHelpers: 'bundled' })],
};
