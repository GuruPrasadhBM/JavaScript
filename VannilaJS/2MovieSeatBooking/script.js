const container = document.querySelector('.container'); ///selects one container, first one
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); //Returns  a node list
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
console.log(ticketPrice);

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

////Click on a Seat to change it to get selected
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

////Movie Selection Changed Event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
