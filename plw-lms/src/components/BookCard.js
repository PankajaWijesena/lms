import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Avatar,
    makeStyles
} from "@material-ui/core";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";

function BookCard({ book }) {
    const classes = useStyles();

    return (
        <Card className={classes.bookcard}>
            <CardHeader
                avatar={
                    <Avatar>
                        <MenuBookTwoToneIcon />
                    </Avatar>
                }
                title={book.title}
                subheader={book.isbn}
            />
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
    );
}

const useStyles = makeStyles((theme) => ({
    bookcard: { padding: "1rem" }
}));

export default BookCard;
