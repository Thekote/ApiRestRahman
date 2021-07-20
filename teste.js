console.log('Teste');

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

timeoutPromise.then(() => {
  console.log('Teste 1');

  return new Promise((resolve) => setTimeout(resolve, 1000));
}).then(() => {
  console.log('Teste 3');
}).catch((err) => console.error(err));

console.log('Teste 2');