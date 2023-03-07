import Home from "./pages/Home";
import { Provider } from "react-redux";
import Hero from "./component/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store";

import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import Services from "./component/Services";


function App() {

  return (
    <>
      <ChakraProvider>     <Provider store={store}>
     <Router>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Hero/>} />  
     <Route path="/Home" element={<Home/>} />
     <Route path="/login" element={<Login/>} />   
     <Route path="/register" element={<Register/>} />   
     <Route path="/service" element={<Services/>} />   
      </Routes>
      <Footer/>
      </Router>
      </Provider>
      </ChakraProvider>
      </>
  );
}

export default App;
