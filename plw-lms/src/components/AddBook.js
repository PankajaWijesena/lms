import { useState } from "react";
import { Container, TextField, Button, makeStyles } from "@material-ui/core";
import AddBookSuccess from "./AddBookSuccess";
import AddBookConfirmModal from "./AddBookConfirmModal";

function AddBook({ onAdd }) {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");
    const [newBook, setNewBook] = useState({});

    const [formIncompleteErr, setFormIncompleteErr] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [addBookSuccess, setAddBookSuccess] = useState(false);

    const classes = useStyles();

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

        setConfirmVisible(true);
    };

    const sendBook = () => {
        onAdd(newBook);

        clearForm();

        setConfirmVisible(false);

        bookAdded();
    };

    return (
        <Container maxWidth="sm" className={classes.container}>
            {addBookSuccess && <AddBookSuccess />}

            <form onSubmit={onSubmit}>
                <TextField
                    id="filled-basic"
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.formField}
                    role="new-book-title"
                />
                <TextField
                    id="filled-basic"
                    label="ISBN"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    className={classes.formField}
                    role="new-book-isbn"
                />
                <TextField
                    id="filled-basic"
                    label="Author"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className={classes.formField}
                    role="new-book-author"
                />
                <TextField
                    id="filled-basic"
                    label="Genre"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className={classes.formField}
                    role="new-book-genre"
                />
                <TextField
                    id="filled-basic"
                    label="Publisher"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    className={classes.formField}
                    role="new-book-publisher"
                />

                <div className={classes.formButtons}>
                    <Button
                        type="submit"
                        color={formIncompleteErr ? "secondary" : "primary"}
                        variant="outlined"
                        role="new-book-submit"
                        className={classes.formButtonAdd}
                    >
                        {formIncompleteErr ? "Complete All Fields" : "Add Book"}
                    </Button>
                    <Button
                        type="reset"
                        onClick={clearForm}
                        color="secondary"
                        variant="outlined"
                        role="new-book-clear"
                        className={classes.formButtonClear}
                    >
                        Clear
                    </Button>
                </div>
            </form>

            <AddBookConfirmModal
                visible={confirmVisible}
                setVisible={setConfirmVisible}
                confirm={sendBook}
                newBook={newBook}
            />
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "12rem 2rem 0 2rem"
    },
    formField: {
        margin: "0 0 2rem 0"
    },
    formButtons: {
        display: "flex"
    },
    formButtonAdd: {
        flex: 4,
        marginRight: "0.5rem"
    },
    formButtonClear: {
        flex: 1,
        marginLeft: "0.5rem"
    }
}));

export default AddBook;
