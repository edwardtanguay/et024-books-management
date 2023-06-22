import { useContext } from "react";
import { AppContext } from "../AppContext";

const NotFound = () => {
  const { idBook } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-20">
        <p className="text-3xl font-bold">Book with id <span className="text-PURPLE">{idBook}</span> not found.</p>
        <img className="w-96" src="../public/images/no-found.gif" alt="" />
      </div>
    </div>
  );
};

export default NotFound;
