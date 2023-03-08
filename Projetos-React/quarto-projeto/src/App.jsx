import './App.css'
import Topic from './components/Topic'
import Header  from './components/Header'

  
function App() {

  return (
    <>
      <Header/>

      <Topic title="PHP" count={0} />
      <Topic title="Java" count={0} />
      <Topic title="C++" count={0} />



    </>
  )
}


export default App



