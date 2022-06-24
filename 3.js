// 3. There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
// Return the time taken for the person at position k (0-indexed) to finish buying tickets.
// Example 1:
// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.
// Constraints:
// n == tickets.length
// 1 <= n <= 100
// 1 <= tickets[i] <= 100
// 0 <= k < n

function check() {
  const get_x = document.getElementById("x").value;
  const get_y = document.getElementById("y").value;
  console.log(typeof get_x);
  console.log(typeof get_y);
  queue = get_x.split(",");
  console.log("Tickets ", queue);
  console.log("K ", get_y);
  console.log(Array.isArray(queue));
  var timeTaken = function (queue, get_y) {
    let time = 0;

    while (queue[get_y] !== 0) {
      for (let i = 0; i < queue.length; i++) {
        if (queue[i] !== 0) {
          queue[i]--;
          time++;
        }
      }
    }
    // return time;
    console.log(time);
    document.getElementById("output").innerText = `The time taken for the ${get_y}th index person is ${time} seconds`;
};
  timeTaken(queue, get_y);
}

