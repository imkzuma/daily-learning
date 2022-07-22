import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function PokeApi() {
  const[Data , setData] = useState([]);
  const[userSelect , setUserSelect] = useState("");
  
  const Api = async () => {
    const Response = await axios.get("https://pokeapi.co/api/v2/berry/");
    const Results = Response.data.results.map(item => {
      return {
        value: item.name,
        label: item.name
      };
    }); setData(Results.sort((a, b) => a.value.localeCompare(b.value)));
  }
  useEffect(() => {
    Api();
  } , []);

  const handleChange = (Value) => {
    setUserSelect(Value);
  }
  
  return(
    <>
     <Select options = { Data } onChange = { (e) => handleChange(e.value) } />
     <h1>{userSelect}</h1>
    </>
  );
}