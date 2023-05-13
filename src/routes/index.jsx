import { Route, Routes } from "react-router";
import Home from "../pages/DashboardPage";
import Welcome from "../pages/WelcomePage";
import About from "../pages/About.jsx";
import ProfilePage from "../pages/Profile";
import Login from "../components/Login";
import Auth from "../utils/Auth";
import TestElements from "../components/TestElements";

const navigator = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/" element={<TestElements />}></Route>
        <Route path="/" element={<Auth />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
export default navigator;
