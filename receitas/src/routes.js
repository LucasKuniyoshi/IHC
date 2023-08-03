import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Receita from './pages/Receitas';
import Adicionar from './pages/Adicionar';

import Erro from './pages/Erro';

import Header from './components/Header';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/receita/:id" element={ <Receita/> } />
        <Route path="/adicionar" element={ <Adicionar/> } />

        <Route path="*" element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;