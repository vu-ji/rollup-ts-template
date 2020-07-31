import rollupTypescript from '@rollup/plugin-typescript';

export default [{
  input: 'src/index.ts',
  output: {
    name: 'index',
    file: `dist/index.js`,
    format: 'umd'
  },
  plugins: [
    rollupTypescript({lib: ["es5", "es6", "dom"], target: "es5"})
  ]
}]