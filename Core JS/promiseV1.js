////Promises

////Example-1

let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
  ////Do the cleaning process
  let isClean = false;

  if (isClean) {
    resolve('cleaned');
  } else {
    reject('not Cleaned');
  }
});

promiseToCleanTheRoom
  .then(function (fromResolve) {
    ////Room Cleaned
    console.log('The room is ' + fromResolve);
  })
  .catch(function (fromReject) {
    console.log('The room is ' + fromReject);
    ////Room not cleaned
  });
