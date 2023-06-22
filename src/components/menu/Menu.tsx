import { NavLink } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useContext } from "react";
import { AppContext } from "../../AppContext";


const Menu = () => {
  const { isLight, menuActiveHandler } = useContext(AppContext);

  return (
    <div className="flex gap-16 items-center">
      <HiBars3BottomLeft
        className={`${
          isLight ? "text-BACKGROUND" : "text-FOREGROUND"
        } text-2xl lg:hidden cursor-pointer`}
        onClick={menuActiveHandler}
      />
      <ul className="hidden lg:flex gap-4 uppercase font-medium">
        <li>
          <NavLink to="/book">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <section className={`font-Righteous font-light text-xs lg:font-bold md:text-xl lg:text-2xl  ${isLight?"text-COMMENT":"text-ORANGE"}`}>
        <h2>Library management application</h2>
      </section>
    </div>
  );
};

export default Menu;
