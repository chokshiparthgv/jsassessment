// Given string first, second and third. Find out that third string is shuffle of first and second.
// Input:
// first: "abc"
// second: "def"
// third: "adebfc"
// Output: true

function check() {
  const get_x = document.getElementById("x").value;
  const get_y = document.getElementById("y").value;
  const get_z = document.getElementById("z").value;

  let con_x = get_x.toString().toLowerCase();
  let con_y = get_y.toString().toLowerCase();
  let con_z = get_z.toString().toLowerCase();

  const add = con_x + con_y;
  split_xy = add.split("").sort();
  split_z = con_z.split("").sort();
  console.log(split_xy);
  console.log(split_z);
  console.log(split_z.length);
  var count = 0;
  for (i = 0; i < split_z.length; i++) {
    if (split_xy[i] === split_z[i]) {
      count++;
      console.log(i);
    }
  }
  if (count === split_z.length) {
    console.log("True");
    document.getElementById("trueorfalse").innerText = "TRUE";
  } else {
    console.log("False");
    document.getElementById("trueorfalse").innerText = "FALSE!";
  }
}
