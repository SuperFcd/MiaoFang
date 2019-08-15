;(function () {
	//	滚动监听 return按钮的淡出淡入
	$(window).scroll(function() {
	    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	    // console.log("滚动距离" + scrollTop);
	    // 返回顶部  淡出淡入
	    if(scrollTop >= 800 ){
	        $(".right-fixed-return-img").fadeIn(800);
	    }else{
	        $(".right-fixed-return-img").fadeOut(300);
	    }
	    
	})
	
	// return top 的 click event 
	$(".right-fixed-return-img").on("click",function () {
	    $('html,body').animate({scrollTop: 0},1200);
	});
	
	$(".mark-dyn-img").on("click",function () {
		window.location.href = "video/shipin3.mp4"
	})
	$(".new3").on("click",function () {
		window.location.href = "company-profile.html"
	})
	
})();