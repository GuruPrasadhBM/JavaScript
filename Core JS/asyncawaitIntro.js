////Without Async and Await
////Reference : https://www.youtube.com/watch?v=IGoAdn-e5II&t=420s

console.log('Person1 : Shows the ticket');
console.log('Person2 : Shows the ticket');

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket');
  }, 3000);
});

const getPopCorn = promiseWifeBringingTickets.then((t) => {
  //console.log('Person 3 shows the ${t}');
  console.log('Wife : I have the tickets ');
  console.log('Husband : We should go in ');
  console.log('Wife: No, I am hungry');
  return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`);
  });
});

const getButter = getPopCorn.then((t) => {
  console.log('Husband : I got some popcorn ');
  console.log('Husband : We should go in ');
  console.log('Wife: No, I need butter for my popcorn');
  return new Promise((resolve, reject) => {
    resolve(`${t} butter`);
  });
  console.log(t);
});

getButter.then((t) => console.log(t));

console.log('Person4 : Shows the ticket');
console.log('Person5 : Shows the ticket');
