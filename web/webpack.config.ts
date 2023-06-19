import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { BuildEnv, BuildPaths } from './config/types/config';



export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const mode = env.mode || "development";
  const PORT = env.port || 3001;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT
  });

  return config
};
