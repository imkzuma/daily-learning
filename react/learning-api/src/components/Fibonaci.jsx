import { useState } from 'react';

export default function Fibonacci() {
  const[Index , setIndex] = useState(0);
  let arr = [];

  function ThisF(){
    let a = 0; let b = 1; let c;
    for(let i = 0; i < Index; i++){
      c = a + b;
      a = b;
      b = c;
      arr[i] = c;
    }
    return( arr.map(nais =>  <li key = {nais}>{nais}</li>) ); 
  }

  return (
    <>
      Masukkan Bilangan: <input type='text' onChange={e => setIndex(e.target.value)} />
      <p>Fibonaci:  <ThisF /></p>
    </>
  );
}


