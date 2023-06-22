import { useContext } from "react";
import { AppContext } from "../../AppContext";
import NotFound from "../NotFound";

const Book = () => {
  const { idBook, getBook, isLight } = useContext(AppContext);
  const book = getBook(idBook);
  if (book) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen w-full mt-32 md:mt-0 bg-PINK/10 rounded-3xl">
        <img className="rounded-2xl" src={book?.imgUrl} alt="" />
        <ul className="flex flex-col bg-CURRENT_LINE w-[80%] rounded-2xl text-FOREGROUND font-bold">
          <li
            className={`list-style ${
              isLight ? "border-BACKGROUND" : " border-FOREGROUND"
            }`}
          >
            {book?.name}
          </li>
          <li
            className={`list-style ${
              isLight ? "border-BACKGROUND" : " border-FOREGROUND"
            }`}
          >
            {book?.amount}
          </li>
          <li
            className={`list-style ${
              isLight ? "border-BACKGROUND" : " border-FOREGROUND"
            }`}
          >
            {book?.due}
          </li>
          <li
            className={`list-style border-none
                `}
          >
            {book?.desc}
          </li>
        </ul>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Book;
