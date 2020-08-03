////Reference https://www.youtube.com/watch?v=s6SH72uAn3Q&t=13s
//// Techsith

let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    ////Clean the room
    resolve('Cleaned the room');
  });
};

let removeGarbage = function (message) {
  ////remove the garbage
  return new Promise(function (resolve, reject) {
    resolve(message + ', removed the garbage');
  });
};

let winIceCream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + ' and won the Icecream');
  });
};

////Nested Promise
// cleanRoom()
//   .then(function (result) {
//     console.log(result);
//     return removeGarbage(result);
//   })
//   .catch(function (rejectMessage) {
//     console.log('Could not remove garbage');
//   })
//   .then(function (result) {
//     console.log(result);
//     return winIceCream(result);
//   })
//   .catch(function (rejectMessage) {
//     console.log('Could not win icecream');
//   })
//   .then(function (result) {
//     console.log('finished ' + result);
//   })
//   .catch(function (rejectMessage) {
//     console.log('Could not finish the sequence');
//   });

Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(() => {
  console.log('All finished');
});

Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(() => {
  console.log('One of the promises is finished');
});
