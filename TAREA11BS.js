//bubble sort

let lista = [10,8,3,7,5,2,6,9,4,1]

function burbu(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}

console.log("El Arreglo Desordenado es = [" + lista + "]")
console.log("El Arreglo Ordenado es = [" + burbu(lista) +"]")