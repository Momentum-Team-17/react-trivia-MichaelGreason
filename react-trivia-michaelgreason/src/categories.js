import {useState, useEffect} from 'react';
import axios from 'axios';
import GamePhase1 from './gamephase1';

function Categories() {
    const [categories, setCategories] = useState(null)
    let categoryId = categories.trivia_categoriesindexOf()
    useEffect(() => {
        console.log('useEffect runs')
        const URL = 'https://opentdb.com/api_category.php'
        axios.get(URL).then((response) => setCategories(response.data))
    }, [])

    return (
        <>
        <h1>PICK A CATEGORY</h1>
        <h3>If. You. Dare.</h3>
        <div>
            {categories && categories.trivia_categories.map(category => <li>
                <button onClick={() => {categoryId(category.id)}}>{category.name}</button>
                </li>)}
        </div>
        </>
    )
}

export default Categories;
