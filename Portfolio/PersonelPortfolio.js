var clickedCurr;
	var x=document.getElementById("n1");
	x.onmouseover=function(){
		x.style.border="2px solid black";
		x.style.boxShadow="2px 4px 1px #000";
		x.style.color="#000";
	};
	x.onclick=function(){
		x.style.backgroundColor="#e3e3e3";
		x.style.color="#000";
		x.style.boxShadow="2px 4px 1px #000";
		clickedCurr="x";
		z.style="none";
		y.style="none";
	}
	x.onmouseout=function(){
		x.style.border="0px solid black";
		if(clickedCurr!="x"){
			x.style.color="white";
			x.style.boxShadow="0px 0px 0px ";
		}
	};
	
	var y=document.getElementById("n2");
	y.onmouseover=function(){
		y.style.border="2px solid black";
		y.style.boxShadow="2px 4px 1px #000";
		y.style.color="#000";
	};
	y.onclick=function(){
		y.style.backgroundColor="#e3e3e3";
		y.style.color="#000";
		y.style.boxShadow="2px 5px 1px #000";
		clickedCurr="y";
		x.style="none";
		z.style="none";
	}
	y.onmouseout=function(){
		y.style.border="0px solid black";
		if(clickedCurr!="y"){
			y.style.boxShadow="0px 0px 0px ";
			y.style.color="white";
		}
	};

	var z=document.getElementById("n3");
	z.onmouseover=function(){
		z.style.border="2px solid black";
		z.style.boxShadow="2px 5px 1px #000";
		z.style.color="#000";
	};
	z.onclick=function(){
		z.style.backgroundColor="#e3e3e3";
		z.style.color="#000";
		z.style.boxShadow="2px 5px 1px #000";
		clickedCurr="z";
		x.style="none";
		y.style="none";
	}
	z.onmouseout=function(){
		z.style.border="0px solid black";
		if(clickedCurr!="z"){
			z.style.color="white";
			z.style.boxShadow="0px 0px 0px ";
		}
	};

	$(document).ready(function(){
		$(".cont").css("margin-top","80px");
	});

	/*var x=document.getElementsByClassName("nav-btn");
	for (var i =x.length - 1; i >= 0; i--) {
		x[i].onmouseover=function(){
			x[i].style.backgroundColor="#fff";
		};
		x[i].onmouseout=function(){
			x[i].style.backgroundColor="#521341";
		};	
	}
	$(document).ready(function(){	
		$("#n1").mouseover(function(){
			$("#n1").style.backgroundColor="#fff";
	});$("#2").mouseover(function(){
			$("#2").style.backgroundColor="#fff";
	});$("#3").mouseover(function(){
			$("#3").style.backgroundColor="#fff";
	});$("#1").mouseout(function(){
			$("#1").style.backgroundColor="#521341";
	});$("#1").mouseout(function(){
			$("#2").style.backgroundColor="#521341";
	});$("#1").mouseout(function(){
			$("#3").style.backgroundColor="#521341";
	});;
});*/