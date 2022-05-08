document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
document.body.addEventListener("keydown", function(event) {
    var key = event.key.toUpperCase();
    if (LETTERS.indexOf(key) >=0 && counter<=Limit && finish == 0) {
    document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
    document.querySelector(".inputparent div:nth-child("+(counter-1)+")").classList.remove("animate-highlight");
    }
    else if (event.code =="Backspace" && counter > 0 && finish == 0) {
        document.querySelector(".inputparent div:nth-child("+(counter+1)+")").classList.remove("animate-highlight");
        document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
    }
});
function Coloring(color) 
{
    for (var i = 0; i < 6; i++){
        switch(color[i]) {
            case "green":
                document.querySelector(".inputparent div:nth-child("+((counter-7)+(i+1))+")").classList.replace("bg-blue-300","bg-green-500");
                document.querySelector(".inputparent div:nth-child("+((counter-7)+(i+1))+")").classList.add("animate-greenrotation");
                break;
            case "yellow":
                document.querySelector(".inputparent div:nth-child("+((counter-7)+(i+1))+")").classList.replace("bg-blue-300","bg-yellow-500");
                document.querySelector(".inputparent div:nth-child("+((counter-7)+(i+1))+")").classList.add("animate-yellowrotation");
                break;
            default:
                document.querySelector(".inputparent div:nth-child("+((counter-7)+(i+1))+")").classList.add("animate-bluerotation");
        }
    }
}
function WinSequence() {
    document.querySelector(".inputparent div:nth-child("+(counter)+")").classList.remove("animate-highlight");
    finish = 1;
    return;
}