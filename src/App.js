import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Details from './components/Details';
import { useState } from 'react';
import NotLogin from './components/NotLogin';
import News from './components/News';

function App() {
  const [user,setUser] = useState({})
  console.log(user);
  return (
    <div className="flex">
      <Login setUser={setUser} user={user}></Login>
      <div className="">
        {user.uid ? <Details user={user}/>: <NotLogin/>}
        {user.uid && <News/>}
      </div>
    </div>
  );
}

export default App;
