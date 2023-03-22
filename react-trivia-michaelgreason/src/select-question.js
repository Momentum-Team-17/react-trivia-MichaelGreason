import {useState, useEffect} from 'react';
import axios from 'axios';

function Play({selectQuestion, categoryId, question}) {
    const [quiz, setQuiz] = useState(null)

    useEffect((selectQuestion) => {
        console.log('useEffect runs')
        const URL = `https://opentdb.com/api.php?amount=10&category=${categoryId}`
        axios.get(URL).then((response) => { 
                console.log(response.data)
             setQuiz(response.data)}) }, [])

    return (
        <>
        <h1>Play</h1>
        <div>{selectQuestion}</div>
        </>
    )
}

export default Play