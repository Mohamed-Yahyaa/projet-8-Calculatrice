// Variables
let A,B,solution,operation;
let AString, BString;



// Métier
function Calculer(A,B,operation){
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = A + B;
            break;
        case '-':
            _solution = A-B;
                break;
        default:
            break;
    }
    return _solution;
}


// Présentation
function ClickNumber(number){
    if(A == undefined){
        if(AString == undefined) AString = '';
        AString += number;
    } 
    else {
        if(BString == undefined) BString = '';
        BString += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(A != undefined && B != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(AString != undefined)
        afficheur.value += AString 
        if(operation != undefined)
            afficheur.value += operation     
        if(BString != undefined)
            afficheur.value += BString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        A = parseFloat(AString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
    A = parseFloat(AString);
    B = parseFloat(BString);
    solution = Calculer(A,B,operation);
    Afficher(solution);
}

function Init(){
    A = undefined;
    B = undefined;
    AString = undefined;
    BString = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
}