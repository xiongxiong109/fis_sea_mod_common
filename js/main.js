define(function(require,exports,module){
	var Count=require('countTime');
	var bw=require('browser');
	var FlexResize=require('flexResize');
	var flex=new FlexResize();
	flex.init();
	console.log( bw() );
});