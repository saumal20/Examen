function LanzaDibujo()
{

	validacion = false;
	ctaerrores = 0;
        ej1=document.getElementById("cuadrito1"); 
        cuadrito1 = ej1.getContext("2d");
        cuadrito1.lineWidth=1;
        cuadrito1.strokeStyle = '#000'; 
 
	// x	
	cuadrito1.beginPath(); 
        cuadrito1.moveTo(0, 100);
        cuadrito1.lineTo(100, 100);
        cuadrito1.stroke();
        cuadrito1.closePath();

	//y
        cuadrito1.beginPath(); 
        cuadrito1.moveTo(0, 0); 
        cuadrito1.lineTo(0, 100);
        cuadrito1.stroke(); 
        cuadrito1.closePath(); 

	while (!validacion)
	{
		xa1 = parseInt(prompt('Ingresa Ubicacion X1 de la figura 1 entre 0 y 100'));
		if(!Number.isInteger(xa1)) ctaerrores++;
		if(xa1 > 100) ctaerrores++;

		ya1 = parseInt(prompt('Ingresa Ubicacion Y1 de la figura 1 entre 0 y 100'));
		if(ya1 > 100) ctaerrores++;

		xa2 = parseInt(prompt('Ingresa Ubicacion X2 de la figura 1 entre 1 y 100'));
		if(!Number.isInteger(xa2)) ctaerrores++;
		if(xa2 < 1 || xa2 > 100) ctaerrores++;

		ya2 = parseInt(prompt('Ingresa Ubicacion Y2 de figura 1 entre 1 y 100'));
		if(!Number.isInteger(ya2)) ctaerrores++;
		if(ya2 < 1 || ya2 > 100) ctaerrores++;

		if(ctaerrores == 0) 
			validacion=true;

		ctaerrores = 0;
	}

	dibujaFigura (xa1, ya1, xa2, ya2, 1);
	validacion = false;

	while (!validacion)
	{
		xb1 = parseInt(prompt('Ingresa Ubicacion X1 de la figura 2 entre 0 y 100'));
		if(!Number.isInteger(xb1)) ctaerrores++;
		if(xb1 > 100) ctaerrores++;

		yb1 = parseInt(prompt('Ingresa Ubicacion Y1 de la figura 2 entre 0 y 100'));
		if(!Number.isInteger(yb1)) ctaerrores++;
		if(yb1 > 100) ctaerrores++;

		xb2 = parseInt(prompt('Ingresa Ubicacion X2 de la figura 2 entre 1 y 100'));
		if(!Number.isInteger(xb2)) ctaerrores++;
		if(xb2 < 1 || xb2 > 100) ctaerrores++;

		yb2 = parseInt(prompt('Ingresa Ubicacion Y2 de figura 2 entre 1 y 100'));
		if(!Number.isInteger(yb2)) ctaerrores++;
		if(yb2 < 1 || yb2 > 100) ctaerrores++;

		if(ctaerrores == 0) validacion=true;

		ctaerrores = 0;
	}

	dibujaFigura (xb1, yb1, xb2, yb2, 2);
	
	if((xb2 >= xa1 && xb1 <= xa2) && (yb2 >= ya1 && yb1 <= ya2))
		alert("las figuras se cruzan")
	else
		alert("Las figuras no se cruzan")
}


function dibujaFigura (a, b, c, d, opcIma)
{
	var elemento = document.getElementById("cuadrito1");
	var contexto = elemento.getContext('2d');
	if(opcIma == 1)
		contexto.fillStyle = "#FFBD16";
	else
		contexto.fillStyle = "#AABD16";
	contexto.fillRect(a, b, c, d); // x1, y1, x2, y2
}