var cards = document.querySelectorAll('.card2');

[...cards].forEach((card2)=>{
  card2.addEventListener( 'click', function() {
    card2.classList.toggle('is-flipped');
  });
});
