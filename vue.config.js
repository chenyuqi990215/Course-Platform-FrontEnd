module.exports = {
    devServer: {
        open: true,
        host: "0.0.0.0", //本地真机测试
        // host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        proxy: {
            "/api/": {
                target: "http://47.100.79.77/",
                secure: false,
                pathRewrite: {
                    "^/api/": ""
                },
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    }
}