//herauslesen der eingegeben Buchstaben und Eingabe in die Felder
var counter = 1;
var Wort = [];
document.body.addEventListener("keydown", function(event) {
    if ((event.code  == "KeyA" || event.code == "KeyB" || event.code == "KeyC" || event.code == "KeyD" || event.code == "KeyE" || event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" || event.code == "KeyI" || event.code == "KeyJ" || event.code == "KeyK" || event.code == "KeyL" || event.code == "KeyM" || event.code == "KeyN" || event.code == "KeyO" || event.code == "KeyP" || event.code == "KeyQ" || event.code == "KeyR" || event.code == "KeyS" || event.code == "KeyT" || event.code == "KeyU" || event.code == "KeyV" || event.code == "KeyW" || event.code == "KeyX" || event.code == "KeyY" || event.code == "KeyZ") && counter <=36 && counter > 0) {
        document.querySelector(".inputparent div:nth-child("+counter+")").firstChild.textContent = event.key;
            Wort[counter-1]=event.key;
        counter++;
    }
    if (event.code =="Backspace" && counter > 1) {
        document.querySelector(".inputparent div:nth-child("+(counter-1)+")").firstChild.textContent = "";
        counter--;
            Wort.splice(counter-1,1);
    }
});