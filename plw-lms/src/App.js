import { useState, useEffect } from "react";

import firestore from "./firestore";

import MainHeader from "./components/MainHeader";
import AddBook from "./components/AddBook";
import ListBook from "./components/ListBook";

import "./App.css";

function App() {
    const [booksList, setBooksList] = useState([]);
    const [bookListOpen, setBookListOpen] = useState(false);
    const [bookAddOpen, setBookAddOpen] = useState(true);

    useEffect(() => {
        getBooksList();
        return;
    }, [booksList]);

    const getBooksList = () => {
        firestore
            .collection("books")
            .orderBy("title")
            .get()
            .then((snapshot) => {
                const fireStoreBooks = [];
                snapshot.docs.forEach((doc) => {
                    fireStoreBooks.push(doc.data());
                });
                setBooksList(fireStoreBooks);
            });
    };

    const addBook = async (newBook) => {
        await firestore.collection("books").add(newBook);
    };

    return (
        <div className="App">
            <MainHeader
                setBookAddOpen={setBookAddOpen}
                setBookListOpen={setBookListOpen}
            />
            {bookAddOpen && <AddBook onAdd={addBook} />}
            {bookListOpen && <ListBook booksList={booksList} />}
        </div>
    );
}

export default App;
