import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import he from 'he'
import Categories from './categories';

function GamePhase2({categoryId}){

    const [questions, setQuestions] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    let score = useRef(0)
    let question = useRef(0)

    useEffect(() => {
        console.log('useEffect runs')
        const URL = `https://opentdb.com/api.php?amount=50&category=${categoryId}`
        axios.get(URL).then((response) => {           
            setQuestions(response.data)
            score.current = 0
        })
            }, [])
                
                
                function handleClick(selectedAnswer) {
                    console.log(question.correct_answer)
                    console.log(selectedAnswer)                 
                    if (question.correct_answer === selectedAnswer.target.innerText) {
                    score.current += 1
                    setCurrentQuestion(currentQuestion => currentQuestion+1)      
                    } else {
                        alert('wrong!') 
                        score.current -= 1
                        setCurrentQuestion(currentQuestion => currentQuestion+1)
                    }
                }

                function shuffle(answers) {
                    let currentIndex = answers.length,  randomIndex;
                  
                    // While there remain elements to shuffle.
                    while (currentIndex != 0) {
                  
                      // Pick a remaining element.
                      randomIndex = Math.floor(Math.random() * currentIndex);
                      currentIndex--;
                  
                      // And swap it with the current element.
                      [answers[currentIndex], answers[randomIndex]] = [
                        answers[randomIndex], answers[currentIndex]];
                    }
                  
                    return answers;
                  }

                


                
                let answers

                if (questions) { 
                    question = questions.results[currentQuestion] 
                    let correctAnswer = question.correct_answer
                    console.log(correctAnswer)
                    let incorrectAnswer = question.incorrect_answers
                    answers = shuffle([...incorrectAnswer, correctAnswer])
                    // console.log(answers)
                }

                if (score.current === 7) {
                    alert('YOU WIN!')
                    return <Categories />
                }

                if (score.current === -7) {
                    alert('YOU LOSE!')
                    return <Categories />
                }
                
                
                return (
                    
                <>
        
                <h1>
                    Question: 
                </h1>
                <h2>Score: {score.current}</h2>
        <div>
            {questions && <div>{question.question}</div>}
        </div>
        <div>
            {questions && answers.map((selectedAnswer) => <li><button onClick={handleClick}>{selectedAnswer}</button></li>)}
        </div>
        </>

)}

export default GamePhase2