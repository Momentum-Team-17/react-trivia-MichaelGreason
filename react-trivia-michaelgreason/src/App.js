import './App.css';
import Categories from './categories.js';
import {useState, useEffect} from 'react';
import GamePhase1 from './gamephase1';
import GamePhase2 from './gamephase2';



function App() {
  const [categoryId, setCategoryId] = useState(0);

  return (
    <div>
    { categoryId ? <GamePhase2 categoryId={categoryId}/> : <Categories setCategoryId={setCategoryId}/>}
    </div>
  );
}

export default App;