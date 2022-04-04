var i = 1;
var Wort = [];
document.body.addEventListener("keydown", function(event) {
    if ((event.code  == "KeyA" || event.code == "KeyB" || event.code == "KeyC" || event.code == "KeyD" || event.code == "KeyE" || event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" || event.code == "KeyI" || event.code == "KeyJ" || event.code == "KeyK" || event.code == "KeyL" || event.code == "KeyM" || event.code == "KeyN" || event.code == "KeyO" || event.code == "KeyP" || event.code == "KeyQ" || event.code == "KeyR" || event.code == "KeyS" || event.code == "KeyT" || event.code == "KeyU" || event.code == "KeyV" || event.code == "KeyW" || event.code == "KeyX" || event.code == "KeyY" || event.code == "KeyZ") && i <=36 && i > 0) {
        document.querySelector(".inputparent div:nth-child("+i+")").firstChild.textContent = event.key;
            Wort[i-1]=event.key;
        i++;
    }
    if (event.code =="Backspace" && i > 1) {
        document.querySelector(".inputparent div:nth-child("+(i-1)+")").firstChild.textContent = "";
        i--;
            Wort.splice(i-1,1);
    }
});