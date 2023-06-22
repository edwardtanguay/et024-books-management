import { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AppContext } from "../AppContext";

const SearchBooks: React.FC = () => {
  const { filter, setFilter } = useContext(AppContext);
  return (
    <div className="my-3 bg-CURRENT_LINE rounded-3xl flex gap-4 py-1 items-center px-1 justify-between border border-PURPLE ">
      <input
        className="rounded-3xl py-2 px-4  outline-none placeholder:text-BACKGROUND text-BACKGROUND w-[100%]"
        type="text"
        placeholder="Buchsuche"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
      <BiSearchAlt2 className="text-2xl cursor-pointer text-PURPLE mr-3" />
    </div>
  );
};

export default SearchBooks;
