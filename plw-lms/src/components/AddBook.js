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

    const [formIncompleteErr, setFormIncompleteErr] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);

    const formIncompleteMsg = () => {
        setFormIncompleteErr(true);
        setTimeout(() => setFormIncompleteErr(false), 1000);
    };
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
            formIncompleteMsg();
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
                        color={formIncompleteErr ? "secondary" : "primary"}
                        variant="outlined"
                        role="new-book-submit"
                        style={styles.formButtonAdd}
                    >
                        {formIncompleteErr ? "Complete All Fields" : "Add Book"}
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
                <div className="addbookModal">
                    <Book book={newBook} />
                    <div className="addbookModalBtn">
                        <Button
                            type="submit"
                            onClick={sendBook}
                            color="primary"
                            variant="contained"
                            className="addbookModalConfirm"
                        >
                            Confirm
                        </Button>
                        <Button
                            onClick={() => setConfirmModal(false)}
                            color="secondary"
                            variant="contained"
                            className="addbookModalCancel"
                        >
                            Cancel
                        </Button>
                    </div>
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
    }
};

export default AddBook;
