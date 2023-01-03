import Apelo from "./componentes/partes/apelo";
import Apresentacao from "./componentes/partes/apresentacao";
import Beneficios from "./componentes/partes/beneficios";
import FuncionamentoDoCurso from "./componentes/partes/funcionamentoDoCurso";
import SobreNos from "./componentes/partes/SobreNos";

function App() {
  return (
    <div className='container'>
     <Apresentacao/>
     <SobreNos/> 
     <FuncionamentoDoCurso/>
     <Beneficios/>
     <Apelo/>
    </div>
  );
}

export default App;
