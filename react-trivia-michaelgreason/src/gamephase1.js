import {useState, useEffect, useRef} from 'react';
import axios from 'axios';


function GamePhase1({categoryId}){
    const [questions, setQuestions] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [allAnswers, setAllAnswers] = useState(null)
    let score = useRef(0)
    let question 
    
    useEffect(() => {
        console.log('useEffect runs')
        const URL = `https://opentdb.com/api.php?amount=10&category=${categoryId}`
        axios.get(URL).then((response) => { 
            console.log(response.data)               
            setQuestions(response.data)}) 
            score.current = 0
            // setAllAnswers = [question.incorrect_answers, ...question.incorrect_answers]
            // console.log(setAllAnswers)
            
            
            }, [])
            
            function handleCorrect() {
                score.current += 1
                setCurrentQuestion(setCurrentQuestion => setCurrentQuestion+1)
            }

            if (questions) question = questions.results[currentQuestion]
            console.log(question)
            
    return (
        
        <>
        
        <h3>
            Question: 
        </h3>
        <h2>{score.current}</h2>
        <div>
            {questions && <div>{question.question}</div>}
        </div>
        <div>
            {questions && <li><button onClick={handleCorrect}>{question.correct_answer}</button></li>}
            {questions && question.incorrect_answers.map((wrong) => <li><button>{wrong}</button></li>)}
        </div>
        
        </>
        
    )
}

export default GamePhase1;