module.exports = () => {
  return {
    mode: 'production',
    entry: 'dist/Index.js',
    module: {
      rules: [
        {
          test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
          enforce: 'pre',
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "source-map-loader"],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },    
  }
}