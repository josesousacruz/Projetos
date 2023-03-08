import { useState } from 'react'
import '../App.css'


const Topic = ({ title, count }) => {
    const [votes, setVotes] = useState(count)
  
    const adicionarVoto = () => {
  
      setVotes(votes + 1)
  
      console.log({ votes })
  
    }
  
    return <div> {title} ({votes}) <button onClick={adicionarVoto}>+1</button></div>
  
  }

  export default Topic;