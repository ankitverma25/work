import { useState } from 'react'
import Home from './component/Home'
import Youtube from './component/Youtube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Youtube/>
    </>
  )
}

export default App
