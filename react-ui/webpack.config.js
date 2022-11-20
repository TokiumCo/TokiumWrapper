module.exports = () => {
  return {
    mode: 'production',
    entry: 'dist/index.js',
    module: {
      rules: [
        {
          test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/, /\.css$/],
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