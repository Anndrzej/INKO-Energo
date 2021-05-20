const path = require(`path`);
const fs = require(`fs`);
const HtmlPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

    return templateFiles.map((item) => {
        const parts = item.split(`.`);
        const name = parts[0];
        const extension = parts[1];

        return new HtmlPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
        })
    })
}

const htmlPlugins = generateHtmlPlugins(`./src/html`);

module.exports = {
    mode: `development`,
    entry: [
        `./src/js/index.js`,
        `./src/scss/style.scss`
    ],
    output: {
        filename: `./js/bundle.js`,
        path: path.resolve(__dirname, `build`),
    },
    devServer: {
        contentBase: path.resolve(__dirname, `build`),
        open: false,
        port: 9111,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, `/build`),
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: path.resolve(__dirname, `src/js`),
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: `source-map-loader`
                    },
                    {
                        loader: `babel-loader`,
                        options: {
                            presets: [`@babel/preset-env`]
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, `src/scss`),
                use: [
                    {
                        loader: `file-loader`,
                        options: {
                            outputPath: `css/`,
                            name: `style.min.css`,
                        }
                    },
                    {
                        loader: `sass-loader`,
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(html)$/,
                include: path.resolve(__dirname, `src/html`),
                use: [`raw-loader`]
            }

        ]
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, `src/fonts`),
              to: path.resolve(__dirname, `build/fonts/`),
            },
            {
              from: path.resolve(__dirname, `src/img`),
              to: path.resolve(__dirname, `build/img/`),
            }
          ],
        }),
    ].concat(htmlPlugins)
};
