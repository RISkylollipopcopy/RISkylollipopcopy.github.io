var luck1 = document.getElementById("luck1");
var luck2 = document.getElementById("luck2");
var results = document.getElementById("results");
var form = document.getElementById("forming");
var selects = document.getElementById("selects");

form.addEventListener('submit', function (event)
{
//     if ((luck1.value && luck2.value) == false){
//         alert("input a number")}

//         A = parseInt(luck1.value);
//         B = parseInt(luck2.value);

//        var result = A + B;
//        results.innerText = result + 
//        "\n Input " + A + " + " + B + " =" + result;
//        event.preventDefault();

// }



if ((luck1.value && luck2.value) == false){
    alert("Please complete the input below: \n Input Numbers and Select Operand")}
    

var cals = selects.value
 if (cals == "+")
{
    A = parseFloat(luck1.value);
    B = parseFloat(luck2.value);
    var result = A + B;
    results.innerHTML = (`Answer: 
        
        ${A} + ${B} = ${result}`);
    
    // "\n Answer: "+ A + " + " + B  +"="+result;
    event.preventDefault();

}
else if (cals == "-") {
    A = parseFloat(luck1.value);
    B = parseFloat(luck2.value);
    var result = A-B;
    results.innerHTML = (`Answer:

        ${A} - ${B} = ${result}`);
    
    // "\n Answer: "+ A + " - " + B  +" ="+result;
    event.preventDefault();

} else if (cals == "*") {
    A = parseFloat(luck1.value); //parseFloat to convert the string input to Decimal/ Number
    B = parseFloat(luck2.value); //parseFloat to convert the string input to number/ Decimal
    var result = A*B;
    results.innerHTML = (`Answer
        
        ${A} * ${B} = ${result}`)
    
    // (`Answer: 
    //     ${A} * ${B} = ${result}`);
    
    // "\n Answer: "+ A + " * " + B  +"="+result;
    event.preventDefault();

} else if (cals == "/") {
    A = parseFloat(luck1.value); //Number to convert the string input to number also... 
    B = parseFloat(luck2.value); // works as Parsefloat
    var result = A/B;
    results.innerText = (`Answer:
        
        ${A} / ${B} = ${parseFloat(result).toFixed(4)}
        
         Hope You Understand?`);
    
    // "\n Answer: "+ A + " / " + B  +"="+ parseFloat(result).toFixed(4);
    event.preventDefault();

} else if (cals == "%") {
    A = parseFloat(luck1.value);
    B = parseFloat(luck2.value);
    let fresult = A / 100;

    result = fresult * B;
    results.innerText = (`Answer = ${result}
        
        ${A}% of ${B} Explanation is:
        
        ${A} / 100 = ${fresult}
        
        ${fresult} * ${B} = ${result}
        
         Hope You Understand?`);
    
    // (`Answer for:
        
    //     Percentage of ${A} in ${B}, Explanation is Below
        
    //     ${A} / ${B} * 100 = ${percent}%
    //     `)
    
    // "\n Answer for: Percentage of " + A +" in " + B 
    // + " is \nExplanation below \n " + A + " / " + B  + " * " + "100" +"="+percent +"%";
    event.preventDefault();
}
    else if (cals == "**") {
        A = parseFloat(luck1.value);
        B = parseFloat(luck2.value);
        result = A**B;
        results.innerText = (`Answer:

            ${A}^${B} = ${result}



            Example: let assume we have 2^3

            2*2*2 = 125

            Hope You Understand?`);
        
        // "\n Answer: "+ A + " raise to power of " + B  +"="+result;
        event.preventDefault();
    }
    // else if (cals == "%r") {
    //     A = parseFloat(luck1.value);
    //     B = parseFloat(luck2.value);
    //     result = B%A;
    //     results.innerText = B + " divides "+ A + " with remainder of " + result;
        
    //     event.preventDefault();

    // }
{ 
    
}{
    
} {
    
}

})

/* 
if Select value is + do addition 
if select value is - do substraction
*/
