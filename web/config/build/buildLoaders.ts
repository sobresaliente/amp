import { BuildOptions } from "config/types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /^.*\.module\.scss$/,
            localIdentName: options.mode === 'development' ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        }
      },
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }; // because order matters

  return [tsLoader, cssLoader];
}
