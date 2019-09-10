function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("hidden");
  $(next).removeClass().addClass("next");



}

//Utilizar setas do teclado para mover o slider.
$(document).keydown(function (e) { //Recebendo o (e) do evento ativado 
  switch (e.which) { // a propriedade .which retorna qual tecla do teclado ou botão do mouse foi pressionada para o evento.
    case 37: // esquerda | 37 é o numero definido para a seta da esquerda
      moveToSelected('prev'); //chama a função e passa o 'prev'
      break; //fim do switch

    case 39: // direita | 39 é o numero definido para a seta da direita
      moveToSelected('next'); //chama a função e passa o 'next'
      break; //fim do switch

    default: return; // Caso nada dentro do switch sejá "true", ele retorna um vazio.
  }
  e.preventDefault(); //Previnindo o evento padrão para os eventos das teclas, assim evitando conflitos.
});

$('#carousel div').click(function () {
  moveToSelected($(this));
});

$('#prev').click(function () {
  moveToSelected('prev');
});

$('#next').click(function () {
  moveToSelected('next');
});