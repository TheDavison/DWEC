function cambiarFondo(){
    return new Promise((resolve, reject)=>{
        setTimeout( () => {
            document.querySelector("body").style.backgroundColor = "lightblue"
            resolve("Fondo cambiado de color correctamente")
        }, 3000);
    })
}

cambiarFondo().then(console.log);

