import { FaCaretDown } from "react-icons/fa";
import profile_img from "../../assets/profile_img.svg";
import { LiaSearchSolid } from "react-icons/lia";
import { SheetMenu } from "../sidebar/SheetMenu";

const Navbar = () => {
  return (
    <div className="bg-white rounded-md py-4 px-8 w-full xl:w-[1100px] m-auto mt-5 flex justify-between items-center">
      <SheetMenu />
      <LiaSearchSolid
        size={25}
        className="top-[13px] left-3 hidden lg:block"
        color="#A8A8A8"
      />
      <div className="flex items-center gap-x-2">
        <p className="text-[#A8A8A8] font-medium">Sarah Shaibu</p>
        <img src={profile_img} alt="image of user" />
        <FaCaretDown color="#A8A8A8" size={10} />
      </div>
    </div>
  );
};

export default Navbar;
