import { useState } from "react";

import { TextField, Typography, Button } from "@material-ui/core";

function AddBook({ onAdd }) {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");

    const [addSuccess, setAddSuccess] = useState(false);

    const bookAdded = () => {
        setAddSuccess(true);
        setTimeout(() => setAddSuccess(false), 1000);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title || !isbn || !author || !genre || !publisher) {
            alert("Please Add All the Infomation About the Book!");
            return;
        }

        const newBook = { title, isbn, author, genre, publisher };

        onAdd(newBook);

        setTitle("");
        setIsbn("");
        setAuthor("");
        setGenre("");
        setPublisher("");

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
                    style={styles.field}
                    role="new-book-title"
                />
                <TextField
                    id="filled-basic"
                    label="ISBN"
                    variant="filled"
                    fullWidth
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    style={styles.field}
                    role="new-book-isbn"
                />
                <TextField
                    id="filled-basic"
                    label="Author"
                    variant="filled"
                    fullWidth
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={styles.field}
                    role="new-book-author"
                />
                <TextField
                    id="filled-basic"
                    label="Genre"
                    variant="filled"
                    fullWidth
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={styles.field}
                    role="new-book-genre"
                />
                <TextField
                    id="filled-basic"
                    label="Publisher"
                    variant="filled"
                    fullWidth
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    style={styles.field}
                    role="new-book-publisher"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    role="new-book-submit"
                >
                    Add Book
                </Button>
                <Button
                    type="reset"
                    color="secondary"
                    variant="outlined"
                    role="new-book-reset"
                >
                    Clear
                </Button>
            </form>

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
    field: {
        margin: "0 0 1rem 0"
    },
    addedSuccess: {
        color: "blue",
        fontFamily: "Roboto",
        margin: "2rem auto"
    }
};

export default AddBook;
