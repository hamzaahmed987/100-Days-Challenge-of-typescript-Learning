// /*
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
// */
// const helloPromise = new Promise<string>((resolve) => {
//     setTimeout(() => {
//       resolve("Message is printed in 2 seconds");
//     }, 2000);
//   });
export {};
//   helloPromise.then((message) => console.log(message));
// /*
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// */
// const conditionalPromise = new Promise<string>((resolve, reject) => {
//     const success = Math.random() > 0.5; // Randomly choose success or failure
//     if (success) {
//       resolve("Success!");
//     } else {
//       reject(new Error("Failure"));
//     }
//   });
//   conditionalPromise
//     .then((result) => console.log(result)) // Handles a successful resolution
//     .catch((error) => console.log(error.message)); // Handles a rejection
// /*
// Question 144: Explain the use of the Promise.all() method with an example.
// */
// const promise1 = Promise.resolve(3);
// const promise2 = 313;
// const promise3 = new Promise<string>((resolve) => {
//   setTimeout(resolve, 100, "hellooo");
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // Outputs: [3, 313, "hellooo"]
// });
