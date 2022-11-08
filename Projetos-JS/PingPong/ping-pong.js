window.onload = function () {
	setInterval(executar, 1000 / 30);
};

var folhaDesenho = document.getElementById('folha');
var areaDesenho = folhaDesenho.getContext('2d');

var larguraCampo = 600;
var alturaCampo = 500;
var espessuraRede = 5;

var diametroBola = 10;

var espessuraRaquete = 11;
var alturaRaquete = 100;

var efeitoRaquete = 0.8;
var velocidadeJogador2 = 20;

var posicaoJogador1 = (posicaoJogador2 = 10);
var posicaoBolaX = (posicaoBolaY = 10);
var velocidadeBolaPosicaoX = (velocidadeBolaPosicaoY = 5);
var pontuacaoJogador1 = (pontuacaoJogador2 = 0);

folhaDesenho.addEventListener('mousemove', function (e) {
	posicaoJogador1 = e.clientY - alturaRaquete / 2;
});

function executar() {
	areaDesenho.fillStyle = '#286047';
	areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

	areaDesenho.fillStyle = '#ffffff';

	// Linha
	areaDesenho.fillRect(
		larguraCampo / 2 - espessuraRede / 2,
		0,
		espessuraRede,
		alturaCampo,
	);

	// Desenha a bola
	areaDesenho.fillRect(
		posicaoBolaX - diametroBola / 2,
		posicaoBolaY - diametroBola / 2,
		diametroBola,
		diametroBola,
	);

	// Raquetes
	areaDesenho.fillRect(
		0,
		posicaoJogador1,
		espessuraRaquete,
		alturaRaquete,
	);
	areaDesenho.fillRect(
		larguraCampo - espessuraRaquete,
		posicaoJogador2,
		espessuraRaquete,
		alturaRaquete,
	);

	areaDesenho.fillText(
		'Humano - ' + pontuacaoJogador1 + ' pontos',
		100,
		100,
	);
	areaDesenho.fillText(
		'Computador - ' + pontuacaoJogador2 + ' pontos',
		larguraCampo - 200,
		100,
	);

	posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
	posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;

	// Verifica a lateral superior
	if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
		velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
	}

	// Verifica a lateral inferior
	if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
		velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
	}

	// Verifica se o Jogador 2 fez um ponto
	if (posicaoBolaX < 0) {
		if (
			posicaoBolaY > posicaoJogador1 &&
			posicaoBolaY < posicaoJogador1 + alturaRaquete
		) {
			// Rebate a bola
			velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

			var diferencaY =
				posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
			velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
		} else {
			// Pontos do Jogador 2
			pontuacaoJogador2 = pontuacaoJogador2 + 1;
			// Colocar no centro
			posicaoBolaX = larguraCampo / 2;
			posicaoBolaY = alturaCampo / 2;
			velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
			velocidadeBolaPosicaoY = 3;
		}
	}

	// Verifica se o Jogador 1 fez um ponto
	if (posicaoBolaX > larguraCampo) {
		if (
			posicaoBolaY > posicaoJogador2 &&
			posicaoBolaY < posicaoJogador2 + alturaRaquete
		) {
			velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

			var diferencaY =
				posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
			velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
		} else {
			// Pontos do Jogador 1
			pontuacaoJogador1 = pontuacaoJogador1 + 1;
			// Colocar no centro
			posicaoBolaX = larguraCampo / 2;
			posicaoBolaY = alturaCampo / 2;
			velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
			velocidadeBolaPosicaoY = 3;
		}
	}

	// Atualiza a posição Jogador 2
	if (posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
		posicaoJogador2 = posicaoJogador2 + velocidadeJogador2;
	} else {
		posicaoJogador2 = posicaoJogador2 - velocidadeJogador2;
	}
}