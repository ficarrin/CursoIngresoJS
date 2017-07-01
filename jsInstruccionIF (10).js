function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random=(Math.random()*10)+1;	
	var numfinal=Math.floor(random);
	if (numfinal>=9) { 
		alert(numfinal+" Excelente");
		
	}
	else if (numfinal>=4 && numfinal<9) { 
		alert(numfinal+" Aprobo");
	}
	else if (numfinal<4){
	alert(numfinal+" Vamos, la proxima se puede");
	}
}
//FIN DE LA FUNCIÓN