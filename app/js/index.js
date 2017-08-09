require(['app/common.js'],function(){
	require(['zepto','cssloader!css/index'],function($){
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
			
			//个人中心
			mui("body").on("tap",".user-center",function(event){
				mui.openWindow({
    				url: 'usercenter.html', 
    				id:'usercenter'
  				});
			});
		}
		
		var init = function(){
			initEvent();
		}
		
		init();
	})
})
