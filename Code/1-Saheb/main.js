
//line width
var canvas,ctx;
var plus,minus;
var alphabets = ['I','L','M','N','S','U','X','Y','Z'];
var text;
var size = 1.0;

function init(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	plus = document.getElementById('plus');
	minus = document.getElementById('minus');
	plus.addEventListener('click',inc);
	minus.addEventListener('click',dec);
	setText();
	draw();
}

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = "#969696";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	// ctx.strokeRect(0,0,canvas.width,canvas.height);
	var h=0,y=0;
	for (var i = 0; i< 4; i++) {
		
		y = y+h;
		for (var j = 0; j<text.length; j++) {
		
			var x = j*125 +j*(20);			

			h = 200 - (50*i);
			var w = 125;
			console.log("x:"+x+"y:"+y+"w:"+w+"h:"+h);
			drawLetter(x+30,y+ i*20 +10,w,h,text[j],i);
		};
		ha = h;
	};
}

function drawLetter(x,y,w,h,letter,level){

	var image = new Image();
	image.addEventListener("load", function() {

				
		image.width = w;
		image.height = h;
		ctx.drawImage(image, x, y, image.width, image.height);
		console.log("x:"+x+"y:"+y+"w:"+w+"h:"+h);
		console.log(image.src);

	}, false);
	var s = ""+size;
	var str = "../../Resources/JPEG/"+letter+"/"+s.replace('.','_')+".jpg";
	image.src= str;
}


function setText(){
	text = new Array();
	for(var i=0;i<4;i++){
		var a = Math.floor((Math.random() * 9));
		text[i] = alphabets[a];
	};
	console.log(text);
}

function inc(){
	if(size<6){
		size+=0.5;
		draw();
	}
	console.log(size);
}

function dec(){
	if(size>1){
		size-=0.5;
		draw();
	}
	console.log(size);
}
