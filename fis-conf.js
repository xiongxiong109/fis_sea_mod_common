fis.media('pro')
.match(/(sea(\.config)?)|(common\/)(.*)(\.js$)/i,{
	packTo:'js/sea_common.js'
})
.match('js/**.js',{
	optimizer:fis.plugin('uglify-js')
})
.match('*.{js,css,png,jpg,gif}',{
	release:'$0',
	url:'.$0'
});