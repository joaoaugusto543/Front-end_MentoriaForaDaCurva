import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
