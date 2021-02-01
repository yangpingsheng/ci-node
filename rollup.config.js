import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/bundle.min.js',
      format: 'cjs',
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    json(),
    commonjs({
      extensions: ['.js', '.ts'],
    }),
    nodeResolve(),
  ],
}
