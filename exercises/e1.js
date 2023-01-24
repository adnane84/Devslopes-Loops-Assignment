// EXERCISE 1
// Return an array of numbers in 1..10
// getFirstTenNumbers() => [1, 2, 3, ... , 10]

export function getFirstTenNumbers() {
  // Your code goes here...
  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(i);
    i + 1;
  }
  return array;

  // Both of them can give us the same result, I'll wait for your feedback about which one is better.

  //   let arr = [];
  //   let i = 0;
  //   while (i <= number) {
  //     arr.push(i);
  //     i++;
  //   }
  //   return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
