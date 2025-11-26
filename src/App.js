import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Maindashboard from "./components/dashboards/Maindashboard";
import Home from "./components/Home";
import About from "./components/pages/About";
import Updates from "./components/pages/Updates";

// import UserData from "./components/UsersData";
// import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maindashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Updates" element={<Updates />}/>
        <Route path="/Form" element={<Form />} />
        <Route path="/Maindashboard" element={<Maindashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
