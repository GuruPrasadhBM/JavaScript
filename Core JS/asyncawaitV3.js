////With Async and Await
////Reference : https://www.youtube.com/watch?v=IGoAdn-e5II&t=420s

console.log('Person1 : Shows the ticket');
console.log('Person2 : Shows the ticket');

////Async function always returns a promise
const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('ticket');
    }, 3000);
  });

  let ticket;
  try {
    ticket = await promiseWifeBringingTickets;
  } catch (ex) {
    ticket = 'sad face';
  }

  return ticket;
};

preMovie().then((msg) => {
  console.log(`person3 shows ${msg}`);
});

console.log('Person4 : Shows the ticket');
console.log('Person5 : Shows the ticket');
