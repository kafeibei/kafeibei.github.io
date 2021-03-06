let basePaths = '.';
let buildPaths = '../kafeibei'

let baseConfig = {
	isDev : true,
	sourceMap : true,
	sassStyle: 'compact',
	cssRename : true,
	paths: {
		html	: basePaths+'/src',
		css		: basePaths+'/src',
		script	: basePaths+'/src',
		json 	: basePaths+'/src',
		image	: basePaths+'/src'
	},
	pathsDev: {
		html	: basePaths+'/dist',
		css		: basePaths+'/dist',
		script	: basePaths+'/dist',
		json 	: basePaths+'/dist',
		image	: basePaths+'/dist'
	},
	autoprefixerConfig: {
		browsers: ['last 2 version']
	},
	base64Config: {
		extensions: ['png'],
		maxImageSize: 8*1024
	},
	pxToViewport: true
}

let projectConfig = require('./' + basePaths + '/project.config');

for ( let k in projectConfig ) {
	if ( projectConfig[k] != undefined) {
		baseConfig[k] = projectConfig[k]
	}
}

module.exports = baseConfig;
