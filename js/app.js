var correct;

// Inicializa el juego
game();

// Enlaza el click de los círculos
$('.option').on('click', guess);

function game() {
  correct = Math.floor(Math.random() * 2);

  $('.option').each(function(index) {
    var color = generateColor();
    $(this).css('background-color',color);
  
    if(index === correct) {
      $(".question").text(color);
    }
  });
};

function guess(){
  var index = $('.option').index(this)
  if (index === correct) {
    alert("Muy bien!!!");
  } else {
    alert("que mal");
  }

  game();
}

function random() {
  return Math.floor(Math.random() * 255);
};

function generateColor (){
  return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
};