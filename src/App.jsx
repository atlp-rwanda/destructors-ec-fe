import React from "react";
import Navigator from "./routes/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <ToastContainer />
        <Header />
        <Navigator />
      </Router>
    </div>
  );
}
export default App;
