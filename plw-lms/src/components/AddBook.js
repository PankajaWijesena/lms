import { useState } from "react";

import { TextField, Typography, Button, Modal } from "@material-ui/core";

import Book from "../components/Book";

function AddBook({ onAdd }) {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");
    const [newBook, setNewBook] = useState({});

    const [confirmModal, setConfirmModal] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);

    const bookAdded = () => {
        setAddSuccess(true);
        setTimeout(() => setAddSuccess(false), 1000);
    };

    const clearForm = () => {
        setTitle("");
        setIsbn("");
        setAuthor("");
        setGenre("");
        setPublisher("");
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title || !isbn || !author || !genre || !publisher) {
            alert("Please Add All the Infomation About the Book!");
            return;
        }

        setNewBook({ title, isbn, author, genre, publisher });

        setConfirmModal(true);
    };

    const sendBook = () => {
        onAdd(newBook);

        clearForm();

        setConfirmModal(false);

        bookAdded();
    };

    return (
        <div className="addbook">
            <form onSubmit={onSubmit}>
                <TextField
                    id="filled-basic"
                    label="Title"
                    variant="filled"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.formField}
                    role="new-book-title"
                />
                <TextField
                    id="filled-basic"
                    label="ISBN"
                    variant="filled"
                    fullWidth
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    style={styles.formField}
                    role="new-book-isbn"
                />
                <TextField
                    id="filled-basic"
                    label="Author"
                    variant="filled"
                    fullWidth
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={styles.formField}
                    role="new-book-author"
                />
                <TextField
                    id="filled-basic"
                    label="Genre"
                    variant="filled"
                    fullWidth
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={styles.formField}
                    role="new-book-genre"
                />
                <TextField
                    id="filled-basic"
                    label="Publisher"
                    variant="filled"
                    fullWidth
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    style={styles.formField}
                    role="new-book-publisher"
                />
                <div style={styles.formButton}>
                    <Button
                        type="submit"
                        color="primary"
                        variant="outlined"
                        role="new-book-submit"
                        style={styles.formButtonAdd}
                    >
                        Add Book
                    </Button>
                    <Button
                        type="reset"
                        onClick={clearForm}
                        color="secondary"
                        variant="outlined"
                        role="new-book-clear"
                        style={styles.formButtonClear}
                    >
                        Clear
                    </Button>
                </div>
            </form>

            <Modal open={confirmModal} onClose={() => setConfirmModal(false)}>
                <div style={styles.modalBox}>
                    <Book book={newBook} />
                    <Button
                        type="submit"
                        onClick={sendBook}
                        color="primary"
                        variant="contained"
                    >
                        Confirm
                    </Button>
                    <Button
                        onClick={() => setConfirmModal(false)}
                        color="secondary"
                        variant="contained"
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>

            <Typography
                variant="body1"
                color="primary"
                style={{
                    ...styles.addedSuccess,
                    visibility: addSuccess ? "visible" : "hidden"
                }}
                role="new-book-add-success"
            >
                The Book is Added to the Database
            </Typography>
        </div>
    );
}

const styles = {
    formField: {
        margin: "0 0 1rem 0"
    },
    formButton: {
        display: "flex"
    },
    formButtonAdd: {
        flex: 4,
        marginRight: "0.3rem"
    },
    formButtonClear: {
        flex: 1,
        marginLeft: "0.3rem"
    },
    addedSuccess: {
        color: "blue",
        fontFamily: "Roboto",
        margin: "2rem auto"
    },
    modalBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        border: "0.1rem solid #222",
        borderRadius: "5px",
        padding: "5rem",
        boxShadow: 24
    }
};

export default AddBook;
