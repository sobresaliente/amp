import { BuildOptions } from "../types/config";
import webpack from 'webpack';
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js", // to avoid caching while new version deployed
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
  };
}
