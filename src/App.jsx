import { useState } from 'react'
import Header from './Components/header/Header'
import Date from './Components/Date/Date'



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
