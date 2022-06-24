// 4. create program which convert a number from decimal to octal and octal to decimal.

function toOctal() {
  const num = document.getElementById("x").value;
  const res = Number(num).toString(8);
  console.log(typeof res);
  document.getElementById("output").innerText = res;
}

function toDecimal() {
  const num = Number(document.getElementById("x").value);
  if (num < 10) {
    alert("Enter number greater than 9");
  }
  const res = parseInt(num, 8);
  console.log(typeof res);
  document.getElementById("output").innerText = res;
}
