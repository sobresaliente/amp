import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // allows to not include extension
  }
}
