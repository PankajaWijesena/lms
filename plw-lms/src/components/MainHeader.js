import { AppBar, Button, ButtonGroup } from "@material-ui/core";

function MainHeader({ setBookListOpen, setBookAddOpen }) {
    return (
        <AppBar
            position="fixed"
            className="appBar"
            elevation={3}
            color="primary"
        >
            <div className="header">
                <h1 className="headerText">Library Management System</h1>
            </div>
            <div className="navBtnGroup">
                <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                    size="small"
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

export default MainHeader;
