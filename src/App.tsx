import { useContext } from "react";
import Navbar from "./components/Navbar";
import { AppContext } from "./AppContext";
import Router from "./Router";

const App = () => {
  const{isLight}=useContext(AppContext)
  return (
    <div className={`min-h-screen ${isLight?"bg-FOREGROUND text-BACKGROUND":" bg-BACKGROUND text-FOREGROUND"} `}>
      <header className={`flex items-center shadow-lg h-20 fixed right-0 left-0 z-10 ${isLight?" bg-FOREGROUND":" bg-BACKGROUND"}`}>
        <Navbar />
      </header>
      <main className=" flex justify-center w-full">
        <Router />
      </main>
    </div>
  );
};

export default App;
