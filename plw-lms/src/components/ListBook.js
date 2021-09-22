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
        <div className="listBook">
            <Container>
                <Grid container>
                    {booksListView.map((book, index) => (
                        <div key={index} className="listBookItem">
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

export default ListBook;
