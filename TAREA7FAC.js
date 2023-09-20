// FACTORIAL

const num = 10 //este es el numero al que se le saca el factorial 
console.log("El factorial de tu numero es " + fac(num))
function fac(num){
    if (num <= 1){
        return 1
    }
    else{
        return num * fac(num - 1)
    }
}