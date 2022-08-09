import React, {useState, useEffect} from 'react'
import axios from "axios";
import './styles.css'

const Quotes = () =>{

const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");

const quoteAPI= async () => {
    let arrayOfQuotes = [];
    try{
        const data = await axios.get("https://api.quotable.io/random");
        arrayOfQuotes = data.data
    }catch (error){
        console.log(error);
    }

    try{
        setQuote(arrayOfQuotes.content)
        setAuthor(arrayOfQuotes.author)
    }catch (error){
        console.log(error);
    }
};

useEffect(() => {
    quoteAPI();
},[]);


    return <>
    <div className='typewriter'>
     <h1 className="animatedTitle" data-testid="title">Today's quote...</h1>
    <div className='quote' data-testid="quotes">
        {quote}</div>
        <div className='author'>{author}</div>
        </div>
    </>
}

export default Quotes;