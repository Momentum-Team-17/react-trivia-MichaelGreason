import {useState, useEffect} from 'react';
import axios from 'axios';
import Play from './select-question.js'


function GamePhase1({categoryId}){
    const [question, setQuestion] = useState(null)
    const [selectQuestion, setSelectQuestion] = useState(null)

    useEffect(() => {
        console.log('useEffect runs')
        const URL = `https://opentdb.com/api.php?amount=10&category=${categoryId}`
        axios.get(URL).then((response) => { 
                console.log(response.data)
             setQuestion(response.data)}) }, [])
        
    
    return (
        
        <>
        
        <h3>
            Question: 
        </h3>
        <div>
            {question && (question.results.map((result, ind) => <li key={ind}><button onClick={() => setSelectQuestion(result.question)}>{result.question}</button></li>))}
        </div>
        {selectQuestion && <Play selectQuestion={selectQuestion} question={question}/>}
        </>
        
    )
}

export default GamePhase1;