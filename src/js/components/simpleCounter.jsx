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

return (
    <div className="bigCounter">
        <div className="calendar">
            <FontAwesomeIcon icon={faClock}/>
        </div>
        <div className="four">{seconds}</div>
        
    </div>
);};

export default SimpleCounter;