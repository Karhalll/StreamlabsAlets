var flipCardContainer = document.querySelector(".flip-card-container");
var frontImage = document.getElementById("card-front");

function flipCard() {
  setTimeout(function() {
    flipCardContainer.classList.toggle("flip");
  }, 1000);
} 
document.addEventListener('DOMContentLoaded', flipCard());