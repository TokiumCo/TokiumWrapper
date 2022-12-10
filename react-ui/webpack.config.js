module.exports = () => {
  return {
    mode: 'production',
    entry: 'dist/index.js',
    module: {
      rules: [
        {
          test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
          enforce: 'pre',
          exclude: /node_modules/,
          use:  "source-map-loader",
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.png', '.d.ts'],
    },  
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  }
}