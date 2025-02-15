import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Head from './componentss/head/Head.jsx'
import Services from './componentss/Services/Services.jsx';
import Hero from './componentss/Hero/Hero.jsx';
import Home from './componentss/Home/Home.jsx';
import Vendors from './componentss/Vendors/Vendors.jsx';
import Store from './componentss/Store/Store.jsx';  // Update the path based on your project structure
import Contact from './componentss/Contact/Contact.jsx';
import Getstarted from './componentss/Getstarted/Getstarted.jsx';
import Footer from './componentss/Footer/Footer.jsx';
import Aboutus from './componentss/Aboutus/Aboutus.jsx';
import Mainservices from './componentss/Mainservices/Mainservices.jsx';
import Residentialservices from './componentss/Residentialservices/Residentialservices.jsx';
import Commercialservices from './componentss/Commercialservices/Commercialservices.jsx';   

function App() {
  return (
    <>
    <div className='App'>
    <BrowserRouter>
    <div>
    <div className='white-gradient'/>
    <Head/>
    <Hero/>
    </div>
    
    <Routes>

    <Route path='/' element={< Home/>}/>
    <Route  path='/Aboutus' element={< Aboutus/>}/>
    <Route  path='/Mainservices' element={< Mainservices/>}/>
    <Route  path='/Residential' element={< Residentialservices/>}/>
    <Route  path='/Commercial' element={< Commercialservices/>}/>
    <Route  path='/Vendors' element={< Vendors/>}/>
    <Route  path='/Store' element={< Store/>}/>
   

    </Routes>
      <Footer/>
    
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
