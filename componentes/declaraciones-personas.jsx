import React from 'react';
import '../hojas-de-estilo/declaraciones.css'

export function Declaraciones(props) {
    return(
      <div className='contenedor-declaraciones'>
        <img 
          className='imagen-declaracion'
          src={require(`../imagenes/persona${props.imagen}.jpg`)}
          alt='Foto de persona 1'
        />
        <div className='contenedor-texto-declaracion'>
            <p className='nombre-declaracion'>{props.nombre} en {props.pais}</p>
            <p className='cargo-declaracion'>{props.cargo} en {props.empresa}</p>
            <p className='texto-declaracion'>"{props.testimonio}"</p>
        </div>
    
      </div>
    );
}
