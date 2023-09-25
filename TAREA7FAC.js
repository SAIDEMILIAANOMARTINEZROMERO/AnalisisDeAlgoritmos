// FACTORIAL con RECURSIVIDAD

const num = 11 //este es el numero al que se le saca el factorial 

function fac(num){
    if (num <= 1){
        return 1
    }
    else{
        return num * fac(num - 1) // 11 x 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1
    }
}

console.log("El factorial de tu numero es " + fac(num))