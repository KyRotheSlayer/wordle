//herauslesen der eingegeben Buchstaben und Eingabe in die Felder
var counter = 1;
var Wort = [];
var Limit = 6;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.body.addEventListener("keydown", function(event) {
	var key = event.key.toUpperCase();
	if (LETTERS.indexOf(key) >=0 && counter<=Limit) {
		document.querySelector(".inputparent div:nth-child("+counter+")").firstChild.textContent = event.key;
            Wort[counter-1-Limit+6]=event.key;
			counter++;
            if (counter == (Limit+1)) 
            {
                WortCheck();
            }
    }
    else if (event.code =="Backspace" && counter > (Limit-5) && counter <= (Limit+1)) {
        document.querySelector(".inputparent div:nth-child("+(counter-1)+")").firstChild.textContent = "";
        counter--;
        Wort.splice(counter-1,1);
    }
});