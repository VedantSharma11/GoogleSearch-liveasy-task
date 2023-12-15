
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
