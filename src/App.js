import Home from './pages/home.jsx';
import PokemonDetail from './pages/pokemonDetail.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/pokemonDetail/:id"  element={<PokemonDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
