/*//1.
//let path='https://cors-anywhere.herokuapp.com/http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo&a='+Math.random();
let path="https://reqres.in/api/users?page=2";

fetch(path)
//.then eseguito quando il server remoto risponde.
.then(function(response)
{
  console.log("response.headers: "+response.headers);

  for (let [chiave, valore] of response.headers)
  {
    console.log(`${chiave} = ${valore}`);
  }

  

  console.log("response.ok: "+response.ok);
  console.log("response.redirected: "+response.redirected);
  console.log("response.status: "+response.status);
  console.log("response.statusText: "+response.statusText);
  console.log("response.type: "+response.type);
  console.log("response.url: "+response.url);

  //console.log("response.body: "+response.body);
  //console.log("response.bodyUsed: "+response.bodyUsed);

  if(response.ok)
  {
    //response.json() restituisce una nuova Promise risolta con json.
    let jsonPromise=response.json();

    console.log("jsonPromise: "+jsonPromise);

    return jsonPromise;
  }
})
.then(function(jsonObject)
{
  //Il contenuto remoto.
  console.log("jsonObject: "+jsonObject);
  console.log("JSON.stringify(jsonObject): "+JSON.stringify(jsonObject));

  //costruisciTabella(jsonObject);
  //costruisciTabella2(jsonObject);
})
.catch(function(error)
{
  console.log("error: "+error);
});*/
















//2.
let testImage=document.createElement("img");
//https://cors-anywhere.herokuapp.com/
fetch('https://cors-anywhere.herokuapp.com/https://www.wikihow.com/images/thumb/4/44/Get-the-URL-for-Pictures-Step-6-Version-3.jpg/v4-728px-Get-the-URL-for-Pictures-Step-6-Version-3.jpg.webp')
.then(function(response)
{
  console.log("response.headers: "+response.headers);

  for (let [chiave, valore] of response.headers)
  {
    console.log(`${chiave} = ${valore}`);
  }

  /*for (let chiave of response.headers)
  {
    console.log(`HEADER ${chiave}`);
  }*/

  console.log("response.ok: "+response.ok);
  console.log("response.redirected: "+response.redirected);
  console.log("response.status: "+response.status);
  console.log("response.statusText: "+response.statusText);
  console.log("response.type: "+response.type);
  console.log("response.url: "+response.url);

  //console.log("response.body: "+response.body);
  //console.log("response.bodyUsed: "+response.bodyUsed);

  let   blobPromise=response.blob();

  console.log("blobPromise: "+blobPromise);

  return blobPromise;

  //return response.blob();
})
.then(function(blob)
{
  let objectURL=URL.createObjectURL(blob);

  testImage.src=objectURL;

  document.body.appendChild(testImage);
});