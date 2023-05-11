var canvas = new fabric.Canvas("myCanvas");

var ball_x = 0;
var ball_y = 0;
var hole_x = 800;
var hole_y = 400;
var hole_M_X = hole_x + 10;
var hole_M_Y = hole_y + 10;
var hole = "";
var ball = "";

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole = Img;
		hole.scaleToWidth(80);
		hole.scaleToHeight(80);
		hole.set({top: hole_y, left: hole_x});
		canvas.add(hole);
	})
	new_image();
}

function new_image(){
	fabric.Image.fromURL("ball.png", function(Img) {
		ball = Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({top: ball_y, left: ball_x});
		canvas.add(ball);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/
	if ((ball_x == hole_M_X)&&(ball_y == hole_M_Y)){
		canvas.remove(ball);
	}
	else{
		if(keyPressed == "38")
		{
			up();
			console.log("up");
		}
		if(keyPressed == "40")
		{
			down();
			console.log("down");
		}
		if(keyPressed == "37")
		{
			left();
			console.log("left");
		}
		if(keyPressed == "39")
		{
			right();
			console.log("right");
		}
	}
	
	function up(){
		if(ball_y > 0){
			ball_y = ball_y - 10;
		canvas.remove(ball);
		new_image();
	}
	}
	function down(){
		if(ball_y <= 450){
			ball_y = ball_y + 10;
			canvas.remove(ball);
			new_image();
		}
	}

	function left()
	{
		if(ball_x > 0){
			ball_x = ball_x - 10;
			canvas.remove(ball);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + 10;
			canvas.remove(ball);
			new_image();
		}
	}
	
}

