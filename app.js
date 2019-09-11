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
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");
  $(prev).removeClass().addClass("hidden-lf");
  $(next).removeClass().addClass("next");
  $(nextSecond).removeClass().addClass("hidden");

  if ($(".selected").is(':first-child')) {
    $('#prev').addClass("btn-disable");
  } else {
    $('#prev').removeClass("btn-disable");
  }

  if ($(".selected").is(':last-child')) {
    $('#next').addClass("btn-disable");
  } else {
    $('#next').removeClass("btn-disable");
  }

}

//Utilizar setas do teclado para mover o slider.

$(document).keydown(function (e) {
  const move = [];

  move[37] = () => moveToSelected('prev');
  move[39] = () => moveToSelected('next');

  move[e.which]();

  e.preventDefault();
});

$('.clickMove').click(function () {
  moveToSelected($(this));
});

$('#prev').click(function () {
  moveToSelected('prev');
});

$('#next').click(function () {
  moveToSelected('next');
});


$("p").on("swipe", function () {
  $(this).hide();
});


$(function () {
  $(".clickMove").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == "right") {
        moveToSelected('prev');
      } else if (direction == "left") {
        moveToSelected('next');
      }
    },
    threshold: 0
  });
});




