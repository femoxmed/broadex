// const path = require('path');
// const withReactSvg = require('next-react-svg');

// module.exports = withReactSvg({
// 	include: path.resolve(__dirname, 'public/images/flags'),
// 	// include: path.resolve(__dirname, 'public/images/flags'),
// 	webpack(config, options) {
// 		return config;
// 	},
// });

// // In next.config.js

// // next.config.js
const withImages = require('next-images');
// // module.exports = withImages();

// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');

module.exports = withImages({
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		});
		return config;
	},
});
