// Transição da tela inicial para a primeira questão
function iniciarJogo2(){
		var a = document.querySelector('#q22');
	setTimeout(function(){
		a.style.display = 'none';
	}, 500);
	setTimeout(function(){
		document.querySelector('#q23').style.display = 'block';
	}, 500);
  var correctCards = 0;
  $( init );
};

// Reinicia o Jogo
function reiniciarJogo(){
  var a = document.querySelector('#q33');
  a.style.display = 'none';
  document.querySelector('#q22').style.display = 'block';
};

//THE GAME 
function init() {
 
  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
 
  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );
 
  // Create the pile of shuffled cards
  var numbers = [ 'Resposta1', 'Resposta2', 'Resposta3', 'Resposta4' ];
  numbers.sort( function() { return Math.random() - .5 } );
 
  for ( var i=0; i<4; i++ ) {
    $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }
 
  // Create the card slots
  var words = [ 'Solte aqui a resposta certa!' ];
  for ( var i=1; i<=1; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }
}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );
 
  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again
 
  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards = 1;
  } 
   
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go
 
  if ( correctCards == 1 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }
}

// ESTRUTURA QUE IDEALIZEI

// Reconhece Valores para slotNumber e cardNumber e fazer o teste abaixo para cada questão!
if (slotNumber == cardNumber){
    document.querySelector('#shadow-correto23').style.display = 'block';
    document.querySelector('#correto23 span').innerHTML = 'Afirmação do acerto!';
    correctCards++;
}
else{
    document.querySelector('#shadow-incorreto23').style.display = 'block';
    document.querySelector('#incorreto23 span').innerHTML = 'Breve explicação!';
}

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