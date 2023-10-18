//Selection Sort 

let lista = [9,8,3,1,5,10,2,6,4,7]

function selection(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let chico = i
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[chico]){
                chico = j;
            }
        }
        [arr[i], arr[chico]] = [arr[chico], arr[i]]
    }
    return arr
}

console.log("El Arreglo Desordenado es = [" + lista + "]")
console.log("El Arreglo Ordenado es = [" + selection(lista) + "]")