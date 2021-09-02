function MainHeader() {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Library Management System</h1>
            </div>
            <div style={styles.nav}>
                <button
                    style={styles.navBtn}
                    onClick={() => console.log("Add New Book Button Clicked")}
                >
                    Add New Book
                </button>
                <button
                    style={styles.navBtn}
                    onClick={() => console.log("List All Books Button Clicked")}
                >
                    List All Books
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0 30px 0",
        color: "white",
        background: "blue"
    },
    header: {
        width: "100%",
        margin: "20px auto"
    },
    headerText: {
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        fontSize: "3rem"
    },
    nav: {
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderRadius: "5px"
    },
    navBtn: {
        border: "1px solid blue",
        borderRadius: "5px",
        background: "white",
        color: "blue",
        fontSize: "1rem",
        width: "50%",
        padding: "10px",
        margin: "5px"
    }
};

export default MainHeader;
