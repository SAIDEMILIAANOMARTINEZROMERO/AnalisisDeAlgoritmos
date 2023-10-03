//Contador de Vocales con TILDE

function VocalesConTilde(texto1){
    let tildeC = 0
    let vocalesT = ['á','é','í','ó','ú','Á','É','Í','Ó','Ú']

        for(let i = 0; i < texto1.length; i++){
            if(vocalesT.indexOf(texto1[i]) >= 0){
               tildeC += 1
            }
        }
    return tildeC
}

//Contador de Vocales sin TILDE

function VocalesSinTilde(texto2){
    let SinTildeC = 0
    let VocalesST = ['a','e','i','o','u','A','E','I','O','U']

        for(let i = 0; i < texto2.length; i++){
            if(VocalesST.indexOf(texto2[i]) >= 0){
                SinTildeC += 1
            }
        }
    return SinTildeC
}

console.log("El número de vocales con tilde son: " + VocalesConTilde('Hola mamá, ¿Comó está papá?'))
console.log("El número de vocales sin tilde son: " + VocalesSinTilde('Hola mamá, ¿Comó está papá?'))