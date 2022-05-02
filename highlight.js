document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
document.body.addEventListener("keydown", function(event) {
    var key = event.key.toUpperCase();
    if (LETTERS.indexOf(key) >=0 && counter<=Limit) {
    document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
    document.querySelector(".inputparent div:nth-child("+(counter-1)+")").classList.remove("animate-highlight");
    }
    else if (event.code =="Backspace" && counter > 0) {
        document.querySelector(".inputparent div:nth-child("+(counter+1)+")").classList.remove("animate-highlight");
        document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
    }
});