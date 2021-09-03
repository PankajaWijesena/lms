import { useState, useEffect } from "react";

import MainHeader from "./components/MainHeader";
import AddBook from "./components/AddBook";
import ListBook from "./components/ListBook";

import "./App.css";

function App() {
    const [booksList, setBooksList] = useState([]);
    const [bookListOpen, setBookListOpen] = useState(false);
    const [bookAddOpen, setBookAddOpen] = useState(true);

    useEffect(() => {
        setBooksList(libBooks);
    }, [booksList]);

    return (
        <div className="App">
            <MainHeader
                setBookAddOpen={setBookAddOpen}
                setBookListOpen={setBookListOpen}
            />
            {bookAddOpen && <AddBook />}
            {bookListOpen && <ListBook booksList={booksList} />}
        </div>
    );
}

const libBooks = [
    {
        title: "Harry Potter and the Order of Phoenix",
        isbn: "0-7475-5100-6",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publisher: "Bloomsbury Publishing (UK)"
    },
    {
        title: "A Game of Thrones",
        isbn: "0-00-224584-1",
        author: "George R. R. Martin",
        genre: "Epic Fantasy",
        publisher: "Bantam Books (US, Canada)"
    },
    {
        title: "Alice's Adventures in Wonderland",
        isbn: " 978-0688110871",
        author: "Lewis Carroll",
        genre: "Fantasy",
        publisher: "Macmillan"
    },
    {
        title: "The Fellowship of the Ring",
        isbn: "978-0-00-837612-3",
        author: "J. R. R. Tolkein",
        genre: "Epic Fantasy",
        publisher: "Allen & Unwin"
    },
    {
        title: "The Maze Runner",
        isbn: "978-0-385-73794-4",
        author: "James Dashner",
        genre: "Young Adult, Science Fiction",
        publisher: "Delacorte Press"
    }
];

export default App;
