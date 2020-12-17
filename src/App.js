import Formulario from './Components/Formulario';
import React,{useState,useEffect} from 'react';
import {API_URL, APY_KEY} from './config';
import ListImagen from './Components/ListImagen';

const App = () => {

  const [busqueda,setBusqueda]=useState('');
  const [imagenes,setImagenes]=useState([]);

  useEffect(()=>{
    const queryAPI = async()=>{
      if(busqueda==='') return;

      const endPOINT = `${API_URL}query=${busqueda}&client_id=${APY_KEY}`;

      const response = await fetch(endPOINT);
      const reponseJSON = await response.json();

      setImagenes(reponseJSON.results);      
    }
    queryAPI();
  },[busqueda]);

  return ( 
  
    <div className="container">
    <div className="card">
      <p className="lead text-left">
        Buscador de Imágenes
      </p>
      <Formulario 
         setBusqueda={setBusqueda} 
      />
    </div>

    <div className="row justify-content-center">
      <ListImagen
        imagenes={imagenes}
      />
      
    </div>
  </div>
    
    
    );
}
 
export default App;