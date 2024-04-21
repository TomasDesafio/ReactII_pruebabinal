import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useMyContext } from '../context/Apicontext';



function Personajes() {
  const { pokemon,setPokemon } = useMyContext();
  const{id}=useParams()
  console.log(pokemon)

  
  return (
    <div className="App">
  
     
        <div>
          
        </div>
    
    </div>
  );
}

export default Personajes;


    
