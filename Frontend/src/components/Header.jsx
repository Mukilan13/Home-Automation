import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfilePic from "../assets/image.png";

function Header() {
  return (
    <div className="flex justify-between items-center w-full !px-6 !py-4 border-b-[1px] border-[#a5a5a5]">
      <div className="flex justify-start items-center gap-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={ProfilePic}
            alt="profile-pic"
          />
        </div>
        <div className="div">
          <h2 className="text-2xl font-bold">Hello, Adam</h2>
          <p className="text-[12px]">Welcome to your Smarthome</p>
        </div>
      </div>
      <div className="text-[#5b5b5b]">
        <NotificationsNoneIcon className="!text-[26px]" />
      </div>
    </div>
  );
}

export default Header;
