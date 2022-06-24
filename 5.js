// 5. You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

function check() {
  const get_x = document.getElementById("x").value;
  const get_y = document.getElementById("y").value;

  stones = get_x.toString();
  jewels = get_y.toString();

  var count = 0;
  for (i = 0; i < stones.length; i++) {
    for (j = 0; j < jewels.length; j++) {
      if (stones.charAt(i) == jewels.charAt(j)) 
      count++;
    }
  }

  console.log(count);
  document.getElementById("output").innerText = `Number of Jewels in Stones are: ${count}`;
}

