import axios from 'axios';
import { useState , useEffect } from 'react';

export default function QuotesTest() {
  const[Quotes , setQuotes] = useState("");
  const[Author , setAuthor] = useState("");

  const QuotesApi = async () => {
    try{
        const data = await axios.get("https://api.quotable.io/random");
    
        setQuotes(data.data.content);
        setAuthor(data.data.author);

    }catch(error){
        console.log(error);
    }
  }

  useEffect(() => {
    QuotesApi();
  } , []);
  

  return(
    <>
      <h1>{Quotes}</h1>
      <h2>{Author}</h2>
      <button onClick={QuotesApi}>Quotes</button>
    </>
  );
}