function retardo (ms){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("El tiempo a esperar a sido cumplido")
        }, ms);
    });
}

retardo(3000).then(() => alert("Se ejecuta después de 3 segundos"));