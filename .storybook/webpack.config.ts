import webpack from "webpack";
import {BuildPaths} from "../config/build/types/config";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        src: path.resolve(__dirname,'..', 'src'),
        html: '',
        entry: ''
    }
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.tsx', '.ts')
    config.module?.rules?.push( {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }

                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    })
    return config
}
