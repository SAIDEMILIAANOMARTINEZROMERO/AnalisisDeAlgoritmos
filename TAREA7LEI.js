//Gregory-Leibniz con ITERACIONES


function prueba(num){
  let pi = 0
  let denominador = 1
  let signo = 1 // alterna entre 1 y -1
    for(let i = 0; i<num; i++){
      pi = pi + (signo * 4) / denominador
      denominador = denominador + (2)
      signo = signo * (-1)
    }     
   return pi 
}
const numiteraciones = 1000 // Aqui se aguistan en nivel de aporximacion que desees de pi entre mas 0 mas aproximado sera 
const aproximacion = prueba(numiteraciones)
console.log("Numero de iteraciones:", numiteraciones)
console.log("La aproximacion de pi es: ", aproximacion)


/*

//Gregory-Leibniz con sin SIN ITERACIONES

function Pi(aprox) {
    let piAproximado = 0;
    for (let i = 0; i < aprox; i++) {
      piAproximado += 4 * Math.pow(-1, i) / (2 * i + 1);
    }
    return piAproximado;
  }
  
  const aprox = 100; 
  const AproxDePi = Pi(aprox);
  console.log("Valor aproximado es "+ AproxDePi);
  */
  

 