import { useContext } from 'react';
import { AiFillEye, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { AppContext } from '../../AppContext';
import { NavLink } from 'react-router-dom';

const Books = () => {
	const { isLight, books, filter, handleDeleteBook } = useContext(AppContext);

	return (
		<>
			{books
				.filter((book) =>
					book.name.toLowerCase().includes(filter.toLowerCase())
				)
				.map((book) => (
					<div
						className={`flex items-center justify-between w-[350px] md:w-[450px] lg:w-[500px] py-4 px-2 rounded-2xl gap-2 ${
							isLight
								? 'bg-BACKGROUND shadow-inner shadow-FOREGROUND'
								: 'bg-FOREGROUND shadow-inner shadow-BACKGROUND'
						}`}
						key={book.id}
					>
						<img
							className="w-1/5 rounded-2xl"
							src={book.imgUrl}
							alt=""
						/>
						<ul className="flex flex-col bg-CURRENT_LINE w-3/5 rounded-2xl text-FOREGROUND font-bold">
							<li
								className={`list-style ${
									isLight
										? 'border-BACKGROUND'
										: ' border-FOREGROUND'
								}`}
							>
								{book.name}
							</li>
							<li
								className={`list-style ${
									isLight
										? 'border-BACKGROUND'
										: ' border-FOREGROUND'
								}`}
							>
								{book.amount}
							</li>
							<li
								className={`list-style ${
									isLight
										? 'border-BACKGROUND'
										: ' border-FOREGROUND'
								}`}
							>
								{book.due}
							</li>
						</ul>
						<div className="flex flex-col gap-2 w-1/5 items-center">
							<NavLink
								to={`/book/${book.id}`}
								className="book-btn-icons bg-GREEN"
							>
								<AiFillEye />
							</NavLink>
							<span className="book-btn-icons bg-ORANGE">
								<AiFillEdit />
							</span>
							<span
								className="book-btn-icons bg-RED"
								onClick={() => handleDeleteBook(book)}
							>
								<AiFillDelete />
							</span>
						</div>
					</div>
				))}
		</>
	);
};

export default Books;
