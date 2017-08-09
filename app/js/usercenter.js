require(['app/common.js'],function(){
	require(['zepto','cssloader!css/usercenter'],function($){
		var initEvent = function(){
			mui(".footer-center").on("tap","#msg-sound",function(event){
				var options = {};
				options.engine = 'iFly';
				options.continue = true;
				options.timeout = 20000;
				options.userInterface = false;
				plus.speech.startRecognize(options, function(s) {
					alert(s);
				}, function(e) {
					
				});
				event.preventDefault();
			});
			mui(".footer-center").on("hold","#msg-sound",function(event){
				console.log("a");
			});
			
			mui(".mui-content").on("tap",".a",function(event){
				mui.openWindow({
    				url: 'preview.html', 
    				id:'preview'
  				});
			});
			
		}
		
		var init = function(){
			initEvent();
		}
		
		init();
	})
})
