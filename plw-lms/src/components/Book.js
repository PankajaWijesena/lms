import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Book({ book }) {
    return (
        <div>
            <Card>
                <CardHeader title={book.title} subheader={book.isbn} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        Author: {book.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Genre: {book.genre}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Publisher: {book.publisher}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
