

async function calculateInterest(amount, rate, year) {
    return new Promise((resolve, reject) => {
        if (amount && rate && year) {
            const interest = (amount * rate * year) / 100;
            resolve(interest);
        } else {
            reject('Please provide valid input');
        }
    });
};

async function calculateInterestAsyncAwait(amount, rate, year) {
    try {
        const interest = await calculateInterest(amount, rate, year);
        console.log(`Total interest amount is ${interest}`);
    } catch (err) {
        console.log(err);
    }
};


module.exports = calculateInterestAsyncAwait


