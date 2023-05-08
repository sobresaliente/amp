import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }; // because order matters

  return [tsLoader];
}
