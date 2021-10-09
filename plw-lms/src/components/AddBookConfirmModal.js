import {
    Container,
    Box,
    Button,
    Modal,
    Paper,
    makeStyles
} from "@material-ui/core";

import Book from "./BookCard";

function AddBookConfirmModal({ visible, setVisible, confirm, newBook }) {
    const classes = useStyles();

    return (
        <Modal open={visible} onClose={() => setVisible(false)}>
            <Container className={classes.modalcontainer} maxWidth="xs">
                <Paper className={classes.modalpaper}>
                    <Book book={newBook} />

                    <Box className={classes.modalbuttons}>
                        <Button
                            type="submit"
                            onClick={confirm}
                            color="primary"
                            variant="outlined"
                            size="large"
                            className={classes.modalconfirm}
                        >
                            Confirm
                        </Button>
                        <Button
                            type="reset"
                            onClick={() => setVisible(false)}
                            color="secondary"
                            variant="outlined"
                            size="large"
                            className={classes.modalcancel}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Modal>
    );
}

const useStyles = makeStyles((theme) => ({
    modalcontainer: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    modalpaper: {
        padding: "1rem",
        background: "#f0f0f0"
    },
    modalbuttons: {
        display: "flex",
        marginTop: "1rem"
    },
    modalconfirm: {
        flex: 1,
        marginRight: "0.5rem",
        background: "#ffffff"
    },
    modalcancel: {
        flex: 1,
        marginLeft: "0.5rem",
        background: "#ffffff"
    }
}));

export default AddBookConfirmModal;
