var cards = document.querySelectorAll('.card1');

[...cards].forEach((card1)=>{
  card1.addEventListener( 'click', function() {
    card1.classList.toggle('is-flipped');
  });
});
