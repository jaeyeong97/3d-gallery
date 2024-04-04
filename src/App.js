import { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Loading from './components/loading/Loading';
function App() {
  const [showMain, setShowMain] = useState(false);
  const [addStyle, setAddStyle] = useState(false);

  const handleDoorClick = () => {
    setTimeout(() => {
      setShowMain(!showMain);
    }, 2000)
    setAddStyle(!addStyle);
  };

  return (
    <>
      {!showMain && <Loading onClick={handleDoorClick} addStyle={addStyle} />}
      {showMain && (
        <div className="App">
          <Gallery />
        </div>
      )}
    </>
  );
}

export default App;
