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
    const [confirmMsg, setConfirmMsg] = useState(false);
    const [addBookSuccess, setAddBookSuccess] = useState(false);

    const formIncompleteMsg = () => {
        setFormIncompleteErr(true);
        setTimeout(() => setFormIncompleteErr(false), 1000);
    };
    const bookAdded = () => {
        setAddBookSuccess(true);
        setTimeout(() => setAddBookSuccess(false), 1000);
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

        setConfirmMsg(true);
    };

    const sendBook = () => {
        onAdd(newBook);

        clearForm();

        setConfirmMsg(false);

        bookAdded();
    };

    return (
        <div className="addbook">
            {addBookSuccess && (
                <div style={styles.bookAddedSuccess}>
                    <Typography
                        style={styles.bookAddedSuccessText}
                        variant="h5"
                        color="primary"
                    >
                        New Book Added Successfully!
                    </Typography>
                </div>
            )}
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

            <Modal open={confirmMsg} onClose={() => setConfirmMsg(false)}>
                <div className="addbookModal">
                    <Book book={newBook} />

                    <div className="addbookModalBtn">
                        <Button
                            type="submit"
                            onClick={sendBook}
                            color="primary"
                            variant="outlined"
                            className="addbookModalConfirm"
                        >
                            Confirm
                        </Button>
                        <Button
                            onClick={() => setConfirmMsg(false)}
                            color="secondary"
                            variant="outlined"
                            className="addbookModalCancel"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
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
    bookAddedSuccess: {
        border: "1px dotted blue",
        borderRadius: "5px",
        padding: "1rem 1rem",
        marginBottom: "3rem"
    },
    bookAddedSuccessText: {
        textAlign: "center",
        fontStyle: "italic"
    }
};

export default AddBook;
