/*var name="shubha,";
var thing="pasd";
var geta=`dash oadib adob ${name} dkas is ${thing}!!!`;
console.log(geta)
*/
var	max=100;

var submitBtn=document.getElementById('Submit');
submitBtn.onclick=function(){	
	document.getElementsByTagName('h1')[0].innerText="Hello "+document.getElementsByName('name')[0].value+"!!!"
	var	weight=parseInt(document.getElementsByName('weight')[0].value);
	var	h=parseInt(document.getElementsByName('height')[0].value);
	var bmi=weight/Math.pow(h,2);
	if(bmi>.025){
		document.getElementsByTagName('h2')[0].innerHTML="You are fuckin' obese";
	}
	else{
		document.getElementsByTagName('h2')[0].innerHTML="You have a healthy diet. Keep going!!";	
	}
	
	document.getElementsByTagName('h3')[0].innerHTML="Your BMI is "+bmi+"."
	console.log("Your bmi= "+bmi);
}

/*
document.getElementsByTagName('h2')[0].innerHTML=geta;

var foo1={
	ba: 23,
	bar : "sweeet",
};

var foo2=['2341',4,115,'sa'];

var {ba,bar}=foo1;
var	[a,b,c,d,r]=foo2;

console.log(a,b,c,d.r,ba,bar);

function cBMI({weight, height:h, max, callback}){
	if(weight>max){
		document.getElementsByTagName('h2')[0].innerHTML="You are obese";
	}
	console.log("Your bmi= "+(weight/Math.pow(h,2)));
	if(callback)
	{
		callback(cBMI);
	}
}
var weight=120;

var obj={
	weight,
	height: 190,
	max: 90,
	callback: function(){console.log("callback function");} ,
};

cBMI(obj);
*/