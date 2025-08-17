import React, { useEffect, useState } from "react";

//icono fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

//Inicia secons en 0
const SimpleCounter = () => {
    const [seconds, setSeconds] = useState(0);

//useEffect aumenta los numeros
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((ulau) => {
                //intento de dividir los decimales
                const firstNumber = ulau + 1;
                return firstNumber;
            });            
        }, 1000);
        return () => clearInterval(timer)
    }, []);

    //cada variable muestra seconds en un respectivo orden.
    const miles = Math.floor(seconds / 1000) % 10;
    const centenas = Math.floor(seconds / 100) % 10;
    const decenas = Math.floor(seconds / 10) % 10;
    const unidades = seconds % 10;

return (
    <div className="bigCounter">
        <div className="calendar">
            <FontAwesomeIcon icon={faClock}/>
        </div>
        <div>{miles}</div>
        <div>{centenas}</div>
        <div>{decenas}</div>
        <div>{unidades}</div>
        
    </div>
);};

export default SimpleCounter;