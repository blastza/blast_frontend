import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocalState } from './util/UseLocalStorage';
import './App.css';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Login from './Login';
import PrivateRoute from './PrivateRoute';


function App() {

  const[jwt, setJwt] = useLocalState("", "jwt");

  // useEffect(() => {
  //   if(!jwt) {
  //     const reqBody = {
  //       "username" : "Lutendo",
  //       "password" : "Lodav72#"
  //     }
  
  //     fetch('api/auth/login', {
  //       headers : {
  //         "Content-Type" : "application/json" 
  //       },
  //       method : "post",
  //       body : JSON.stringify(reqBody),
  //     })
  //     .then((response) => Promise.all( [response.json(), response.headers]))
  //     .then(([body, headers]) => {
  //         setJwt(headers.get("Authorization"));
  //       });
  //   }  
  // }, []);

  useEffect(() => {
    console.log(jwt)
  },[jwt]);


  return ( 
    <Routes>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }
      />
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<Homepage/>}/>
    </Routes>

  );
}

export default App;
