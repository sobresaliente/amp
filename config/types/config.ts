export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface BuildOptions {
  paths: BuildPaths;
  mode: BuildMode;
}
