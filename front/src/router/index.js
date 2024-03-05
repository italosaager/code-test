import {Routes, Route} from 'react-router-dom';
import Listar from '../pages/listar';
import Cadastrar from '../pages/cadastrar';

export default function RoutesPages() {
    return (
        <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    )
}