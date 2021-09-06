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
        <div style={styles.addbook}>
            <form onSubmit={onSubmit}>
                <TextField
                    id="filled-basic"
                    label="Title"
                    variant="filled"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.field}
                />
                <TextField
                    id="filled-basic"
                    label="ISBN"
                    variant="filled"
                    fullWidth
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    style={styles.field}
                />
                <TextField
                    id="filled-basic"
                    label="Author"
                    variant="filled"
                    fullWidth
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={styles.field}
                />
                <TextField
                    id="filled-basic"
                    label="Genre"
                    variant="filled"
                    fullWidth
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={styles.field}
                />
                <TextField
                    id="filled-basic"
                    label="Publisher"
                    variant="filled"
                    fullWidth
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    style={styles.field}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    fullWidth
                >
                    Add Book
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
    addbook: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "15rem auto"
    },
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
