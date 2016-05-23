// Vars
var pontos23 = 0;
var pontos24 = 0;
var pontos25 = 0;
var pontos26 = 0;
var pontos27 = 0;
var pontos28 = 0;
var pontos29 = 0;
var pontos30 = 0;
var pontos31 = 0;
var pontos32 = 0;

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
// function reiniciarJogo(){
//   var a = document.querySelector('#q33');
//   a.style.display = 'none';
//   document.querySelector('#q22').style.display = 'block';
// };

//THE GAME
// #1 - 23
function init() {
   // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta1', 'Resposta2', 'Resposta3', 'Resposta4' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 1 ).appendTo( '#cardSlots' ).droppable( {
    accept: '#cardPile div',
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
    setTimeout(function(){document.querySelector('#shadow-correto23').style.display = 'block';}, 300);
    document.querySelector('#correto23 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos23 = 1;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto23').style.display = 'block';}, 300);
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

  $('#cardPile1').html( '' );
  $('#cardSlots1').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta12', 'Resposta22', 'Resposta32', 'Resposta42' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile1' ).draggable( {
      containment: '#content1',
      stack: '#cardPile1 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 1 ).appendTo( '#cardSlots1' ).droppable( {
    accept: '#cardPile1 div',
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
    setTimeout(function(){document.querySelector('#shadow-correto24').style.display = 'block';}, 300);
    document.querySelector('#correto24 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos24 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto24').style.display = 'block';}, 300);
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

  $('#cardPile2').html( '' );
  $('#cardSlots2').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta13', 'Resposta23', 'Resposta33', 'Resposta43' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile2' ).draggable( {
      containment: '#content2',
      stack: '#cardPile2 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots2' ).droppable( {
    accept: '#cardPile2 div',
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
    setTimeout(function(){document.querySelector('#shadow-correto25').style.display = 'block';}, 300);
    document.querySelector('#correto25 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos25 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto25').style.display = 'block';}, 300);
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

  $('#cardPile3').html( '' );
  $('#cardSlots3').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile3' ).draggable( {
      containment: '#content3',
      stack: '#cardPile3 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots3' ).droppable( {
    accept: '#cardPile3 div',
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
    setTimeout(function(){document.querySelector('#shadow-correto26').style.display = 'block';}, 300);
    document.querySelector('#correto26 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos26 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto26').style.display = 'block';}, 300);
    document.querySelector('#incorreto26 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #4 - 26

// #5 - 27
function abrirq27() {
  document.querySelector('#q26').style.display = 'none';
  document.querySelector('#shadow-correto26').style.display = 'none';
  document.querySelector('#shadow-incorreto26').style.display = 'none';
  document.querySelector('#q27').style.display = 'block';

  $('#cardPile4').html( '' );
  $('#cardSlots4').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile4' ).draggable( {
      containment: '#content4',
      stack: '#cardPile4 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots4' ).droppable( {
    accept: '#cardPile4 div',
    hoverClass: 'hovered',
    drop: handleCardDrop4
  } );
}

function handleCardDrop4( event, ui ) {
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
    setTimeout(function(){document.querySelector('#shadow-correto27').style.display = 'block';}, 300);
    document.querySelector('#correto27 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos27 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto27').style.display = 'block';}, 300);
    document.querySelector('#incorreto27 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #5 - 27

// #6 - 28
function abrirq28() {
  document.querySelector('#q27').style.display = 'none';
  document.querySelector('#shadow-correto27').style.display = 'none';
  document.querySelector('#shadow-incorreto27').style.display = 'none';
  document.querySelector('#q28').style.display = 'block';

  $('#cardPile5').html( '' );
  $('#cardSlots5').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile5' ).draggable( {
      containment: '#content5',
      stack: '#cardPile5 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots5' ).droppable( {
    accept: '#cardPile5 div',
    hoverClass: 'hovered',
    drop: handleCardDrop5
  } );
}

function handleCardDrop5( event, ui ) {
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
    setTimeout(function(){document.querySelector('#shadow-correto28').style.display = 'block';}, 300);
    document.querySelector('#correto28 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos28 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto28').style.display = 'block';}, 300);
    document.querySelector('#incorreto28 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #6 - 28

// #7 - 29
function abrirq29() {
  document.querySelector('#q28').style.display = 'none';
  document.querySelector('#shadow-correto28').style.display = 'none';
  document.querySelector('#shadow-incorreto28').style.display = 'none';
  document.querySelector('#q29').style.display = 'block';

  $('#cardPile6').html( '' );
  $('#cardSlots6').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile6' ).draggable( {
      containment: '#content6',
      stack: '#cardPile6 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots6' ).droppable( {
    accept: '#cardPile6 div',
    hoverClass: 'hovered',
    drop: handleCardDrop6
  } );
}

function handleCardDrop6( event, ui ) {
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
    setTimeout(function(){document.querySelector('#shadow-correto29').style.display = 'block';}, 300);
    document.querySelector('#correto29 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos29 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto29').style.display = 'block';}, 300);
    document.querySelector('#incorreto29 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #7 - 29

// #8 - 30
function abrirq30() {
  document.querySelector('#q29').style.display = 'none';
  document.querySelector('#shadow-correto29').style.display = 'none';
  document.querySelector('#shadow-incorreto29').style.display = 'none';
  document.querySelector('#q30').style.display = 'block';

  $('#cardPile7').html( '' );
  $('#cardSlots7').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile7' ).draggable( {
      containment: '#content7',
      stack: '#cardPile7 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots7' ).droppable( {
    accept: '#cardPile7 div',
    hoverClass: 'hovered',
    drop: handleCardDrop7
  } );
}

function handleCardDrop7( event, ui ) {
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
    setTimeout(function(){document.querySelector('#shadow-correto30').style.display = 'block';}, 300);
    document.querySelector('#correto30 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos30 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto30').style.display = 'block';}, 300);
    document.querySelector('#incorreto30 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #8 - 30

// #9 - 31
function abrirq31() {
  document.querySelector('#q30').style.display = 'none';
  document.querySelector('#shadow-correto30').style.display = 'none';
  document.querySelector('#shadow-incorreto30').style.display = 'none';
  document.querySelector('#q31').style.display = 'block';

  $('#cardPile8').html( '' );
  $('#cardSlots8').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile8' ).draggable( {
      containment: '#content8',
      stack: '#cardPile8 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots8' ).droppable( {
    accept: '#cardPile8 div',
    hoverClass: 'hovered',
    drop: handleCardDrop8
  } );
}

function handleCardDrop8( event, ui ) {
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
    setTimeout(function(){document.querySelector('#shadow-correto31').style.display = 'block';}, 300);
    document.querySelector('#correto31 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos31 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto31').style.display = 'block';}, 300);
    document.querySelector('#incorreto31 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #9 - 31
// #10 - 32
function abrirq32() {
  document.querySelector('#q31').style.display = 'none';
  document.querySelector('#shadow-correto31').style.display = 'none';
  document.querySelector('#shadow-incorreto31').style.display = 'none';
  document.querySelector('#q32').style.display = 'block';

  $('#cardPile9').html( '' );
  $('#cardSlots9').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 'Resposta14', 'Resposta24', 'Resposta34', 'Resposta44' ];
  // numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').attr( 'data-number', i+1 ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile9' ).draggable( {
      containment: '#content9',
      stack: '#cardPile9 div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  $('<div> Solte aqui a resposta certa! </div>').data( 'number', 2 ).appendTo( '#cardSlots9' ).droppable( {
    accept: '#cardPile9 div',
    hoverClass: 'hovered',
    drop: handleCardDrop9
  } );
}

function handleCardDrop9( event, ui ) {
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
    setTimeout(function(){document.querySelector('#shadow-correto32').style.display = 'block';}, 300);
    document.querySelector('#correto32 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
    pontos32 = 1;
    // corectCards++;
  } else {
    setTimeout(function(){document.querySelector('#shadow-incorreto32').style.display = 'block';}, 300);
    document.querySelector('#incorreto32 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
    // Adicionar div de explicação
    // Faça alguma coisa quando errou
  }
}
// #10 - 32

// Cálculo e Display do Resultado Final
function abrirResultadoFinal(){
  var pontos=pontos23+pontos24+pontos25+pontos26+pontos27+pontos28+pontos29+pontos30+pontos31+pontos32;
  document.querySelector('#q32').style.display = 'none';
  document.querySelector('#shadow-correto32').style.display = 'none';
  document.querySelector('#shadow-incorreto32').style.display = 'none';
  document.querySelector('#q33').style.display = 'block';
  document.querySelector('#displayResultadoFinal').style.display = 'block';
  document.querySelector('#displayResultadoFinal span').innerHTML = 'Você acertou '+pontos+' perguntas de um total de 10!';


  if (pontos>=8){
    document.querySelector('#joazinho').style.display = 'block';
    document.querySelector('#juvenil').style.display = 'none';
    document.querySelector('#bad').style.display = 'none';
  }
  else if(pontos>=5){
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
