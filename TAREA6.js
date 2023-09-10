
const Q = [] //areglo aleatrorio
    const arrayLength = 10;
    const minRandomValue = 0;
    const maxRandomValue = 100;

//momento en el que llena solo el aarreglo

let i = 0;

for (let i = 0; i<arrayLength; i++){
    const randomValue = Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1)) + minRandomValue;
    Q.push(randomValue);
} 


//funcion
    let suma = 0
    for(let i = 0; i<arrayLength;i++){
        suma = suma + Q[i]
    }

// mostrar al usuario
console.log("El Array Generado: " , Q)
console.log("La Suma es: " + suma)
console.log("El Proemdio es: "+  suma/arrayLength)
    
 
