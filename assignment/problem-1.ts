// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

// // Sample Input:
// repeatString("Hello!", 3)

// // Sample Output:
// "Hello!Hello!Hello!"

function repeatString(str: string, n: number) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += str;
  }
  return res;
}
console.log(repeatString("Azmal!", 4));
