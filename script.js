var card = document.querySelector("#card");

var heartIcon = document.querySelector("#love");

card.addEventListener("dblclick", function () {
  heartIcon.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'
  heartIcon.style.opacity = '0.8';

  setTimeout(() => {
    heartIcon.style.transform = 'translate(-50%, -300%) scale(1.2) rotate(60deg)'
  } ,800);

  setTimeout(() => {
    heartIcon.style.opacity = '0';
}, 1000);

  setTimeout(() => {
  heartIcon.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)'  
}, 1200);

});

