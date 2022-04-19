import { Route, Routes } from "react-router-dom";
// import Loading from "./Componants/Loading";
import Navbar from "./Componants/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Singlecocktail from "./pages/Singlecocktail";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coctail/:id" element={<Singlecocktail />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
