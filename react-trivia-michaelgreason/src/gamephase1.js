import {useState, useEffect, useRef} from 'react';
import axios from 'axios';


function GamePhase1({categoryId}){
    const [questions, setQuestions] = useState(null)
    let currentQuestion = useRef(0)
    const answers = useRef(null)
    let score = useRef(0)
    let answerList = useRef(null)

    
    useEffect(() => {
        const URL = `https://opentdb.com/api.php?amount=10&category=${categoryId}`
        axios.get(URL).then((response) => { 
            
            setQuestions(response.data)
            currentQuestion.current = response.data.results[0].question          
            score.current = 0
            let correctAnswer = response.data.results[0].correct_answer
            console.log(correctAnswer)
            let wrongAnswers = response.data.results[0].incorrect_answers
            answers.current = [...wrongAnswers, correctAnswer]
            console.log(answers.current)
            
            const answerArray = answers.current
            console.log(answerArray)
            answerList.current = answerArray.map((answer, index) => {
                return <ul key={index}><button onClick={() => handleClick(answer)}>{answer}</button></ul>
            })
        })
        
    }, [])
            
            function handleClick() {
                   score.current += 1
                }
            
            // function handleCorrect() {
            //     score.current += 1
            //     currentQuestion(setCurrentQuestion => setCurrentQuestion+1)
            // }

    return (
        
        <>
        
        <h3>
            Question: 
        </h3>
        <h2>Score: {score.current}</h2>
        <div>
            {currentQuestion.current}
        </div>
        <div>
           {answerList.current}
        </div>
        
        </>
        
    )
}

export default GamePhase1;