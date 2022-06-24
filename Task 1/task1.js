/*
    1. Given a String S, reverse the string without reversing its individual words. 
    Words are separated by dots.  

*/
function demo()
{
    const str = document.getElementById("name").value;
    console.log(str.split(".").reverse().join("."));
    document.getElementById("output").innerText = str.split(".").reverse().join(".")
}