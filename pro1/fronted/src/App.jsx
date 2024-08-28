import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes").
    then((res)=>{
      setJokes(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
  })

  return (
    <>
      <h1>Backend</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke,index)=>(
            <div key={joke.id}>
                <h1>{joke.name}</h1>
                <p>{joke.joke}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
