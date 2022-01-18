//  
let aString , bString ; 
let calculatrice = new CalculatricePoo ;


function OnClickNumber(number){
    if(calculatrice.a == undefined){
        if (aString == undefined)aString = '';
        aString += number
    }else{
        if(calculatrice.b == undefined)bString = '';
        bString += number
    }

    Afficher()
}



function Afficher(number){
    let afficheur = document.getElementById("display")
    afficheur.value = ''



    if(aString != undefined)
    afficheur.value += aString
    
    if(calculatrice.operation != undefined)
    afficheur.value += calculatrice.operation

    if(bString != undefined)
    afficheur.value += bString
}







function OnClickOperation(operationParam){
    if(calculatrice.operation == undefined){
        calculatrice.operation = operationParam;
        calculatrice.a = parseFloat(aString);

        Afficher()
    }
}