import { UpdatePassword } from "../../components/forms/UpdatePassword";
import ProfileMenu from "../../components/profile/ProfileMenu";
import NavBar from "../../components/navBar/NavBar"
import BottomNav from "../../components/navBar/BottomNav";
const UpdatePasswordPage = () => {
  return (
    <div>
      <div className="relative w-fit left-[8.8%]">
      <ProfileMenu />
      </div>
      <UpdatePassword />
      </div>
  );
};
export default UpdatePasswordPage;