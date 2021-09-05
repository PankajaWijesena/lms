import { useState } from "react";

import { TextField, Button } from "@material-ui/core";

function AddBook() {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title || !isbn || !author || !genre || !publisher) {
            alert("Please Add All the Infomation About the Book!");
            return;
        }

        console.log({ title, isbn, author, genre, publisher });

        setTitle("");
        setIsbn("");
        setAuthor("");
        setGenre("");
        setPublisher("");
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
    }
};

export default AddBook;
