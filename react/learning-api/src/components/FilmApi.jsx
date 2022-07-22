import { useState , useEffect } from 'react';
import axios from 'axios';

export default function FilmApi() {
  const[Search , setSearch]     = useState("");
  const[Title , setTitle]       = useState("");
  const[Poster , setPoster]     = useState("");
  const[Released , setReleased] = useState("");
  const[Runtime , setRuntime]   = useState("");
  const[Genre , setGenre]       = useState("");
  const[Actor , setActor]       = useState("");
  const[Director , setDirector] = useState("");
  const[Plot , setPlot]         = useState("");

  const ApiKey = '6b967683';
  const Url = 'http://www.omdbapi.com/?';

  const OmdbApi = async () => {
    try {
      const response = await axios.get(Url + 't=' + Search + '&apikey=' + ApiKey + '&plot=full');
      setTitle(response.data.Title);
      setPoster(response.data.Poster);
      setReleased(response.data.Released);
      setRuntime(response.data.Runtime);
      setGenre(response.data.Genre);
      setActor(response.data.Actors);
      setDirector(response.data.Director);
      setPlot(response.data.Plot);
      
    }catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    OmdbApi();
  } , []);

  return(
    <>
      <input type = 'text' onChange = {e => setSearch(e.target.value)} />
      <input type = 'submit' onClick = {OmdbApi} value = 'submit' />
      
      <br></br>
      <img src = {Poster} alt = {Title} />
      <h1>{Title}</h1>
      <h2>{Director}</h2>
      <p>{Released}</p>
      <p>{Runtime}</p>
      <p>{Genre}</p>
      <p>{Actor}</p>
      <p>{Plot}</p>
    </>
  );
}