import React, { useEffect, useState } from "react";

import { Container, Grid } from "@material-ui/core";

import Book from "../components/Book";

function ListBook({ booksList }) {
    const [booksListView, setBooksListView] = useState([]);

    useEffect(() => {
        setBooksListView(booksList);
    }, [booksList]);

    return (
        <div className="listbook">
            <Container>
                <Grid container>
                    {booksListView.map((book) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                margin: "0.5rem auto"
                            }}
                        >
                            <Grid item key={Math.random() * 12345}>
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
