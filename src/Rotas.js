import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/Login" element={<Login/>} />
                <Route exact={true} path="/Register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;


