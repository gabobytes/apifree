import React,{useState} from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Pais = () => {
    const [items,SetItems] = useState()
    const url = `https://api.covid19api.com/total/country/`

    useEffect( () => {   
        fetchApi()      
       }, [] )
    
    
       //getting params from URL
    var {pais} = useParams();

    const fetchApi = async () => {
        const response = await fetch(`https://api.covid19api.com/total/country/${pais.replace(" ","-")}`)    
        const responseJSON = await response.json();
        SetItems(responseJSON)    
        
        console.log("Pais "+pais.replace(" ","-"));
    }


     
    return(

        <div class="alert alert-success">
           <h3>Datos para {pais}</h3>
        <ul>
        {  !items ? 'Cargando...' :
           items.map( (item, index)=>{
            return <li>           
              
                 Fecha: {item.Date}  Confirmados:{item.Confirmed} Muertes: {item.Deaths} Recuperados: {item.Recovered} Activos: {item.Active}
                       
             </li>
          })
        }
        </ul> 
        </div>
    )
}

export default Pais