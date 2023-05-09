import { Route, Routes } from "react-router";
import Home from "@/pages/home";
import About from "@/pages/About.jsx"

const navigator = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  )
}

export default navigator;