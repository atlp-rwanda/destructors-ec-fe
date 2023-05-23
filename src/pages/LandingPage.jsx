import NavBar from '../components/navBar/NavBar';
import UpPage from '../components/navBar/UpPage';
import BottomNav from '../components/navBar/BottomNav';
import Main from '../components/products/Main';

function LandingPage () {
  return (
    <div>
      <UpPage />
      <NavBar />
      <BottomNav />
      <Main />
    </div>
  );
}

export default LandingPage;
