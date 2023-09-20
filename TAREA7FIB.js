
//FIBONACCI

const a = 15;// Aqui pones cuantas veces quieres que se ejecute la suma
const final = fib(a)
console.log("El Resultado de la suma ", final)

function fib(a){
    let PrimerNumero = 0;
    let SegundoNumero = 1;
    const solucion = [];

        for (let i = 0;i < a; i++){
            const TercerNumero = PrimerNumero + SegundoNumero;
            PrimerNumero = SegundoNumero;
            SegundoNumero = TercerNumero;
            solucion.push(TercerNumero);
        }
    return solucion;
}



