// Transição da tela inicial para a primeira questão
function iniciarJogo2(){
		var a = document.querySelector('#q22');
	setTimeout(function(){
		a.style.display = 'none';
	}, 500);
	setTimeout(function(){
		document.querySelector('#q23').style.display = 'block';
	}, 500);
  $( init );
};

// Reinicia o Jogo
function reiniciarJogo(){
  var a = document.querySelector('#q33');
  a.style.display = 'none';
  document.querySelector('#q22').style.display = 'block';
};

//THE GAME
// #1 - 23
function init() {

  // Hide the success message
  // $('#successMessage').hide();
  // $('#successMessage').css( {
  //   left: '580px',
  //   top: '250px',
  //   width: 0,
  //   height: 0
  // } );

  // Reset the game
  correctCards = 0;
  $('.cardPile').html( '' );
  $('.cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta1', 'Resposta2', 'Resposta3', 'Resposta4' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '.cardPile' ).draggable( {
      containment: '.content',
      stack: '.cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 1 ).appendTo( '.cardSlots' ).droppable( {
    accept: '.cardPile div',
    hoverClass: 'hovered',
    drop: handleCardDrop
  } );
}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  ui.draggable.addClass( 'correct' );
  ui.draggable.draggable( 'disable' );
  $(this).droppable( 'disable' );
  ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  ui.draggable.draggable( 'option', 'revert', false );
  correctCards = 1;

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( cardNumber == slotNumber ) {
		// Faça alguma coisa quando acertou
    document.querySelector('#shadow-correto23').style.display = 'block';
    document.querySelector('#correto23 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    var pontos23=1;
  } else {
    document.querySelector('#shadow-incorreto23').style.display = 'block';
    document.querySelector('#incorreto23 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Faça alguma coisa quando errou
	}
}
// #1 - 23

// #2 - 24
function abrirq24() {
  document.querySelector('#q23').style.display = 'none';
  document.querySelector('#shadow-correto23').style.display = 'none';
  document.querySelector('#shadow-incorreto23').style.display = 'none';
  document.querySelector('#q24').style.display = 'block';

  $('.cardPile').html( '' );
  $('.cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta12', 'Resposta22', 'Resposta32', 'Resposta42' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '.cardPile' ).draggable( {
      containment: '.content',
      stack: '.cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 1 ).appendTo( '.cardSlots' ).droppable( {
    accept: '.cardPile div',
    hoverClass: 'hovered',
    drop: handleCardDrop1
  } );
}

function handleCardDrop1( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  ui.draggable.addClass( 'correct' );
  ui.draggable.draggable( 'disable' );
  $(this).droppable( 'disable' );
  ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  ui.draggable.draggable( 'option', 'revert', false );

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( cardNumber == slotNumber ) {
    // Faça alguma coisa quando acertou
    document.querySelector('#shadow-correto24').style.display = 'block';
    document.querySelector('#correto24 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    var pontos24=1;
    // corectCards++;
  } else {
    document.querySelector('#shadow-incorreto24').style.display = 'block';
    document.querySelector('#incorreto24 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #2 - 24

// #3 - 25
function abrirq25() {
  document.querySelector('#q24').style.display = 'none';
  document.querySelector('#shadow-correto24').style.display = 'none';
  document.querySelector('#shadow-incorreto24').style.display = 'none';
  document.querySelector('#q25').style.display = 'block';

  $('.cardPile').html( '' );
  $('.cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta13', 'Resposta23', 'Resposta33', 'Resposta43' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '.cardPile' ).draggable( {
      containment: '.content',
      stack: '.cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '.cardSlots' ).droppable( {
    accept: '.cardPile div',
    hoverClass: 'hovered',
    drop: handleCardDrop2
  } );
}

function handleCardDrop2( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  ui.draggable.addClass( 'correct' );
  ui.draggable.draggable( 'disable' );
  $(this).droppable( 'disable' );
  ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  ui.draggable.draggable( 'option', 'revert', false );

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( cardNumber == slotNumber ) {
    // Faça alguma coisa quando acertou
    document.querySelector('#shadow-correto25').style.display = 'block';
    document.querySelector('#correto25 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    var pontos25=1;
    // corectCards++;
  } else {
    document.querySelector('#shadow-incorreto25').style.display = 'block';
    document.querySelector('#incorreto25 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #3 - 25

// #4 - 26
function abrirq26() {
  document.querySelector('#q25').style.display = 'none';
  document.querySelector('#shadow-correto25').style.display = 'none';
  document.querySelector('#shadow-incorreto25').style.display = 'none';
  document.querySelector('#q26').style.display = 'block';

  $('.cardPile').html( '' );
  $('.cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '.cardPile' ).draggable( {
      containment: '.content',
      stack: '.cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '.cardSlots' ).droppable( {
    accept: '.cardPile div',
    hoverClass: 'hovered',
    drop: handleCardDrop3
  } );
}

function handleCardDrop3( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  ui.draggable.addClass( 'correct' );
  ui.draggable.draggable( 'disable' );
  $(this).droppable( 'disable' );
  ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  ui.draggable.draggable( 'option', 'revert', false );

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( cardNumber == slotNumber ) {
    // Faça alguma coisa quando acertou
    document.querySelector('#shadow-correto26').style.display = 'block';
    document.querySelector('#correto26 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    var pontos25=1;
    // corectCards++;
  } else {
    document.querySelector('#shadow-incorreto26').style.display = 'block';
    document.querySelector('#incorreto26 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #4 - 26



// Cálculo e Display do Resultado Final
function abrirResultadoFinal(){
  document.querySelector('#q32').style.display = 'none';
  document.querySelector('#shadow-correto32').style.display = 'none';
  document.querySelector('#shadow-incorreto32').style.display = 'none';
  document.querySelector('#q33').style.display = 'block';
  document.querySelector('#displayResultadoFinal').style.display = 'block';
  document.querySelector('#displayResultadoFinal span').innerHTML = 'Você acertou '+correctCards+' perguntas de um total de 20!';


  if (correctCards>=8){
    document.querySelector('#joazinho').style.display = 'block';
    document.querySelector('#juvenil').style.display = 'none';
    document.querySelector('#bad').style.display = 'none';
  }
  else if(correctCards>=5){
    document.querySelector('#juvenil').style.display = 'block';
    document.querySelector('#joazinho').style.display = 'none';
    document.querySelector('#bad').style.display = 'none';
  }
  else{
    document.querySelector('#bad').style.display = 'block';
    document.querySelector('#joazinho').style.display = 'none';
    document.querySelector('#juvenil').style.display = 'none';
  }
};

function responder33() {
  document.querySelector('#shadow-correto33').style.display = 'block';
};
