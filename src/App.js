import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

const apiName = "amplifyrestdemo";
const path = "customers"

function App() {
  let [response, setResponse] = useState("");

  useEffect(() => {
    API.get(apiName, `/${path}/1`)
      .then(response => {
        setResponse(response);
      }).catch(err => {
        console.log(err);
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>{JSON.stringify(response, null, 2)}</div>
      </header>
    </div>
  );
}

export default App;
