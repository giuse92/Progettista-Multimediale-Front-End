//1.
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
  costruisciDiv(jsonObject);
})
.catch(function(error)
{
  console.log("error: "+error);
});

/*jsonObject={
  "ad": {
    "company": "StatusCode Weekly",
    "url": "http://statuscode.org/",
    "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
  }
}*/

function costruisciDiv(jsonObject)
{
  let divProp=null;

  for(currentProperty in jsonObject.ad)
  {
    console.log(currentProperty+" = "+jsonObject.ad[currentProperty]);

    divProp=document.createElement('div');

    divProp.textContent=jsonObject.ad[currentProperty];

    document.body.append(divProp);
  }

  let s=document.querySelector("script");

  divProp.after(s);
  
  /*s.replaceWith(divProp);
  document.body.append(s);*/
}

function costruisciTabella(jsonObject)
{
  //Cosa devo fare per costruire una tabella che mi faccia vedere i valori caricati?

  console.log(jsonObject.page);
  console.log(jsonObject.per_page);
  console.log(jsonObject.total);
  console.log(jsonObject.total_pages);

  let table=document.createElement('table');
  document.body.append(table);

  let tr=document.createElement("tr");
  table.append(tr);

  let isFirstTime=true;

  //jsonObject.data è l'Array contenente gli oggetti da esplorare.
  for(currentObject of jsonObject.data)
  {
    console.log(currentObject);

    let trn=document.createElement("tr");
    table.append(trn);
    
    for(currentProperty in currentObject)
    {
      //tr è l'identificatore della row creata FUORI dai cicli.
      //if(isFirstTime==true)
      if(isFirstTime)
      {
        let thTable=document.createElement('th');
        thTable.innerHTML=`${currentProperty}`;

        tr.append(thTable);
      }

      let td=document.createElement("td");

      /*//1.
      if(currentProperty=="avatar")
      {
        td.innerHTML=`<a href="${currentObject[currentProperty]}">${currentObject[currentProperty]}</a>`;
      }
      else
      {
        td.innerHTML=`${currentObject[currentProperty]}`;
      }*/

      //2.
      if(currentProperty=="avatar")
      {
        //td.innerHTML=`<a href="${currentObject[currentProperty]}">${currentObject[currentProperty]}</a>`;
        td.innerHTML=`<img src="${currentObject[currentProperty]}" />`;
      }
      else
      {
        td.innerHTML=`${currentObject[currentProperty]}`;
      }
    
      trn.append(td);
    }

    isFirstTime=false;
  }
}


function costruisciTabella2(jsonObject)
{
  console.log(jsonObject.page);
  console.log(jsonObject.per_page);
  console.log(jsonObject.total);
  console.log(jsonObject.total_pages);

  let table=document.createElement('table');
  document.body.append(table);

  let tr=document.createElement("tr");
  table.append(tr);

  let isFirstTime=true;

  for(let i=0;i<jsonObject.data.length;i++)
  //for(currentObject of jsonObject.data)
  {
    let currentObject=jsonObject.data[i];
    
    console.log(currentObject);

    let trn=document.createElement("tr");
    table.append(trn);
    
    for(currentProperty in currentObject)
    {
      if(isFirstTime)
      {
        let thTable=document.createElement('th');
        thTable.innerHTML=`${currentProperty}`;

        tr.append(thTable);
      }

      let td=document.createElement("td");

      if(currentProperty=="avatar")
      {
        td.innerHTML=`<img src="${currentObject[currentProperty]}" />`;
      }
      else
      {
        td.innerHTML=`${currentObject[currentProperty]}`;
      }
    
      trn.append(td);
    }

    isFirstTime=false;
  }
}


/*let jsonObject={
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ],
    "ad": {
        "company": "StatusCode Weekly",
        "url": "http://statuscode.org/",
        "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
    }
}*/


/*function buildInterface(jsonObject)
{
  console.log(jsonObject);

  let dataTable=document.createElement("table");
  let currentRow=null;
  let currentColumn=null;
  let currentColumnText=null;
  
  for(const property in jsonObject)
  {
    currentRow=document.createElement("tr");
    
    //console.log(`${property}: ${jsonObject[property]}`);

    currentColumn=document.createElement("td");
    currentColumnText=document.createTextNode(`${property}: ${jsonObject[property]}`);
    currentColumn.appendChild(currentColumnText);
    currentRow.appendChild(currentColumn);
    dataTable.appendChild(currentRow);
  }

  document.body.appendChild(dataTable);
}*/


/*//2.
let testImage=document.createElement("img");

fetch('https://cors-anywhere.herokuapp.com/https://www.wikihow.com/images/thumb/4/44/Get-the-URL-for-Pictures-Step-6-Version-3.jpg/v4-728px-Get-the-URL-for-Pictures-Step-6-Version-3.jpg.webp')
.then(function(response)
{
  console.log("response.headers: "+response.headers);

  //for (let [chiave, valore] of response.headers)
  //{
  //console.log(`${chiave} = ${valore}`);
  //}

  for (let chiave of response.headers)
  {
    console.log(`HEADER ${chiave}`);
  }

  console.log("response.ok: "+response.ok);
  console.log("response.redirected: "+response.redirected);
  console.log("response.status: "+response.status);
  console.log("response.statusText: "+response.statusText);
  console.log("response.type: "+response.type);
  console.log("response.url: "+response.url);

  console.log("response.body: "+response.body);
  console.log("response.bodyUsed: "+response.bodyUsed);

  return response.blob();
})
.then(function(blob)
{
  let objectURL=URL.createObjectURL(blob);

  testImage.src=objectURL;

  document.body.appendChild(testImage);
});*/