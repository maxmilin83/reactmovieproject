import './css/App.css'
import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import {Routes,Route} from "react-router-dom"
import {MovieProvider} from "./contexts/MovieContext"
function App() {
  const movieNumber = 1;

  return (
   <MovieProvider>

    <NavBar></NavBar>
    <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/favorites" element={<Favorites></Favorites>}> </Route>
        </Routes>
    </main>

   </MovieProvider>
  );
}

export default App
