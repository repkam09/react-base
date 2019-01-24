module.exports = {
    webpackConfig: require('./node_modules/react-scripts/config/webpack.config.js'),

    dangerouslyUpdateWebpackConfig(config) {
        if (!config.devServer) {
            config.devServer = {};
        }

        config.cache = false;
        config.devServer.disableHostCheck = true;

        return config;
    },
    defaultExample: true,
    theme: {
    },
    styles: {
    }
};