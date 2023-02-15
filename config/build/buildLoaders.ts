import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildOptions} from "./types/config";

export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {
    const cssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },

                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsloader: webpack.RuleSetRule = {
        test: /\.tsx?$/, //Регулярка для выборки файлов
        use: 'ts-loader', // лоадер для обработки
        exclude: /node_modules/,
    }

    return [
        tsloader,
        cssLoader
    ]
}
