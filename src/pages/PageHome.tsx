import { useContext } from "react";
import Books from "../components/book/Books";
import SearchBooks from "../components/SearchBox";
import { AppContext } from "../AppContext";
import { useParams } from "react-router-dom";
import Book from "../components/book/Book";

const PageHome = () => {
  const { idBook, setIdBook } = useContext(AppContext);
  const params = useParams();
  setIdBook(params.idBook ? parseInt(params.idBook) : 0);

  return (
    <div className="container px-5 flex flex-col items-center">
     {
      idBook===0?(
       <>
        <section className="w-full mt-24 flex justify-center my-4">
        <SearchBooks />
      </section>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 justify-items-center mb-12">
        <Books />
      </section>
       </>
      ):(<Book />)
     }
    </div>
  );
};

export default PageHome;
