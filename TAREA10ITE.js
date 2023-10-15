//Busqueda Binaria iterativa

function BusquedaBin(arr, item){

    let min = 0
    let max = arr.length -1

while (min <= max){
        let medio = Math.floor(min + max)/2
        let valorM = arr[medio]

            if (valorM === item){
                return medio
            }

                if (valorM > item) {
                    max = medio - 1
                }
                else{
                    min = medio + 1

                }
        }
    let NoEncontrado = ":("
    return NoEncontrado
}

console.log("El Valor Buscado esta en la posicion: " + BusquedaBin([1,2,3,4,6,8,9], 8))
console.log("Lo Sentimos pero el Numero buscado no se encuentra " + BusquedaBin([1,2,3,4,6,8,9], 7))