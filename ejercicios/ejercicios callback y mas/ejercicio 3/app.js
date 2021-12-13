function fechas(){
    let fecha = new Date().toLocaleDateString();

    return new Promise((resolve, reject) => {
        if(typeof Storage != undefined){
            resolve(localStorage.setItem("fecha", fecha));
        }else{
            reject("Has tocado algo y algo ha salido mal, ¿es que para que tocas?")
        }
    })
}

fechas()
    .then(console.log("Todo ha salido correctamente"))
    .catch(console.log);


//Si, es una promesa segura, siempre se va a ejecutar correctamente y entrar al resolve.
//Porque no hemos puesto una condición en la que vaya a entrar al reject.