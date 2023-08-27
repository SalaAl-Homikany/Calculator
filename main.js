let input = document.getElementById("calc")
let output = document.getElementById("result")

function display(num){
    input.value += num;
}
function Clear(){
    input.value ="";
    output.value ="";
}
function Delete(){
    input.value =input.value.slice(0,-1);
}
function calc(){
    try{
       r= eval(input.value);
       output.value=r;
    }
    catch(Err){
        output.value ="Error";
    }
}