import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

function GamePhase2({categoryId}){

    const [questions, setQuestions] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    let score = useRef(0)
    let question = useRef(0)
    const answers = useRef(null)

    useEffect(() => {
        console.log('useEffect runs')
        const URL = `https://opentdb.com/api.php?amount=10&category=${categoryId}`
        axios.get(URL).then((response) => {
            // console.log(response.data)               
            setQuestions(response.data)
            score.current = 0
            let correctAnswer = response.data.results[0].correct_answer
            console.log(correctAnswer)
            let wrongAnswers = response.data.results[0].incorrect_answers
            console.log(wrongAnswers)
            answers.current = [...wrongAnswers, correctAnswer]
            console.log(answers.current)
        })
            }, [])

            // function shuffle(array) {
            //     let currentIndex = array.length,  randomIndex;
              
            //     // While there remain elements to shuffle.
            //     while (currentIndex != 0) {
              
            //       // Pick a remaining element.
            //       randomIndex = Math.floor(Math.random() * currentIndex);
            //       currentIndex--;
              
            //       // And swap it with the current element.
            //       [array[currentIndex], array[randomIndex]] = [
            //         array[randomIndex], array[currentIndex]];
            //     }
              
            //     return array;
            //   }

            //   shuffle(answers.current)
            //     console.log(answers.current)
                
                
                function handleClick(correctAnswer) {
                    console.log(question.correct_answer)
                    console.log(question.correctAnswer)
                    if (question.correct_answer === question.correctAnswer) {
                    score.current += 1
                    setCurrentQuestion(setCurrentQuestion => setCurrentQuestion+1)
                    } else {
                        alert('wrong!') }
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
            {questions && answers.current.map((answer) => <li><button onClick={handleClick}>{answer}</button></li>)}
        </div>
        </>

)}

export default GamePhase2