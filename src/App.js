import './App.css'
import React from 'react'
import Dropdown from './components/Dropdown'
import {useState, useEffect} from 'react'

function App() {

  const[stateArray, getStates] = useState([])

  useEffect(() => {
    fetch('/states')
    .then(response => response.json())
    .then(data => getStates(data))
  }, [])

  return (
    <div className="App">
        <Dropdown
          states={stateArray}
        />
    </div>
  )
}