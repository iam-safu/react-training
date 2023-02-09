const calculateInterestAsyncAwait = require('./readline2.js')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the principal: ', (principal) => {
  rl.question('Please enter the interest rate: ', (rate) => {
    rl.question('Please enter the number of years: ', (years) => {
      calculateInterestAsyncAwait(principal, rate, years)
      rl.close();
    });
  });
});