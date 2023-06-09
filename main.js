(function() { 
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

  this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return; 
  }
     
    secondCard = this;
    lockBoard = true;
     
    checkForMatch();
  }
     
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }
     
    unflipCards();
  }
     
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }
     
  function unflipCards() {

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.ceil(Math.random() * 16);
      card.style.order = ramdomPos;
    });
  })();

  cards.forEach(card => card.addEventListener('click', flipCard));

})();

let button = document.querySelector('.btn');

function playAgain() {
  window.location.reload();
}

button.addEventListener('click', playAgain);
  




  






