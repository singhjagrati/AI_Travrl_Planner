import { useState } from 'react';
import './App.css';
import Button from "./components/ui/Button";
import CreateTrip from './create-trip/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/ui/custom/Hero'; // ✅ only keep the correct one

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Hero */}
      <Hero />
    </div>
  );
}

export default App;

