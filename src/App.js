import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import {Login} from './components/Login'
import {Logout} from './components/Logout';
import {Profile} from './components/Profile';
function App() {
  const {isLoading} = useAuth0();
  
  if(isLoading){
    return <div>I S L O A D I N G . . .</div>
  }

  return (
    <div className="App">
      <Login></Login>
      <Logout></Logout>
      <Profile></Profile>
    </div>
  );
}

export default App;
