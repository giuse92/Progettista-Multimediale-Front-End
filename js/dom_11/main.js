//1.
let art=document.body.firstElementChild;
let t=art.nextSibling;
let counter=0;
let limit=20;
let idInterval=null;

console.log(art.innerHTML);
console.log(art.textContent);
console.dir(art);
//art.textContent="<h3>jjhjhk</h3>";


//2.
function hideDiv()
{
    art.lastElementChild.innerHTML+="H";

    if(art.hidden==true)
    {
        console.log("A");
        art.hidden=false;
        t.hidden=false;
    }
    else
    {
        console.log("B");
        art.hidden=true;
        t.hidden=true; //Non ha questa proprietà perché definita da HTMLElement.
    }

    if(counter<limit)
    {
        counter++;
    }
    else
    {
        console.log("STOP");
        clearInterval(idInterval);
    }
    //art.hidden=!art.hidden;
}

//hideDiv();
idInterval=setInterval(hideDiv, 1000);