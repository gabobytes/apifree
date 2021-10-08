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

    const {pais} = useParams();
     
    return(

        <div class="alert alert-success">
            Aquí detalles del país seleccionado
        </div>
    )
}

export default Pais