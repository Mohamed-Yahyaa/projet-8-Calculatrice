// Présentation
let aNumberString, bNumberString;
let calculatrice = new CalculatriceBLO();

function OnClickNumber(number){
    if(calculatrice.x == undefined){
        if(aNumberString == undefined) aNumberString = '';
        aNumberString += number;
    } 
    else {
        if(yString == undefined) yString = '';
        yString += number;
    } 
    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("display");
    afficheur.value = "";
    
    if(calculatrice.x != undefined && calculatrice.y != undefined && calculatrice.operation != undefined){

        afficheur.value = number;
    }else{
        if(xString != undefined)
        afficheur.value += xString 
        if(calculatrice.operation != undefined)
            afficheur.value += calculatrice.operation     
        if(yString != undefined)
            afficheur.value += yString 

        }
 
   
}

function OnClickOperation(operationParam){
    if(calculatrice.operation == undefined){
        calculatrice.operation = operationParam;
        calculatrice.x = parseFloat(xString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + calculatrice.operation);
    }
}

function Equal(){
    calculatrice.x = parseFloat(xString);
    calculatrice.y = parseFloat(yString);
    calculatrice.Calculer();
    Afficher(calculatrice.solution);
}

function Init(){
    calculatrice.Init();
    xString = undefined;
    yString = undefined;
    let afficheur = document.getElementById("display");
    afficheur.value = "";
}