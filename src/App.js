 import React,{useState} from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pais from './components/Pais';
import Paises from './components/Paises';

function App() {

  return(
  <Router>
    <div className="App" class="container">

      <div className="btn-group">
        <Link to="/" className="btn btn-dark">Home</Link>
      </div>

    <Switch>
      <Route path="/" exact>
        <Paises/>
      </Route>

      <Route path="/Pais/:pais">
        <Pais/>
      </Route>      
    </Switch>
    </div>
    </Router>
  )
 }

 



  /*return (
    <Router>
    <div className="App" class="container">
     
        <Route path="/">
        <h1>Seleccione país</h1>
        <div class="col-md-6">
          <p>Consulta de resultados</p>
        </div>

      <ul>
      {  !todos ? 'Cargando...' :
         todos.map( (todo, index)=>{
          return <li>
            
            <img src={`https://www.countryflags.io/${todo.ISO2}/flat/32.png`} class="img-thumbnail"></img> 
           <Link to={`/pais/${todo.Country}`}> {todo.Country} </Link>
                     
           </li>
        })
      }
      </ul>
        </Route>


        <Route path="/pais/:nompais">
         <Pais/>
        </Route>
   
    </div>
    </Router>
  );
}*/

export default App;
