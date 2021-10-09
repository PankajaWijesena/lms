import { Container, Typography, makeStyles } from "@material-ui/core";

function AddBookSuccess() {
    const classes = useStyles();

    return (
        <Container maxWidth="xs" className={classes.bookAddedSuccess}>
            <Typography
                className={classes.bookAddedSuccessText}
                variant="h5"
                color="primary"
                align="center"
            >
                New Book Added Successfully!
            </Typography>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    bookAddedSuccess: {
        border: "1px dotted blue",
        borderRadius: "5px",
        padding: "1rem 1rem",
        marginBottom: "3rem"
    },
    bookAddedSuccessText: {
        fontStyle: "italic"
    }
}));

export default AddBookSuccess;
