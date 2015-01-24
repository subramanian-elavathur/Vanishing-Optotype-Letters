$(document).ready(function(){	
	boxSet();
	$("#rand").click(function (){
		if(StrokeWidth!=1)
			StrokeWidth -= 3;
		boxSet();
	});
	$("#next").click(function (){
		boxSet();
	});
});

var ImgTag = "<img src='img/";
var ImgEnd = "' width = 100%></img>"
var StrokeWidth = 2;
var BaseForm = "-";
var alpha = [ "i",  "l", "n", "x", "z"]
var Ext = ".jpg"
var randCont = [];
var box = 1;

function clear1(){
	$("#box-6").html("");$("#box-11").html("");
	$("#box-7").html("");$("#box-12").html("");
	$("#box-8").html("");$("#box-13").html("");
	$("#box-9").html("");$("#box-14").html("");
	$("#box-10").html("");$("#box-15").html("");
}

function boxSet(){
	for(var j=0;j<3;j++){
		for(var i=0;i<5;i++){
			var z = imageForm();
			var boxId = "#box-"+box;
			console.log(z + " " + boxId);
			box++;
			if(box==16)
				box = 1;
			$(boxId).html(z);
		}
		randCont = [];
		StrokeWidth++;
		if(StrokeWidth==15){
			clear1();
			box = 1;
			StrokeWidth = 2;
			break;
		}
	}
}


function imageForm(){
	var r = getRandom(0,4);
	while(!ifin(randCont,r)){
		r = getRandom(0,4);
	}
	randCont.push(r);
	var temp = ImgTag + alpha[r] + BaseForm + StrokeWidth + Ext +ImgEnd;
	return temp;
}

function getRandom(min,max){
	return  Math.floor(Math.random()*(max-min+1))+min;
}


function ifin (randCont,r){
	for(var i=0;i<randCont.length;i++){
		if(r == randCont[i]){
			return 0;
		}
	}
	return 1;
}