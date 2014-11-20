
//line width
var i = 1;
var canvas,ctx;
var plus,minus;
var text='';
var metrics;
var textWidth;
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
	ctx.fillStyle = "gray";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.lineWidth = 1;
	ctx.strokeRect(0,0,canvas.width,canvas.height);
	ctx.font = '100pt Arial';
	ctx.fillStyle = 'gray';
	ctx.fillText(text, canvas.width/2-100, canvas.height/2);
	ctx.lineWidth = i;
	//this reduces size
	//ctx.strokeStyle = 'gray';
	//this increase after 2 plus
	ctx.strokeStyle = 'black';
	ctx.strokeText(text, canvas.width/2-100, canvas.height/2);
	metrics = ctx.measureText(text);
	textWidth = metrics.width;
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'red';
	ctx.strokeRect(canvas.width/2-100,canvas.height/2-80,textWidth,100);
	console.log(textWidth);
	console.log(ctx);
}

function setText(){
	text = '';
	var randomList = new Array();
	for(var i=0;i<4;i++){
		randomList[i] = Math.random()*(122-97)+97;
		text+=String.fromCharCode(randomList[i]);
	}
}

function inc(){
	i+=1;
	draw();
}
function dec(){
	if(i>1)
	i-=1;
	draw();
}
