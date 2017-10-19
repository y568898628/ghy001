window.onload=function(){
	var designW=750;     //设计稿的大小
	var fontsize=100;    //初始字体大小
	rem();
	function rem(){
		var deviceW=document.documentElement.clientWidth;
		var ratio=deviceW/designW;   //0.5;
		
//		var newFont=ratio<0.5?fontsize*ratio*2:100;  //375以上rem不变

		var newFont=fontsize*ratio*2;

		document.getElementsByTagName("html")[0].style.fontSize=newFont+"px";
		
		
	}
	
	window.addEventListener("resize",function(){
		setTimeout(rem,200);
	},false)
}
