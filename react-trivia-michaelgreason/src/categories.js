import {useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Accordion, Button, Fade } from 'react-bootstrap';
import { motion } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css'
import './GP2.css'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { animate, stagger } from "framer-motion"



function Categories({setCategoryId}) {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        console.log('useEffect runs')
        const URL = 'https://opentdb.com/api_category.php'
        axios.get(URL).then((response) => setCategories(response.data))
    }, [])

    const [open, setOpen] = useState(false);

    return (
        <>
        <div className='all'>
        <div className='title'>
        <h1>BRAIN TUG-OF-WAR</h1>
        </div>
        <Card className='instruction-card' style={{ width:'40rem'}}>
            <Card.Header><h2>Instructions</h2></Card.Header>
                <Card.Body><h3>Welcome to Brain Tug-Of-War! Select a category <br></br>to begin answering questions. For each correct answer selected, 
            you will recieve 1 point added to your total score. For each incorrect answer selected, 1 point will be deducted from your total score. 
            If you accumulate +7 points, you win! If you fall down to -7 points... YOU LOSE!</h3>
            </Card.Body>
        <h3>Have fun playing Brain Tug-Of-War! 🤖</h3>
        </Card>
       <div className='start' >
        <Button size='lg' variant="outline-primary" onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}>Start</Button>
        </div>
        <Fade in={open}>
        <Accordion className='cc'>
        <Accordion.Item eventKey="1">
        <AccordionHeader><h2>Choose Category</h2></AccordionHeader>
        <AccordionBody className='categories'>
        <div className='cca'>
            {/* <motion.div animate={{stagger}}> */}
            {categories && categories.trivia_categories.map((category, ind) => <span key={ind}>
                <Button variant='outline-info' size='lg' onClick={() => setCategoryId(category.id)}>{category.name}</Button>
                </span>)}
                {/* </motion.div> */}
        </div>
        </AccordionBody>
        </Accordion.Item>
        </Accordion>
        </Fade>
        </div>
        </>
    )
}

export default Categories;