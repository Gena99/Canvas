//var canvas;
//var context;



window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        

    var context = canvas.getContext('2d');
     
    //C'est ici que l'on placera tout le code servant à nos dessins.
   	context.strokeStyle = "red";
      context.beginPath();
      context.moveTo(100,100);
      context.lineTo(200,200);
      context.moveTo(5,50);
      context.lineTo(3.2,6.7);
      //context.moveTo(50,50);
      //context.lineTo(200,200);
     // context.moveTo(200,50);
      //context.lineTo(50,200);
      context.closePath(); 
      context.stroke();
   	
  };
