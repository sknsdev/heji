import path from 'path'
import webpack from 'webpack'
import generateWebpackConfig from "./config/build/generateWebpackConfig";
import {BuildPath} from "./config/build/types/config";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const config: webpack.Configuration = generateWebpackConfig({
    mode: 'development',
    paths,
})

export default config