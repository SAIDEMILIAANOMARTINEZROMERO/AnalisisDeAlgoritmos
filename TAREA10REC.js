//Busqueda Binaria Recursividad

function BusquedaBin(arr, item){

    function Rec (min, max){

    if (min > max){
        let NoEncontrado = ":("
        return NoEncontrado
    }
        let medio = Math.floor(min + max)/2

        if(arr[medio] === item){
            return medio
        }

            if (arr[medio]> item){
                return Rec(min, medio - 1)
            }

            return Rec(medio+1, max)

    }

    return Rec(0, arr.length - 1)
}

console.log("El Valor Buscado esta en la posicion: " + BusquedaBin([1,2,3,4,6,8,9], 8))
console.log("Lo Sentimos pero el Numero buscado no se encuentra " + BusquedaBin([1,2,3,4,6,8,9], 7))