import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    const heightInMeters = height / 100;  // assumindo que a altura seja inserida em centímetros pelo usuário
    const imcValue = weight / (heightInMeters * heightInMeters);
    setImc(imcValue.toFixed(2));
    classifyIMC(imcValue);
  };

  const classifyIMC = (imcValue) => {
    if (imcValue < 18.5) {
      setClassification('Underweight');
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      setClassification('Normal weight');
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      setClassification('Overweight');
    } else {
      setClassification('Obesity');
    }
  };

  return (
    <div className="App">
      <h1>Calculate Your IMC</h1>
      <div>
        <label>
          Height (cm):
          <input 
            type="number"
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="Height in cm" 
          />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input 
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Weight in kg" 
          />
        </label>
      </div>
      <button onClick={calculateIMC}>Calculate IMC</button>
      {imc && (
        <div>
          <h2>IMC: {imc}</h2>
          <p>Classification: {classification}</p>
        </div>
      )}
    </div>
  );
}

export default App;
