
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SigninPage from './pages/signin'

import Home from './pages/index'
function App() {
  return (
    <BrowserRouter >
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/signin' element={<SigninPage/>} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
