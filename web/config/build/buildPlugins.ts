import { BuildOptions } from 'config/types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new webpack.ProgressPlugin(),
  ];
}
