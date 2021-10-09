import {
    AppBar,
    Button,
    ButtonGroup,
    Container,
    Paper,
    Typography,
    makeStyles
} from "@material-ui/core";

function MainHeader({ setBookListOpen, setBookAddOpen }) {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            elevation={3}
            color="primary"
            className={classes.appbar}
        >
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Library Management System
                </Typography>
                <Paper className={classes.navigation}>
                    <ButtonGroup color="primary" size="small" fullWidth>
                        <Button
                            onClick={() => {
                                setBookAddOpen(true);
                                setBookListOpen(false);
                            }}
                        >
                            Add New Book
                        </Button>
                        <Button
                            onClick={() => {
                                setBookListOpen(true);
                                setBookAddOpen(false);
                            }}
                        >
                            List All Books
                        </Button>
                    </ButtonGroup>
                </Paper>
            </Container>
        </AppBar>
    );
}

const useStyles = makeStyles((theme) => ({
    appbar: { padding: "1rem 0 1.2rem 0" },
    navigation: { padding: "0.2rem" }
}));

export default MainHeader;
