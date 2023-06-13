import './App.css';
import Categories from './categories.js';
import {useState, useEffect} from 'react';
import GamePhase2 from './gamephase2';
import { motion } from "framer-motion"
import Card from 'react-bootstrap/Card';
import AnimatedBg from 'react-animated-bg'
import './GP2.css'




function App() {
  const [categoryId, setCategoryId] = useState(0);

  return (
    
    <div className='all'>
    { categoryId ? <GamePhase2 categoryId={categoryId}/> : 
    <Categories setCategoryId={setCategoryId}/>}
    </div>
    
  );
}

export default App;