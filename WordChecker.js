function WortCheck()
{
    let check = 0;
    for (var i = 0; i < Words.length; i++) 
    {
        for (var j = 0; j<6;j++) 
        {
            if(Wort[j] == Words[i][j].toLowerCase())
            {
                check++;
            }
        }
        if (check == 6) 
        {
            alert("Gewonnen!");
            Wort.splice(0,6);
            Limit = Limit + 6;
            return;
        }
        else
        {
            check = 0;
        }
    }
    alert("Verloren!");
    document.querySelector(".inputparent div:nth-child("+(counter-1)+")").firstChild.textContent = "";
    counter--;
    Wort.splice(counter-1,1);
}