import {useState, useEffect} from 'react';
import axios from 'axios';
import Categories from './categories';

function GamePhase1(){
    const [question, setQuestion] = useState(null)

    useEffect(() => {
        console.log('useEffect runs')
        // const URL = `https://opentdb.com/api_count.php?category=${trivia_categories.id}`
        axios.get(URL).then((response) => setQuestion(response.data))

    }, [])
    
    return (
        <>
        <h3>
            Question: 
        </h3>
        <div>
            {question && (question.results.map(result => <div>{result.question}</div>))}
        </div>
        </>
    )
}

export default GamePhase1;