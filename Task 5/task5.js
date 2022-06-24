
//5. create a program that converts a number from decimal to binary and binary to decimal. 

function toBinary()
{
    const num = document.getElementById("name").value;  
    const res = Number(num).toString(2)
    document.getElementById("output").innerText = res 

}

function toDecimal()
{
    const num = Number(document.getElementById("name").value);  
    const res = parseInt(num, 2)
    document.getElementById("output").innerText = res   
}