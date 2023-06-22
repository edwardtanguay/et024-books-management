import { useContext } from "react";
import { BiSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { AppContext } from "../AppContext";

const ToggleButton = () => {
  const { isLight, setIsLight } = useContext(AppContext);
  const getTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <div
      className={`w-12 h-6 rounded-full flex items-center
      border-2 border-PURPLE cursor-pointer ${isLight?"bg-CURRENT_LINE":" bg-FOREGROUND"}`}
      onClick={getTheme}
    >
      <span
        className={`shadow-inner duration-200 transition ease-in-out  w-4 h-4 flex rounded-full mx-1 cursor-pointer ${isLight?" translate-x-0":"  translate-x-5"}`}
      >
        <BiSun className={`${isLight?"hidden":"flex text-BACKGROUND"}`} />
        <FaRegMoon className={`${isLight?"flex text-FOREGROUND":"hidden"}`} />
      </span>
    </div>
  );
};

export default ToggleButton;
