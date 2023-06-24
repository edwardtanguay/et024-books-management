import React, { createContext, useEffect, useState } from 'react';
import { IBook } from './interface';
import axios from 'axios';

interface IApp {
	isLight: boolean;
	setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuActive: boolean;
	setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
	menuActiveHandler: () => void;
	books: IBook[];
	setBooks: (books: IBook[]) => void;
	filter: string;
	setFilter: (filter: string) => void;
	getBook: (id: number) => IBook | undefined;
	idBook: number;
	setIdBook: (idBook: number) => void;
	handleDeleteBook: (book: IBook) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
	const [isLight, setIsLight] = useState(false);
	const [isMenuActive, setIsMenuActive] = useState(false);
	const [books, setBooks] = useState<IBook[]>([]);
	const [filter, setFilter] = useState('');
	const menuActiveHandler = () => {
		setIsMenuActive(!isMenuActive);
	};
	const getBook = (idBook: number) => {
		return books.find((book) => book.id === idBook);
	};
	const [idBook, setIdBook] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: booksData } = await axios.get(
					'http://localhost:9000/books'
				);
				setBooks(booksData);
			} catch (err: unknown) {
				if (err instanceof Error) {
					console.log(err.message);
				} else {
					console.log('An unknown error occurred');
				}
			}
		};
		fetchData();
	}, []);

	const handleDeleteBook = (book: IBook) => {
		(async () => {
			try {
				const response = await axios.delete(
					`http://localhost:9000/books/${book.id}`
				);
        // only delete book from the frontend array if the backend indicates that that book was actually deleted from the JSON file 
				if (response.status === 200) {
					const _books = books.filter((m) => m.id !== book.id);
					setBooks(_books);
				}
			} catch (err: unknown) {
				if (err instanceof Error) {
					console.log(err.message);
				} else {
					console.log('An unknown error occurred');
				}
			}
		})();
	};

	return (
		<AppContext.Provider
			value={{
				isLight,
				setIsLight,
				isMenuActive,
				setIsMenuActive,
				menuActiveHandler,
				books,
				setBooks,
				filter,
				setFilter,
				getBook,
				idBook,
				setIdBook,
				handleDeleteBook
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
