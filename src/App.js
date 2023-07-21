import { useState } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showParaghraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParaghraph) => !prevShowParaghraph);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParaghraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
