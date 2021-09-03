import {
    AppBar,
    Toolbar,
    Button,
    ButtonGroup,
    Typography,
    makeStyles
} from "@material-ui/core";

function MainHeader({ setBookListOpen, setBookAddOpen }) {
    const styles = useStyles();

    return (
        <AppBar
            position="fixed"
            className={styles.appBar}
            elevation={3}
            color="primary"
        >
            <div className={styles.header}>
                <Toolbar>
                    <Typography
                        variant={"h2"}
                        component={"h1"}
                        className={styles.headerText}
                    >
                        Library Management System
                    </Typography>
                </Toolbar>
            </div>
            <div className={styles.navBtnGroup}>
                <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                    fullWidth
                >
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
            </div>
        </AppBar>
    );
}

const useStyles = makeStyles(() => {
    return {
        appBar: {
            padding: "1rem 0 2rem 0",
            alignItems: "center"
        },
        header: {
            width: "100%",
            margin: "0 auto 2rem auto"
        },
        headerText: {
            width: "50%",
            margin: "0 auto",
            textAlign: "center"
        },
        navBtnGroup: {
            width: "50%",
            border: "0.1rem solid #3f51b5",
            background: "white",
            borderRadius: "5px",
            boxShadow: "0 0 0.5rem #ffffff"
        }
    };
});

export default MainHeader;
