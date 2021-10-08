import React,{useState} from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Paises = () => {
    const [todos, setTodos] = useState()
    const url = 'https://api.covid19api.com/countries'


    useEffect( () => {
   
        fetchApi()
      
       }, [] )


    const fetchApi = async () => {
        const response = await fetch(url)    
        const responseJSON = await response.json();
        setTodos(responseJSON)         
    }


    return(    

    <div className="App" class="container"> 

        <h3>Seleccione País</h3>

        <p>Despliega el registro diario de casos activos, recuperados y fallecidos desde Enero de 2020 hasta la fecha.</p>

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
      </div>
    
    )

}

export default Paises