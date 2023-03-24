import {useState, useEffect} from 'react';
import axios from 'axios';


function Categories({setCategoryId}) {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        console.log('useEffect runs')
        const URL = 'https://opentdb.com/api_category.php'
        axios.get(URL).then((response) => setCategories(response.data))
    }, [])

    return (
        <>
        <h1>BRAIN TUG-OF-WAR</h1>
        <h2>Instructions:</h2>
        <h3>Welcome to Brain Tug-Of-War! Select a category to begin answering questions. For each correct answer selected, 
            you will recieve 1 point added to your total score. For each incorrect answer selected, 1 point will be deducted from your total score. 
            If you accumulate +7 points, you win! If you fall down to -7 points... YOU LOSE!</h3>
        <h3>Have fun playing Brain Tug-Of-War!</h3>
        <h2>Choose Category</h2>
        <div>
            {categories && categories.trivia_categories.map((category, ind) => <li key={ind}>
                <button onClick={() => setCategoryId(category.id)}>{category.name}</button>
                </li>)}
                
        </div>
        </>
    )
}

export default Categories;