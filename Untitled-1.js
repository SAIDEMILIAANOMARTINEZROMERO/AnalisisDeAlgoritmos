
const A = [];
    const arrayLength = 10; // Cambia la longitud del arreglo según lo que se requiera
    const minRandomValue = -50; // Valor mínimo para los números aleatorios
    const maxRandomValue = 50; // Valor máximo para los números aleatorios

    // Llenar el arreglo automáticamente con valores aleatorios
    for (let i = 0; i < arrayLength; i++) {
        const randomValue = Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1)) + minRandomValue;
        A.push(randomValue);
    }

    let buscador = null;
    let i = 0;

    while (i < A.length) {
        if (buscador === null || A[i] < buscador) {
            buscador = A[i];
        }
        i++;
    }

    console.log("El numero mas chico es:", buscador);
    console.log("Array Generado:", A);