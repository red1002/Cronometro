const cronometro = document.getElementById('cronometro');
const boton = document.getElementById('boton');
const reset = document.getElementById('reset');

let [horas, minutos, segundos] = [0, 0, 0];
let estadoDelCronometro = 'pausado';
let intervaloDeTiempo;

function formato(UnidadDeTiempo){
	return UnidadDeTiempo < 10 ? '0' + UnidadDeTiempo : UnidadDeTiempo
}

function actualizarCronometro(){
	segundos++;

	if (segundos / 60 === 1){
		segundos = 0;
		minutos++;

		if (minutos / 60 === 1) {
			minutos = 0;
			horas++;
		}
	}

	let horasConFormato = formato(horas);
	let minutosConFormato = formato(minutos);
	let segundosConFormato = formato(segundos);

	cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

boton.addEventListener('click', function(){
	if (estadoDelCronometro === 'pausado') {
		intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
		boton.innerHTML = '<i class="bi bi-pause-fill"></i>';
		boton.classList.remove('play');
		boton.classList.add('pause');
		estadoDelCronometro = 'activo';
	}else{
		window.clearInterval(intervaloDeTiempo);
		boton.innerHTML = '<i class="bi bi-play-fill"></i>';
		boton.classList.remove('pause');
		boton.classList.add('play');
		estadoDelCronometro = 'pausado';
	}
})

reset.addEventListener('click', function()  {
	
	window.clearInterval(intervaloDeTiempo);

	horas = 0;
	minutos = 0;
	segundos = 0;

	cronometro.innerText = '00:00:00';

	boton.innerHTML = '<i class="bi bi-play-fill"></i>';
	boton.classList.remove('pause');
	boton.classList.add('play');

	estadoDelCronometro = 'pausado';
})

alert('Si esta en dispositivo movil, pongalo en horizontal')