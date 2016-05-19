// Declaração de variáveis
var ponto1=0;
var ponto2=0;
var ponto3=0;
var ponto4=0;
var ponto5=0;
var ponto6=0;
var ponto7=0;
var ponto8=0;
var ponto9=0;
var ponto10=0;
var ponto11=0;
var ponto12=0;
var ponto13=0;
var ponto14=0;
var ponto15=0;
var ponto16=0;
var ponto17=0;
var ponto18=0;
var ponto19=0;
var ponto20=0;
var nivel = 1;
var max_nivel = 20;
var questao = 0;

function ready(){
};
// Iniciar o jogo (ir da tela inicial pro primeiro exercício)
function reiniciarJogo(){
	var a = document.querySelector('#q21');
	a.style.display = 'none';
	document.querySelector('#q0').style.display = 'block';
};

function iniciarJogo(){
	var a = document.querySelector('#q0');
	a.style.display = 'none';
	document.querySelector('#q1').style.display = 'block';
};

function responder1(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder1("q1");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto1').style.display = 'block';
		document.querySelector('#correto1 span').innerHTML = 'Isso, o professor João é tão quadrado quanto uma caixa!';
		ponto1=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto1').style.display = 'block';
		document.querySelector('#incorreto1 span').innerHTML = 'Hum, errou! Acho que você não conhece o Joãozinho direito!';
		// Adicionar div de explicação
	}
};
function abrirq2(){
	document.querySelector('#q1').style.display = 'none';
	document.querySelector('#shadow-correto1').style.display = 'none';
	document.querySelector('#shadow-incorreto1').style.display = 'none';
	document.querySelector('#q2').style.display = 'block';
};

function responder2(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder2("q2");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto2').style.display = 'block';
		document.querySelector('#correto2 span').innerHTML = 'Isso mesmo, a aula é tudo isso e mais um pouco! Eeerg... (Mas o João é gente boa né!)';
		ponto2=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto2').style.display = 'block';
		document.querySelector('#incorreto2 span').innerHTML = 'Acho que não em! Pense um pouco mais. Já frequentou a aula de logística?';
		// Adicionar div de explicação
	}
};
function abrirq3(){
	document.querySelector('#q2').style.display = 'none';
	document.querySelector('#shadow-correto2').style.display = 'none';
	document.querySelector('#shadow-incorreto2').style.display = 'none';
	document.querySelector('#q3').style.display = 'block';
};

function responder3(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder3("q3");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto3').style.display = 'block';
		document.querySelector('#correto3 span').innerHTML = 'Afirmação do acerto!3';
		ponto3=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto3').style.display = 'block';
		document.querySelector('#incorreto3 span').innerHTML = 'Breve explicação!3';
		// Adicionar div de explicação
	}
};
function abrirq4(){
	document.querySelector('#q3').style.display = 'none';
	document.querySelector('#shadow-correto3').style.display = 'none';
	document.querySelector('#shadow-incorreto3').style.display = 'none';
	document.querySelector('#q4').style.display = 'block';
};

function responder4(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder4("q4");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto4').style.display = 'block';
		document.querySelector('#correto4 span').innerHTML = 'Afirmação do acerto!';
		ponto4=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto4').style.display = 'block';
		document.querySelector('#incorreto4 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq5(){
	document.querySelector('#q4').style.display = 'none';
	document.querySelector('#shadow-correto4').style.display = 'none';
	document.querySelector('#shadow-incorreto4').style.display = 'none';
	document.querySelector('#q5').style.display = 'block'
};

function responder5(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder5("q5");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto5').style.display = 'block';
		document.querySelector('#correto5 span').innerHTML = 'Afirmação do acerto!';
		ponto5=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto5').style.display = 'block';
		document.querySelector('#incorreto5 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq6(){
	document.querySelector('#q5').style.display = 'none';
	document.querySelector('#shadow-correto5').style.display = 'none';
	document.querySelector('#shadow-incorreto5').style.display = 'none';
	document.querySelector('#q6').style.display = 'block';
};

function responder6(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
  	for (i=0; i < rads.length; i++){
    	if (rads[i].checked){
          return rads[i].value;
    	}
   	};
	var checkedValue = responder6("q6");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto6').style.display = 'block';
		document.querySelector('#correto6 span').innerHTML = 'Afirmação do acerto!';
		ponto6=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto6').style.display = 'block';
		document.querySelector('#incorreto6 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq7(){
	document.querySelector('#q6').style.display = 'none';
	document.querySelector('#shadow-correto6').style.display = 'none';
	document.querySelector('#shadow-incorreto6').style.display = 'none';
	document.querySelector('#q7').style.display = 'block';
};

function responder7(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder7("q7");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto7').style.display = 'block';
		document.querySelector('#correto7 span').innerHTML = 'Afirmação do acerto!';
		ponto7=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto7').style.display = 'block';
		document.querySelector('#incorreto7 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq8(){
	document.querySelector('#q7').style.display = 'none';
	document.querySelector('#shadow-correto7').style.display = 'none';
	document.querySelector('#shadow-incorreto7').style.display = 'none';
	document.querySelector('#q8').style.display = 'block';
};

function responder8(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder8("q8");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto8').style.display = 'block';
		document.querySelector('#correto8 span').innerHTML = 'Afirmação do acerto!';
		ponto8=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto8').style.display = 'block';
		document.querySelector('#incorreto8 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq9(){
	document.querySelector('#q8').style.display = 'none';
	document.querySelector('#shadow-correto8').style.display = 'none';
	document.querySelector('#shadow-incorreto8').style.display = 'none';
	document.querySelector('#q9').style.display = 'block';
};

function responder9(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
		for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder9("q9");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto9').style.display = 'block';
		document.querySelector('#correto9 span').innerHTML = 'Afirmação do acerto!';
		ponto9=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto9').style.display = 'block';
		document.querySelector('#incorreto9 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq10(){
	document.querySelector('#q9').style.display = 'none';
	document.querySelector('#shadow-correto9').style.display = 'none';
	document.querySelector('#shadow-incorreto9').style.display = 'none';
	document.querySelector('#q10').style.display = 'block';
};

function responder10(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder10("q10");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto10').style.display = 'block';
		document.querySelector('#correto10 span').innerHTML = 'Afirmação do acerto!';
		ponto10=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto10').style.display = 'block';
		document.querySelector('#incorreto10 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq11(){
	document.querySelector('#q10').style.display = 'none';
	document.querySelector('#shadow-correto10').style.display = 'none';
	document.querySelector('#shadow-incorreto10').style.display = 'none';
	document.querySelector('#q11').style.display = 'block';
};

function responder11(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder11("q11");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto11').style.display = 'block';
		document.querySelector('#correto11 span').innerHTML = 'Afirmação do acerto!';
		ponto11=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto11').style.display = 'block';
		document.querySelector('#incorreto11 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq12(){
	document.querySelector('#q11').style.display = 'none';
	document.querySelector('#shadow-correto11').style.display = 'none';
	document.querySelector('#shadow-incorreto11').style.display = 'none';
	document.querySelector('#q12').style.display = 'block';
};

function responder12(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder12("q12");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto12').style.display = 'block';
		document.querySelector('#correto12 span').innerHTML = 'Afirmação do acerto!';
		ponto12=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto12').style.display = 'block';
		document.querySelector('#incorreto12 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq13(){
	document.querySelector('#q12').style.display = 'none';
	document.querySelector('#shadow-correto12').style.display = 'none';
	document.querySelector('#shadow-incorreto12').style.display = 'none';
	document.querySelector('#q13').style.display = 'block';
};

function responder13(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder13("q13");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto13').style.display = 'block';
		document.querySelector('#correto13 span').innerHTML = 'Afirmação do acerto!';
		ponto13=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto13').style.display = 'block';
		document.querySelector('#incorreto13 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq14(){
	document.querySelector('#q13').style.display = 'none';
	document.querySelector('#shadow-correto13').style.display = 'none';
	document.querySelector('#shadow-incorreto13').style.display = 'none';
	document.querySelector('#q14').style.display = 'block';
};

function responder14(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder14("q14");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto14').style.display = 'block';
		document.querySelector('#correto14 span').innerHTML = 'Afirmação do acerto!';
		ponto14=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto14').style.display = 'block';
		document.querySelector('#incorreto14 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq15(){
	document.querySelector('#q14').style.display = 'none';
	document.querySelector('#shadow-correto14').style.display = 'none';
	document.querySelector('#shadow-incorreto14').style.display = 'none';
	document.querySelector('#q15').style.display = 'block';
};

function responder15(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder15("q15");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto15').style.display = 'block';
		document.querySelector('#correto15 span').innerHTML = 'Afirmação do acerto!';
		ponto15=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto15').style.display = 'block';
		document.querySelector('#incorreto15 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq16(){
	document.querySelector('#q15').style.display = 'none';
	document.querySelector('#shadow-correto15').style.display = 'none';
	document.querySelector('#shadow-incorreto15').style.display = 'none';
	document.querySelector('#q16').style.display = 'block';
};

function responder16(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder16("q16");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto16').style.display = 'block';
		document.querySelector('#correto16 span').innerHTML = 'Afirmação do acerto!';
		ponto16=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto16').style.display = 'block';
		document.querySelector('#incorreto16 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq17(){
	document.querySelector('#q16').style.display = 'none';
	document.querySelector('#shadow-correto16').style.display = 'none';
	document.querySelector('#shadow-incorreto16').style.display = 'none';
	document.querySelector('#q17').style.display = 'block';
};

function responder17(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder17("q17");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto17').style.display = 'block';
		document.querySelector('#correto17 span').innerHTML = 'Afirmação do acerto!';
		ponto17=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto17').style.display = 'block';
		document.querySelector('#incorreto17 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq18(){
	document.querySelector('#q17').style.display = 'none';
	document.querySelector('#shadow-correto17').style.display = 'none';
	document.querySelector('#shadow-incorreto17').style.display = 'none';
	document.querySelector('#q18').style.display = 'block';
};

function responder18(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder18("q18");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto18').style.display = 'block';
		document.querySelector('#correto18 span').innerHTML = 'Afirmação do acerto!';
		ponto18=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto18').style.display = 'block';
		document.querySelector('#incorreto18 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq19(){
	document.querySelector('#q18').style.display = 'none';
	document.querySelector('#shadow-correto18').style.display = 'none';
	document.querySelector('#shadow-incorreto18').style.display = 'none';
	document.querySelector('#q19').style.display = 'block';
};

function responder19(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder19("q19");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto19').style.display = 'block';
		document.querySelector('#correto19 span').innerHTML = 'Afirmação do acerto!';
		ponto19=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto19').style.display = 'block';
		document.querySelector('#incorreto19 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirq20(){
	document.querySelector('#q19').style.display = 'none';
	document.querySelector('#shadow-correto19').style.display = 'none';
	document.querySelector('#shadow-incorreto19').style.display = 'none';
	document.querySelector('#q20').style.display = 'block';
};

function responder20(radioGroupName) {
	var rads = document.getElementsByName(radioGroupName), i;
	for (i=0; i < rads.length; i++){
		if (rads[i].checked){
	      return rads[i].value;
		}
	};
	var checkedValue = responder20("q20");
	if(checkedValue == 1){
		document.querySelector('#shadow-correto20').style.display = 'block';
		document.querySelector('#correto20 span').innerHTML = 'Afirmação do acerto!';
		ponto20=1;
	}
	else if(checkedValue == 0){
		document.querySelector('#shadow-incorreto20').style.display = 'block';
		document.querySelector('#incorreto20 span').innerHTML = 'Breve explicação!';
		// Adicionar div de explicação
	}
};
function abrirResultadoFinal(){
	var pontos=ponto1+ponto2+ponto3+ponto4+ponto5+ponto6+ponto7+ponto8+ponto9+ponto10+ponto11+ponto12+ponto13+ponto14+ponto15+ponto16+ponto17+ponto18+ponto19+ponto20;
	document.querySelector('#q20').style.display = 'none';
	document.querySelector('#shadow-correto20').style.display = 'none';
	document.querySelector('#shadow-incorreto20').style.display = 'none';
	document.querySelector('#q21').style.display = 'block';
	document.querySelector('#displayResultadoFinal').style.display = 'block';
	document.querySelector('#displayResultadoFinal span').innerHTML = 'Você acertou '+pontos+' perguntas de um total de 20!';
	
	
	if (pontos>15){
		document.querySelector('#joazinho').style.display = 'block';
		document.querySelector('#juvenil').style.display = 'none';
		document.querySelector('#bad').style.display = 'none';
	}
	else if(pontos>10){
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

function responder21() {
	document.querySelector('#shadow-correto21').style.display = 'block';
};