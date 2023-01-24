// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...

  let sumOfEachArray = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    if (array[i].withdrawals) {
      for (let j = 0; j < array[i].withdrawals.length; j++) {
        sum += array[i].withdrawals[j];
      }
      sumOfEachArray.push(sum);
    } else {
      sumOfEachArray.push(0);
    }
 
  }
  return sumOfEachArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
