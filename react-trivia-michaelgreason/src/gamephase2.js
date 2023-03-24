import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import he from 'he'
import Categories from './categories';
import './GP2.css'
import { motion } from "framer-motion"
import Card from 'react-bootstrap/Card';


function GamePhase2({categoryId}){

    const [questions, setQuestions] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    let score = useRef(0)
    let question = useRef(0)
    const [remainingQuestions, setRemainingQuestions] = useState(0)

    useEffect(() => {
        console.log('useEffect runs')
        const URL = `https://opentdb.com/api.php?amount=41&category=${categoryId}`
        axios.get(URL).then((response) => {           
            setQuestions(response.data)
            score.current = 0
            setRemainingQuestions(response.data.results.length -1)
        })
            }, [])
                
                
                function handleClick(selectedAnswer) {
                    // console.log(question.correct_answer)
                    // console.log(selectedAnswer)                 
                    if (question.correct_answer === selectedAnswer.target.innerText) {
                    score.current += 1
                    setCurrentQuestion(currentQuestion => currentQuestion+1)   
                    setRemainingQuestions(remainingQuestions => remainingQuestions-1)   
                    } else {
                        alert(`Wrong! The correct answer was ${question.correct_answer}`) 
                        score.current -= 1
                        setCurrentQuestion(currentQuestion => currentQuestion+1)
                        setRemainingQuestions(remainingQuestions => remainingQuestions-1)
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
                    alert('SCORE = 7! YOU WIN!')
                    return <Categories />
                }

                if (score.current === -7) {
                    alert('SCORE = -7! YOU LOSE!')
                    return <Categories />
                }
                
                if (remainingQuestions === 0) {
                    alert('0 Questions left... STALEMATE!!!')
                    return <categories />
                }
                
                return (
                    
                <>
            <div className='GP2-heading'>
                <h2>Score: {score.current}</h2>
                <h2>Remaining questions: {remainingQuestions}</h2>
            </div>
                <h1>Question: </h1>
            <div className='q-a'>
                <div>
                    {questions && <div>{(he.decode(question.question))}</div>}
                </div>
                <div>
                    {questions && answers.map((selectedAnswer, ind) => <li key={ind}><button onClick={handleClick}>{(he.decode(selectedAnswer))}</button></li>)}
                </div>
            </div>
        </>

)}

export default GamePhase2