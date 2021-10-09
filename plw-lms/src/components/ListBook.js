import { useEffect, useState } from "react";

import { Container, Grid, makeStyles } from "@material-ui/core";

import BookCard from "../components/BookCard";

function ListBook({ booksList }) {
    const [booksListView, setBooksListView] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        setBooksListView(booksList);
        return;
    }, [booksList]);

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Grid container>
                {booksListView.map((book, index) => (
                    <Grid className={classes.gridbook} key={index} item>
                        <BookCard book={book} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "11.3rem 2rem 5rem 2rem"
    },
    gridbook: {
        marginBottom: "1rem",
        width: "100%"
    }
}));

export default ListBook;
