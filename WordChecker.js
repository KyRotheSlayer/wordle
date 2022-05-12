function WortCheck()
{
	let check = 0;
	var color = [];
	var goal = 0;
	var exceptvalue = "";
	for (let i = 0; i < Words.length; i++) {
		if (Wort.join("") == Words[i].toUpperCase()) {
			check = 1;
		}
	}
	if (check != 1) {
		Popup("Not a word");
		document.querySelector(".inputparent div:nth-child("+(counter-1)+")").firstChild.textContent = "";
		counter--;
		Wort.splice(counter-1,1);
		return
	}
	for (var i = 0; i < 6; i++) 
	{
		for (var j = 0; j<6;j++) 
		{
			if(j==i)
			{
				if((Wort[i].toUpperCase() == Words[random][j].toUpperCase()))
				{
					color[i] = "green";
					goal++;
					exceptvalue = exceptvalue + j;
					break;
				}
			}
			else
			{
				if((Wort[i].toUpperCase() == Words[random][j].toUpperCase()) && exceptvalue.indexOf(j.toString())==-1)
				{
					color[i] = "yellow";
					exceptvalue = exceptvalue + j;
				}
			}
			}
		}
		exceptvalue = "";
		if (goal == 6) {
			Coloring(color);
			WinSequence();
			return;
		}
		else if (counter == 37) {
			Coloring(color);
			LooseSequence();
			return;
		}
		Coloring(color);
		Wort.splice(0,6);
		Limit = Limit + 6;
		return;

}
