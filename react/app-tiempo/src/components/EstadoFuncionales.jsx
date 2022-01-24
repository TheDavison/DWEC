import React, { useState, useEffect } from 'react';

const EstadoFuncionales = () => {
    //codigo funcional
    //crear un estado en reacta a través de componentes funcionales
    const[contador1,setContador1] = useState(0);
    const[contador2,setContador2] = useState(0);

    const handlerContador1 =(e) => {
        //return setContador1(contador1+=1);//funciona el 95%
        return setContador1((prevEstate)=>prevEstate+=1);
    }
    const handlerContador2 =(e) => {
        //return setContador1(contador1+=1);//funciona el 95%
        return setContador2((prevEstate)=>prevEstate+=1);
    }
    const handlerContador2Restar =(e) =>{
        return setContador2((prevEstate)=>prevEstate-=1);
    }

    //useEffect se utiliza par arealizar tareas que no tiene porqué pintar en el DOM element
    //useEffect(()=>{}, [])
    useEffect(()=>{
        console.log("Se ejecuta al inicio");
    })
    
    useEffect(()=>{
        console.log("Se ejecuta una sola vez al inicio");
    }, [])

    useEffect(()=>{
        console.log("Se ejecuta cuando modifiquemos el state de contador 1");
    }, [contador1])

    useEffect(()=>{
        console.log("Se ejecuta cuando modifiquemos el state de contador 2");
    }, [contador2])

    useEffect(()=>{
        console.log("Se ejecuta cuando modifiquemos el state de contador 1 o contador 2");
    }, [contador1, contador2])

    //[] -> significa que se va a ejecutar una sola vez

    // useEffect(()=>{
    //     console.log("Se ejecuta al inicio");
    // })

    return (
      //pintamos el componente
        <div>
            {console.log("pintando el componente")}
            <h1>Ciclo de vida</h1>
            <h2>Clicks contador 1: {contador1}</h2>
            <h2>Clicks contador 2: {contador2}</h2>
            <button onClick={handlerContador1}>Incrementar contador 1</button>
            <button onClick={handlerContador2}>Incrementar contador 2</button>
            <button onClick={handlerContador2Restar}>Decrementar contador 2</button>
        </div>
  );
};

export default EstadoFuncionales;