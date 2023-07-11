
import './App.css'
import Titulo from './componentes/Titulo';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './componentes/Contador';

function App() {
  

  return (
   <Container>
   <Titulo></Titulo>
   <Contador></Contador>
   </Container>
    
    )
}

export default App
