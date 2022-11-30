import Header from './Header';
import BoxColor from './BoxColor';
import InputColor from './InputColor';
import ToggleButton from './ToggleButton';
import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className='App'>
      <Header />
      <BoxColor 
        color={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputColor 
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
      />
      <ToggleButton 
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
