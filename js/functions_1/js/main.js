"use strict"
/*dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();
dimmiLoStatusDelTuoDato();

//1.
function dimmiLoStatusDelTuoDato()
{
    console.log("W il lunedì.");
}*/


/*//2.
function dimmiIlTuoNome()
{
    let mioNome="Luca";

    console.log(mioNome);
}

dimmiIlTuoNome();

console.log(mioNome);*/


/*//3.
let cognome="Bianchi";

function dimmiIlTuoNome()
{
    let mioNome="Luca "+cognome;

    console.log(mioNome);
}

dimmiIlTuoNome();*/


/*//4.
let cognome="Bianchi";

function dimmiIlTuoNome()
{
    cognome="Rossi";

    let mioNome="Luca "+cognome;

    console.log(mioNome);
}

console.log(cognome);

dimmiIlTuoNome();

console.log(cognome);*/


/*//5.
let cognome="Bianchi";

function dimmiIlTuoNome()
{
    let cognome="Rossi";

    let mioNome="Luca "+cognome;

    console.log(mioNome);
}

dimmiIlTuoNome();

console.log(cognome);*/


/*//6.
function dimmiDiTe(nome, cognome, anni)
{
    //let nome="Marco";
    //nome="Marco";

    console.log(nome+" "+cognome+" "+anni);
}

dimmiDiTe("Paolo", "Verdi", 33);
dimmiDiTe("Anna", "Gialli", 26);
dimmiDiTe("Carlo", "Verdi", 38);*/


/*//7.
function dimmiDiTe(nome, cognome, anni)
{
    console.log(nome+" "+cognome+" "+anni);
}

dimmiDiTe();
dimmiDiTe("Massimo");*/


/*//8.
function dimmiDiTe(nome="Nome non dato", cognome="Cognome non dato", anni=0)
{
    console.log(nome+" "+cognome+" "+anni);
}

dimmiDiTe();
dimmiDiTe("Massimo");*/


//9.
function dimmiDiTe(nome="Nome non dato",
                cognome="Cognome non dato",
                   anni=calcolaAnni(17))
{
    console.log(nome+" "+cognome+" "+anni);
}

function calcolaAnni(anniMaggiorenne)
{
    if(anniMaggiorenne>=18)
        return 18;
    else
        return anniMaggiorenne;
    //return 50;
}

dimmiDiTe("Massimo", "Bianchi", 35);
//dimmiDiTe("Massimo", "Bianchi");