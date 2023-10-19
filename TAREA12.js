// Secuencia Decendente

function SecDes(numero){
    if (numero >= 0){
        console.log(numero)
        SecDes(numero - 1)
    }
}

SecDes(9)// introduce qualquier numero