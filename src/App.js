
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import HomeScreen from "./pages/HomePage/HomeScreen/HomeScreen";
import Header from "./pages/Header/Header";
import AboutHomeScreen from "./pages/AboutPage/AboutHomeScreen/AboutHomeScreen";

function App() {
  return (
    <div>
      <Router>
        <Header />
       <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/shop" element={<AboutHomeScreen/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
