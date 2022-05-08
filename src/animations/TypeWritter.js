import React, { useEffect, useState } from "react";
import '../styles/typeWritter.css';

function TypeWritter() {
  const [string, setString] = useState('');

  useEffect(() => {
    let phase = 'Hello, I am Rfontt';
    const array = phase.split('');
    
    array.forEach((element, index) => {
      phase = '';

      setTimeout(() => {
        phase += element

        setString(phase)
      }, 75 * index)
    });

  }, []);

  return (
    <div className="TypeWritter">
      <header className="TypeWritter-header">
        <h1 className="title">{string}</h1>
        <h1 className="pipe">|</h1>
      </header>
    </div>
  );
}

export default TypeWritter;
