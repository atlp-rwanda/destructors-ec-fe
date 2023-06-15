import NavBar from '../components/navBar/NavBar';
import BottomNav from '../components/navBar/BottomNav';
import Main from '../components/products/Main';
import Footer from "../components/Footer";

function LandingPage () {
  return (
    <div>
      <NavBar />
      <BottomNav />
      <Main />
      <Footer/>
    </div>
  );
}

export default LandingPage;
