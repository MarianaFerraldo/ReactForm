import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from "./components/Authenitcate"
import { useState } from 'react';

export function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");

  return (
    <div>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token}/>
    </div>
  );
}

export default App
