function obtenerNumero(numeroMaximo = 10, numeroEsperado = 5, retardo = 3000){
    let numero = Math.round(Math.random()*numeroMaximo);

    return new Promise((resolve, reject) => {
        if(numeroEsperado > numero){
            setTimeout(() => {
                reject(`El número esperado es mayor al número aleatorio, que es: ${numero}`);
            }, retardo);
        }else{
            setTimeout(() => {
                resolve(`El número esperado es menor que el número aleatorio, que es: ${numero}`);
            }, retardo);
        }
    })       
}

obtenerNumero(10, 5, 1000)
    .then(console.log)
    .catch(console.log);