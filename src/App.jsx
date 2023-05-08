import { useState } from 'react'
import MyComponent from './components/MyComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
    
        </a>
      </div>
      <h1 className='text-6xl text-blue-500'> Destructors </h1>
      <MyComponent/>
    </>
  )
}

export default App
