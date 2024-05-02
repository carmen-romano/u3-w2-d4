import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Netflix-assets/css/index.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/myFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MyProfile from "./components/MyProfile";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<TvShows />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dettagli/:movieId" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
