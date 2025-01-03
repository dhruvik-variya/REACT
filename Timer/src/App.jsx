import { useState } from 'react'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Timer/>
    </div>
  )
}

export default App
