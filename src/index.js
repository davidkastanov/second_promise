// Task 1
const delayedPromise = (value, ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({value, ms});
        }, ms);
    });
};

const promises = [
    delayedPromise('A', 500),
    delayedPromise('B', 1000),
    delayedPromise('C', 300),
    delayedPromise('D', 700),
    delayedPromise('E', 200),
];

Promise.all(promises)
  .then(results => {
    results.forEach(({ value, ms }) => {
      console.log(value, ms);
    });
  })
  .catch(error => console.error('Error!', error));


// Task 2
const randomDelay = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, Math.floor(Math.random() * (5000 - 1000 + 1) + 1000));
    });
};

const randomPromises = [
    randomDelay('a'),
    randomDelay('b'),
    randomDelay('c'),
    randomDelay('d'),
    randomDelay('e'),
];

Promise.race(randomPromises)
.then((result) => console.log(result))
.catch((error) => console.error(error));