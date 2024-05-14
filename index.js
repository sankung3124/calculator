//Calculator Program 
const inputDisplay = document.getElementById("display")


inputDisplay.addEventListener("click", function(){
    
})

function appendToDisplay(input){
    inputDisplay.value += input;

}
function clearDisplay(){
    inputDisplay.value= "";

}
function calculate(){
    try{
        inputDisplay.value =eval(inputDisplay.value);
    }
    catch(error){
        inputDisplay.value = "Error";
    }
}