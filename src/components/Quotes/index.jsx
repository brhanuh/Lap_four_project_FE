import React, {useState, useEffect} from 'react'

const Quotes = () =>{

const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");


    return <>
    <div className='quote'>
        <h2>New Quote:</h2>
        <button>Generate new quote</button>

    </div>
    
    </>
}

export default Quotes;