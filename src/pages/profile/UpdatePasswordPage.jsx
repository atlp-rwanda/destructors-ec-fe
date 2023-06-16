import { UpdatePassword } from "../../components/forms/UpdatePassword";
import ProfileMenu from "../../components/profile/ProfileMenu";
const UpdatePasswordPage = () => {
  return (
    <div>
      <div className="relative w-fit left-[8.8%]">
      <ProfileMenu />
      </div>
      <div className="">
      <UpdatePassword />
      </div>
    </div>
  );
};
export default UpdatePasswordPage;