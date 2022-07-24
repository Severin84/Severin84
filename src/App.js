import "./App.css";

import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner"
import MovieList from "./Components/MoviesList";
import Favourites from "./Components/Favourites"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner/> 
              <MovieList/>
            </>
          }
        />
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;