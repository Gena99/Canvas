//var canvas;
//var context;



window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        

    var context = canvas.getContext('2d');
     
    //C'est ici que l'on placera tout le code servant à nos dessins.
   	
    context.beginPath();
    // TRAC1 ORANGGE
    context.strokeStyle = "#ecc010";
    context.moveTo(0,90);
    context.lineTo(4,40);
    context.lineTo(142,2);
    context.lineTo(200,70);
    context.moveTo(200,155);
    context.lineTo(160,200);
    context.lineTo(0,137);
    context.stroke();
    // TRAC1 Rouge
    context.beginPath();
    context.strokeStyle = "#e31e26";
    context.moveTo(0,63);
    context.lineTo(0,45);
    context.lineTo(135,1);
    context.lineTo(199,67);
    context.moveTo(200,155);
    context.lineTo(165,194);
    context.lineTo(0,145);

    context.stroke();
    //texte simplon
    context.font = '32pt Arial';
    context.fillStyle = 'black';
    context.fillText('SIMPL   N', 0, 100);
    context.fillStyle = '#e31e26';
    context.fillText('O', 128, 100);
    //occitanie
    context.font = '25pt Arial';
    context.fillText('Occitanie', 55, 132);
    
    //carre
    context.beginPath();
    context.fillStyle = "#ecc010"; 
    context.rect(141, 77, 7, 7);
    context.fill();
    context.rect(141, 86, 7, 7);
    context.fill();
    



  };
