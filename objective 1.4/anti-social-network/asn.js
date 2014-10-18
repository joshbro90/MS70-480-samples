window.onload = function () { 
    
    LoadFromLocalStorage();
    
    var submitBtn = document.getElementById("updatePost");
    
    submitBtn.onclick = function () { 
        
        var text = document.getElementById("updateText").value;
        localStorage.setItem(localStorage.length, text);
        LoadFromLocalStorage();
        
    }
}

function LoadFromLocalStorage() {
    
    var feed = document.getElementById("feed");
    
    if(feed.children.length > 0)
    {
        var count = feed.children.length
        for (var i = 0; i < count; i++)
            feed.removeChild(feed.children[0]);
    }
    
    if(localStorage.length > 0){
        
        for(var i = localStorage.length -1; i >= 0 ; i--) {
            var item = document.createElement("li");
            item.innerHTML = localStorage.getItem(i);
            feed.appendChild(item);
        }      
    }
}