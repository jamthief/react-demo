var path = require('path');
var webpack = require('webpack');

module.exports = function(grunt) {
	grunt.initConfig({
		webpack: {
			build: {
				entry: path.join(__dirname, 'src', 'app-client.js'),
				output: {
					path: path.join(__dirname, 'src', 'static', 'js'),
					filename: 'bundle.js'
				},
				module: {
					loaders: [{
						test: path.join(__dirname, 'src'),
						loader: [ 'babel-loader' ],
						query: {
							cacheDirectory: 'babel_cache',
							presets: [ 'react', 'es2015' ]
						}
					}]
				},
				watch: true,
				keepalive: true,
				plugins: [
					new webpack.DefinePlugin({
						'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
					}),
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.OccurrenceOrderPlugin(),
					new webpack.optimize.UglifyJsPlugin({
						compress: { warnings: false },
						mangle: true,
						sourcemap: false,
						beautify: false,
						dead_code: true
					})
				]
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					base: 'src/static',
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('build',   [ 'webpack:build' ]);
	grunt.registerTask('serve',   [ 'connect:server' ]);
	grunt.registerTask('default', [ 'build' ]);
}