import { useState } from 'react'
import Header from './Components/header/Header'
import Date from './Components/Date/Date'


// this is the app function
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Date/>

  

    
    </>
  )
}

export default App
