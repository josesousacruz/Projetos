import { useState } from 'react';
import './App.css';


const Topic = ({ title, count }) => {
  const [votes, setVotes] = useState(count)

  const adicionarVoto = () => {

    setVotes(votes + 1)

    console.log({ votes })

  }

  return <div> {title} ({votes}) <button onClick={adicionarVoto}>+1</button></div>

}

function App() {

  return (
    <>
      <Topic title="PHP" count={0} />
      <Topic title="Java" count={0} />
      <Topic title="C++" count={0} />

    </>
  )
}

export default App;
