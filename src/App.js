import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserData } from "./context/User.js";
import Head from "./componentss/head/Head.jsx";
import Services from "./componentss/Services/Services.jsx";
import Hero from "./componentss/Hero/Hero.jsx";
import Home from "./componentss/Home/Home.jsx";
import Vendors from "./componentss/Vendors/Vendors.jsx";
import Contact from "./componentss/Contact/Contact.jsx";
import Getstarted from "./componentss/Getstarted/Getstarted.jsx";
import Footer from "./componentss/Footer/Footer.jsx";
import Aboutus from "./componentss/Aboutus/Aboutus.jsx";
import Mainservices from "./componentss/Mainservices/Mainservices.jsx";
import Residentialservices from "./componentss/Residentialservices/Residentialservices.jsx";
import Commercialservices from "./componentss/Commercialservices/Commercialservices.jsx";
import Login from "./componentss/Login/Login.jsx";
import Register from "./componentss/Register/Register.jsx";
import Loading from "./pages/Loading.jsx"

function App() {
  const { loading, user, isAuth } = UserData();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <BrowserRouter>
            <div>
              <div className="white-gradient" />
              <Head />
              <Hero />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Aboutus" element={<Aboutus />} />
              <Route path="/Mainservices" element={<Mainservices />} />
              <Route path="/Residential" element={<Residentialservices />} />
              <Route path="/Commercial" element={<Commercialservices />} />
              <Route path="/Vendors" element={isAuth ? <Vendors /> : <Login />} />
              <Route path="/login" element={isAuth ? <Home /> : <Login />} />
              <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
