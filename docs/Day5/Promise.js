const promiseExample1 = async () => {
  const promise = new Promise((resolve, reject) => {
    resolve(10);
  });
  promise
    .then((yes) => {
      console.log("====", yes);
    })
    .catch((no) => {
      console.log("Err===", no);
    });
  console.log("promise=====", await promise);
};

const promiseExample2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};
promiseExample2().then((value) => {
  console.log("value====", value);
});

console.log("dfhujsfhidh");
