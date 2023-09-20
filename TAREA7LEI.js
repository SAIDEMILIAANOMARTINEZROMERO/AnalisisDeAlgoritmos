//Gregory-Leibniz

function Pi(aprox) {
    let piAproximado = 0;
    for (let i = 0; i < aprox; i++) {
      piAproximado += 4 * Math.pow(-1, i) / (2 * i + 1);
    }
    return piAproximado;
  }
  
  const aprox = 100; // Aqui se aguistan en nivel de aporximacion que desees de pi entre mas 0 mas aproximado sera 
  const AproxDePi = Pi(aprox);
  console.log("Valor aproximado es "+ AproxDePi);
  