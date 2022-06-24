import './App.css';
import { Declaraciones } from './componentes/declaraciones-personas.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos: </h1>
        <Declaraciones 
          nombre='Donna Falcon'
          pais='Colombia'
          imagen='1'
          cargo='Ingeneria Ambiental'
          empresa='Chusqui'
          testimonio='Aprendi muchisimo en este curso, ha sido una experiencia 
                      enriquecedora. Puedo decir sin duda que todo que viví 
                      aquí fue una de las mejores experiencias de mi vida' />
        <Declaraciones 
          nombre='Paola Rojas'
          pais='Mexico'
          imagen='2'
          cargo='Periodista'
          empresa='Televisa'
          testimonio='La escuela ha tomado en serio mis preguntas y mis problemas, 
                      y los ha respondido profesionalmente. Realmente me gustaron 
                      las clases por su variedad y por los profesores dedicados' />
        <Declaraciones 
          nombre='YanQi Cui'
          pais='China'
          imagen='3'
          cargo='Ingeniera de Software'
          empresa='Cabify'
          testimonio='En las semanas que tuve para prepararme, he tenido la suerte 
                      de tener la mejor preparación y también gozar de vuestra 
                      gran profesionalidad.' />
      </div>
    </div>
  );
}

export default App;
