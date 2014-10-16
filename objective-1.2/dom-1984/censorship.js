function switchEnemy(enemy) {
 
    var refs = document.getElementsByClassName("name-ref");
    
    for(var i = 0; i < refs.length; i++) {
        refs[i].innerHTML = enemy;
    }
    
    document.title = "The long war with " + enemy;
    
}