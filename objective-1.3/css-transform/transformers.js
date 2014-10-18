window.onload = function () {
 
    var scaleBtn = document.getElementById("scale");
    var rotateBtn = document.getElementById("rotate");
    var transBtn = document.getElementById("translate");
    var skewBtn = document.getElementById("skew");
    var allBtn = document.getElementById("all");
    
    var image = document.getElementById("mellon-img");
    
    scaleBtn.onclick = function () { image.className = "scale"; }
    rotateBtn.onclick = function () { image.className = "rotate"; }
    transBtn.onclick = function () { image.className = "translate"; }
    skewBtn.onclick = function () { image.className = "skew"; }
    allBtn.onclick = function () { image.className = "all"; }
}