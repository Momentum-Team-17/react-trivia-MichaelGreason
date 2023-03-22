import './App.css';
import Categories from './categories.js';
import {useState, useEffect} from 'react';
import GamePhase1 from './gamephase1';



function App() {
  const [categoryId, setCategoryId] = useState(0);

  return (
    <div>
    { categoryId ? <GamePhase1 categoryId={categoryId}/> : <Categories setCategoryId={setCategoryId}/>}
    </div>
  );
}

export default App;