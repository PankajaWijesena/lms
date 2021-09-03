import { useState } from "react";

import MainHeader from "./components/MainHeader";
import AddBook from "./components/AddBook";
import ListBook from "./components/ListBook";

import "./App.css";

function App() {
    const [bookListOpen, setBookListOpen] = useState(false);
    const [bookAddOpen, setBookAddOpen] = useState(true);

    return (
        <div className="App">
            <MainHeader
                setBookAddOpen={setBookAddOpen}
                setBookListOpen={setBookListOpen}
            />
            {bookAddOpen && <AddBook />}
            {bookListOpen && <ListBook />}
        </div>
    );
}

export default App;
