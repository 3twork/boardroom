const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}
// 基础路径 注意发布之前要先修改这里
let baseUrl = "./";
module.exports = {
	publicPath: baseUrl, // 根据你的实际情况更改这里
	lintOnSave: false,
	devServer: {
		publicPath: baseUrl // 和 baseUrl 保持一致
	},
	runtimeCompiler: true,
	outputDir: "dist",
	productionSourceMap: false,
	chainWebpack: config => {
		// 设置路径别名
		config.resolve.alias
			.set("@", resolve("src"))
			.set("@assets", resolve("src/assets"))
		// //忽略的打包文件
		// config.externals({

		// });
		const entry = config.entry("app");
		entry.add("babel-polyfill").end();
	},
	//配置转发代理
	devServer: {
		host: "localhost",
		port: 8000,
		https: false,
		hotOnly: false,
		proxy: {
			"/api": {
				target: "http://api.zzkmd.com/api",
				ws: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	},
	css: {
		loaderOptions: {
			stylus: {
			},
			postcss: {
				plugins: [
				]
			}
		}
	},
	pluginOptions: {
	}
}
