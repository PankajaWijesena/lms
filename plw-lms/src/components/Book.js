import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Avatar
} from "@material-ui/core";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";

export default function Book({ book }) {
    return (
        <div>
            <Card>
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
        </div>
    );
}
