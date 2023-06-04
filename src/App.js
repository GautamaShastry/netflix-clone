import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import UserLiked from './pages/UserLiked';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/' element={<Netflix />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/tv' element={<TvShows />} /> 
        <Route exact path='/mylist' element={<UserLiked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
