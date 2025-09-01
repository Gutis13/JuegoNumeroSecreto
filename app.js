let numeroSecreto = 0;
        let intentos = 0;
        let listaNumerosSorteados = []; 
        let numeroMaximo = 10;

        function asignarTextoElemento(elemento, texto) {
            let elementoHTML = document.querySelector(elemento);
            elementoHTML.innerHTML = texto;
        }

        function verificarIntento() {
            let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
            intentos++; // contar intento en cada clic

            if (numeroDeUsuario === numeroSecreto) {
                asignarTextoElemento('p',`🎉 Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                if (numeroDeUsuario > numeroSecreto) {
                    asignarTextoElemento('p','El número secreto es menor');
                } else {
                    asignarTextoElemento('p','El número secreto es mayor');
                }
                limpiarCaja();
            }
        }

        function limpiarCaja() {
            document.querySelector('#valorUsuario').value = '';
        }

        function generarNumeroSecreto() {
            let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

            if(listaNumerosSorteados.length == numeroMaximo){
                asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
            } else{
                if (listaNumerosSorteados.includes(numeroGenerado)){ 
                    return generarNumeroSecreto(); 
                } else { 
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }    
            }
        }

        function condicionesIniciales() {
            asignarTextoElemento('h1','Juego del número secreto!');
            asignarTextoElemento('p','Indica un número del 1 al 10');
            numeroSecreto = generarNumeroSecreto();
            intentos = 0; // reiniciar intentos en 0
            console.log("Número secreto:", numeroSecreto);
        }

        function reiniciarJuego() {
            limpiarCaja();
            condicionesIniciales();
            document.querySelector('#reiniciar').setAttribute('disabled','true');
        }

        condicionesIniciales();

