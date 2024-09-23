import { useState } from 'react'
import Root from "./pages/Root"
import { Route,BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Root/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
