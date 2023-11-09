import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Extracts CSS into separate files
      {
        loader: 'css-loader', // Translates CSS into CommonJS
        options: {
          modules: { // Enable CSS modules
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')), // Enable CSS modules for files ending in .module.
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]', // Configure the generated ident
          },
        },
      }, // Translates CSS into CommonJS
      'sass-loader', // Compiles Sass to CSS
    ],
  };
}
