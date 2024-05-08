//Get the root element
var r = document.querySelector(':root');

//Create a function for getting a variable value
function myFunction_get(){
    //Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    //Alert the variable of the --blue.variable
    alert('The value of --blue is: '+rs.getPropertyValue('--blue'));
}

//create a function for setting a variable value
function myFunction_set(){
    //set the value of --blue to lightblue
    r.style.setProperty('--blue', 'lightblue');
}