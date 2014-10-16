window.onload = function() {
  
    // lets get the context for drawing with
    var surface = document.getElementById("smiley-canvas");
    var context = surface.getContext("2d");
    
    // lets make the face
    context.beginPath();
    context.arc(300,300, 200, 0, 2 * Math.PI); // canvas doesn't use degrees which is confusing!
    
    // outline
    context.lineWidth = 10;
    context.strokeStyle = "#000";
    context.stroke();
    
    // fill
    context.fillStyle = "yellow";
    context.fill();
    
    // the smile
    context.beginPath();
    context.arc(300,300, 150, 0, Math.PI);
    context.stroke();
    
    // the eyes!
    context.beginPath();
    context.arc(200, 200, 25, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "#000";
    context.fill();
    context.beginPath();
    context.arc(400, 200, 25, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "#000";
    context.fill();
    
    // TODO: try some of the other types of curves!
};