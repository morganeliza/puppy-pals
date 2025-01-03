import { puppyList } from './data.js'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}

      {featPupId && <p>{featPupId}</p>}
    </div>
  );
  {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
  {/* <h1>Vite + React</h1> */ }
  {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
}

export default App
