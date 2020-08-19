import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register, { Welcome } from './components/register/Register';
import Login, { Test } from './components/login/Login';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AddPet from './components/dashboard/dashboard';
import PetsData from './components/viewpets/Petdata';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link  to="/login"><pre>LOGIN</pre></Link>
          <Link to="/register"><pre>REGISTER</pre></Link>
         {/* <Link to="/PetsData"><pre>VIEW PETS</pre></Link><br/> */}
        </div>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/login" component={Login} />
          <Route   path="/register" component={Register} />
          <Route path="/AddPet" component={AddPet}/>
          {/* <Route path="/PetsData" component={PetsData}/> */}
          <Route path="**" render={()=> window.alert('Oops..! Page Not Found')}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
