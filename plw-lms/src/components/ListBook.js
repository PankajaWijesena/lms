import { useEffect, useState } from "react";

import { Container, Grid } from "@material-ui/core";

import Book from "../components/Book";

function ListBook({ booksList }) {
    const [booksListView, setBooksListView] = useState([]);

    useEffect(() => {
        setBooksListView(booksList);
        return;
    }, [booksList]);

    return (
        <div style={styles.listBook}>
            <Container>
                <Grid container>
                    {booksListView.map((book, index) => (
                        <div key={index} style={styles.listBookItem}>
                            <Grid item>
                                <Book book={book} />
                            </Grid>
                        </div>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

const styles = {
    listBook: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "15rem auto"
    },
    listBookItem: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "0.5rem auto"
    }
};

export default ListBook;
