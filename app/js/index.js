require(['app/common.js'],function(){
	require(['zepto','cssloader!css/index'],function($){
		var initEvent = function(){
			mui(".footer-center").on("tap","#msg-sound",function(event){
				if (window.plus) {
					document.body.classList.add(CLASS_FOCUSIN);
					plus.speech.startRecognize({
						engine: 'iFly',
						timeout:20
					}, function(s) {
						alert(s);
						plus.speech.stopRecognize();
					}, function(e) {
						document.body.classList.remove(CLASS_FOCUSIN);
					});
				} else {
					alert('only for 5+');
				}
				event.preventDefault();
			});
			mui(".footer-center").on("hold","#msg-sound",function(event){
				console.log("a");
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
