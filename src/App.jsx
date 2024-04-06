import './App.css'
import {BrowserRouter as Router, Route }from 'react-router-dom';
import Join from "./component/Join/Join"
const ENDPOINT ='http://localhost:4500/'
const socket = socketIO(ENDPOINT, {transports:['websocket']})
function App() {
 
 
 
  return (
    <>
    <Router>
      <Route path="/" component={}  />
    </Router>
      </>
  )
}

export default App
