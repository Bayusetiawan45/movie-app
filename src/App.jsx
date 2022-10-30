import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
