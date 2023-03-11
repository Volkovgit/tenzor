import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="" element={<Main />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
