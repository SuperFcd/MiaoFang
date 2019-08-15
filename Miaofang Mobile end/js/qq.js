;(function () {
	//	导航栏
   	$(".mf-head-l").on("click",function () {
   		$(".nav-sidebar").toggle()
   	})

    // 生成一个1-10的随机数
    let  rdNum = Math.floor(Math.random()*10+1)
    
    if(rdNum == 99){
        console.log("吟诵诗千卷，才发现最美的诗是你。")
        let date = new Date(); 
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let second = date.getSeconds()
        let curTime = hour + ':' + minutes + ':' + second;
        let str = "<span>" + curTime + "</span>"
        $(".QQmodal-bottom-title-r").append(str)
        // qq弹窗关闭
        $(".QQmodal-top-r").on("click",function () {
            $(".QQmodal").hide();
        })
        setTimeout(function(){ $(".QQmodal").show(); }, 1200);
        // 信息条数的增加 最高 99+
        function Informationbar(){
            let inforbarDom =parseInt($(".QQmodal-top-c-num").text())  
            // console.log(inforbarDom,'信息条数')
             if(inforbarDom == 99){
                $(".QQmodal-top-c-num").text(1)
            }else{
                let inforbarDomTwo= inforbarDom + 1
                $(".QQmodal-top-c-num").text(inforbarDomTwo)
            }
        }
        setInterval(() => {
            Informationbar();
        }, 5000);

    }else{
        console.log("没让这么平凡的我出现，垃圾。")
    }
    
    $(".nav-sidebar-child1").on("click",function () {
    	window.location.href = "company-profile.html";
    });
    $(".nav-sidebar-child2").on("click",function () {
    	window.location.href = "healthy-acne-removal.html";
    });
    $(".nav-sidebar-child3").on("click",function () {
    	window.location.href = "service.html";
    });
    $(".nav-sidebar-child4").on("click",function () {
    	window.location.href = "join-in.html";
    });
    
})();