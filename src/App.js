import { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParaghraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParaghraph) => !prevShowParaghraph);
    }
  }, [allowToggle]);

  const allowToggleHandle = () => {
    setAllowToggle(true);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParaghraph} />
      <Button onClick={allowToggleHandle}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
