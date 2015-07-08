var board = [['','',''],['','',''],['','','']];

document.addEventListener('DOMContentLoaded',start,false);

function start(){
    var tileList = document.querySelectorAll(".tile");
    var ccount = 0;
    for (var i = 0; i < tileList.length;i++){
        tileList[i].addEventListener("click",function(event){
        console.log("Click number:" + ccount);
        ccount++;
        event.stopPropagation();
        },false)
    }
}
