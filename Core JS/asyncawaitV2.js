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

  const getPopCorn = new Promise((resolve, reject) => {
    resolve('Popcorn');
  });

  const getCandy = new Promise((resolve, reject) => {
    resolve('Candy');
  });

  const getSoftDrink = new Promise((resolve, reject) => {
    resolve('soft drink');
  });

  const addButterToPopcorn = new Promise((resolve, reject) => {
    resolve('butter');
  });

  ////Await can only be used in side an Async function
  //let ticket = await promiseWifeBringingTickets;
  console.log(`Wife : I have the ${ticket} `);
  console.log('Husband : We should go in ');
  console.log('Wife: No, I am hungry');

  let popCorn = await getPopCorn;

  console.log(`Husband : I got some ${popCorn}`);
  console.log('Husband : We should go in ');
  console.log('Wife: No, I need butter for my popcorn');

  let butterForPopCorn = await addButterToPopcorn;
  console.log(`Husband : I got some ${butterForPopCorn} on popcorn`);
  console.log('Husband : anything else you need ');
  console.log('Wife: Lets go we are getting late');
  console.log('Husband : OK, lets go in ');

  //   let [popcorn, candy, softDrink] = await Promise.all([
  //     getPopCorn,
  //     getCandy,
  //     getSoftDrink,
  //   ]);

  //   console.log(`${popcorn}, ${candy}, ${softDrink}`);

  let ticket;
  try {
    ticket = await promiseWifeBringingTickets;
  } catch (e) {
    ticket = 'sad face';
  }

  return ticket;
};

preMovie().then((msg) => {
  console.log(`person3 shows ${msg}`);
});

console.log('Person4 : Shows the ticket');
console.log('Person5 : Shows the ticket');
