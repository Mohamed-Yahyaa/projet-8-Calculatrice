var aString ;
var a ;
var bString ;
var b ;
var operation;
var totale




function onClickNumber(number){
    if(a == undefined){
        if(aString == undefined)aString = ''
        aString += number
    }else {
        if(bString == undefined)bString = ''
        bString += number
    }
    Afficher()
}


function Afficher(number){
    let Afficher = document.getElementById("display")
    Afficher.value = ''
    if(a != undefined && b != undefined && operation != undefined){
        Afficher.value = number
    }else{
        if(aString != undefined){
            Afficher.value += aString
         }
         if(operation != undefined){
             Afficher.value += operation
         }
         if (bString != undefined){
             Afficher.value += bString
         }
    }




}

function onClickOperation(operationPara){
    if(operation == undefined){
        operation = operationPara ;
         a = parseFloat(aString)
        Afficher()
    }
}  


function equal(){
    a = parseFloat(aString)
    b = parseFloat(bString)
    totale = some(a,b,operation)
    Afficher(totale)
}

function some(aPara,bPara,operationPara){
    let total = undefined ;
    switch(operationPara){
        case '+' :
            total = aPara + bPara
            break;
            case '-' :
                total = aPara - bPara
                break;
                default:
    }
    return total
}