function alpha(ch)
{
    ch=ch.toUpperCase()
    for (i=0;i<ch.length();i++)
    {
        if(ch.charAt(i)<"A" && ch.charAt(i)>"Z")
        {
            return false 
        }
    }
}
function numerique(ch)
{
    for(i=0;i<length;i++)
    {
        if(ch[i]<"0" || ch[i]>"9")
        {
            return false
        }
    }
}


// phone controle 

function verif()
{
    tel=document.getElementById('n').value;
    if(tel.length()!=8 || numerique(tel)==false )
    {
        alert("erreur numero telephone")
        return false
    }
}