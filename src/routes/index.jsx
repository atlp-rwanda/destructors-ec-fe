import { Route, Routes } from "react-router";
import Home from "../pages/DashboardPage";
import Welcome from "../pages/WelcomePage";
import About from "../pages/About.jsx";
import ProfilePage from "../pages/Profile";
import SignupPage from "../pages/auth/Signup";
import Auth from "../utils/Auth";
const navigator = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path='/' element={<Welcome />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='/auth/signup' element={<SignupPage />} />
      </Routes>
    </div>
  );
};
export default navigator;
