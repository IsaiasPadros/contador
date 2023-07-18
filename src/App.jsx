
import './App.css'
import Titulo from './componentes/Titulo';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './componentes/Contador';

function App() {


  return (
   <Container>
    <Titulo subtituloNuevo='Este subitutlo fue creado con props' ></Titulo>      {/* Agrego un props  */}
   <Contador></Contador>
   </Container>

    )
}

export default App
