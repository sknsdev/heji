import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin"

const consoleProcesser = (percentage: number, message: string, ...args: any) => {
    console.clear()
    console.info('Building', Number(percentage * 100).toFixed(2), message, ...args);
};

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(consoleProcesser),
    ]
}

export default config