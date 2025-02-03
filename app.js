let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = document.getElementById("colors");
let butn  = document.getElementById("btn");
function addRndomNumbers(){
   return Math.floor(Math.random()*hex.length)
}

butn.addEventListener("click", function(){
    let codeColor = "#"
    for(let i = 0; i < 6; i++){
        codeColor += hex[addRndomNumbers()];
    }
    color.textContent = codeColor;
    document.body.style.backgroundColor = codeColor
})