import React, {useState, useEffect} from 'react'
import axios from "axios";

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
    <div className='quote'>
        {quote}
        {author}
    </div>
    </>
}

export default Quotes;