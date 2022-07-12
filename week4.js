const prompt = require("prompt-sync")({ sigint: true});

//super easy
function min(a,b){
    if (a < b){
        return a;
    } else {
        return b;
    }
 }
 console.log(min(-45, 45));

//medium
var m = prompt("Please enter number: ");
months();

function months(m)
    {
        switch (m) {
       
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
        case 7:
            console.log("July");
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
        case 10:
            console.log("October");
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
             break;
        default:
            console.log("Error, enter a valid number");
            break;
        }
    }