const axios = require("axios");
const { response } = require("express");
// what is a promise, and how to define a promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

// promises

// promises in parallel
const promises = [
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 1000)
  ),
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(2);
    }, 1000)
  ),
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(3);
    }, 1000)
  ),
];

Promise.all(promises).then((result) => {
  console.log(result);
});

function asyncOperation(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = input * 2;

      if (result >= 20) {
        reject("Result too large");
      } else {
        resolve(result);
      }
    }, 1000);
  });
}

asyncOperation(2)
  .then((result) => {
    console.log(result);
    return asyncOperation(result);
  })
  .then((result) => {
    console.log(result);
    return asyncOperation(result);
  })
  .then((result) => {
    console.log(result);
  });

// promises in a real world example
// function fetchData() {
//   axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
//     console.log(response.data);
//   });
// }

// fetchData();

// promise using async/await
async function fetchData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(response.data);
}

fetchData();
