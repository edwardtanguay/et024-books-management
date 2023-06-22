import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const MenuSm = () => {
  const { isLight, isMenuActive, menuActiveHandler } = useContext(AppContext);

  return (
    <div
      className={`flex flex-col-reverse items-center lg:hidden inset-0 fixed  top-70 justify-center gap-20  backdrop-blur-md ${
        isLight ? "bg-FOREGROUND/80" : "bg-BACKGROUND/80"
      } ${isMenuActive ? "flex" : "hidden"}`}
    >
      <ul className="flex flex-col justify-center items-center gap-20 lg:hidden uppercase font-bold text-xl">
        <li>
          <NavLink onClick={menuActiveHandler} to="/book">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={menuActiveHandler} to="/contact">Contact us</NavLink>
        </li>
        <li>
          <NavLink onClick={menuActiveHandler} to="/about">About</NavLink>
        </li>
      </ul>
      
      <AiOutlineClose
        className={`${
          isLight ? "text-BACKGROUND" : "text-FOREGROUND"
        } text-5xl lg:hidden cursor-pointer ${
          isMenuActive ? "flex" : "hidden"
        }`}
        onClick={menuActiveHandler}
      />
      <section className={`font-Righteous font-bold text-2xl ${isLight?"text-COMMENT":"text-ORANGE"}`}>
        <h2>Library management application</h2>
      </section>
    </div>
  );
};

export default MenuSm;
