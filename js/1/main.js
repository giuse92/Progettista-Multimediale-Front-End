//1.
let div1=document.createElement('div');

div1.className="divSize";

div1.innerHTML="AAA BBB CCC DDD";

document.body.append(div1);


//2.
let p1=document.createElement('p');

p1.className="pBorder"

p1.innerHTML="PARAGRAFO IN CODA";

div1.append(p1);


//3.
let p2=document.createElement('p');

p2.className="pBorder"

p2.innerHTML="PARAGRAFO IN TESTA";

div1.prepend(p2);


//4.
let p3=document.createElement('p');

p3.className="pBorder"

p3.innerHTML="PRIMO PARAGRAFO";

div1.before(p3);


//5.
let p4=document.createElement('p');

p4.className="pBorder"

p4.innerHTML="ULTIMO PARAGRAFO";

div1.after(p4);


//6.
let div2=document.createElement('div');

div2.className="divSize";

div2.innerHTML="NUOVO DIV";

div1.replaceWith(div2);

//console.log(div1);


//7.
div2.append("NUOVISSIMO DIV");

console.log(div2.firstChild);
console.log(div2.firstChild.nodeType);

console.log(div2.firstChild.nextSibling);
console.log(div2.firstChild.nextSibling.nodeType);

let tN1=document.createTextNode("SEMPRE NUOVISSIMO");

div2.append(tN1);
//div2.append(document.createTextNode("SEMPRE NUOVISSIMO"));

/*console.log(div2.lastChild);
console.log(div2.lastChild.nodeType);

console.log(div2.childNodes);
console.log(div2.childNodes.length);*/

/*div2.append("<B>FORTISSIMO</B>");

console.log(div2.lastChild);
console.log(div2.lastChild.nodeType);

console.log(div2.childNodes);
console.log(div2.childNodes.length);*/
let a1=document.createElement('a');
//let s1=document.createElement('span');



div2.append(a1);
console.log(div2.lastChild);
console.log(div2.lastChild.nodeType);
//div2.before("<B>FORTISSIMO</B>", document.createElement('a'), document.createElement('span'));

//a1.remove();
div2.before(a1);




function rimuoviNodo()
{
    div2.remove();
    console.log(div2);
}