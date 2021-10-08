import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddBook from "../components/AddBook";

describe("Add New Book Input Fields", () => {
    test("Should render and input field for Title", () => {
        render(<AddBook />);
        const titleInputElement = screen.getByRole("new-book-title");
        expect(titleInputElement).toBeInTheDocument();
        expect(titleInputElement).toHaveTextContent("Title");
    });
    test("Should render and input field for ISBN", () => {
        render(<AddBook />);
        const isbnInputElement = screen.getByRole("new-book-isbn");
        expect(isbnInputElement).toBeInTheDocument();
        expect(isbnInputElement).toHaveTextContent("ISBN");
    });
    test("Should render and input field for Author", () => {
        render(<AddBook />);
        const authorInputElement = screen.getByRole("new-book-author");
        expect(authorInputElement).toBeInTheDocument();
        expect(authorInputElement).toHaveTextContent("Author");
    });
    test("Should render and input field for Genre", () => {
        render(<AddBook />);
        const genreInputElement = screen.getByRole("new-book-genre");
        expect(genreInputElement).toBeInTheDocument();
        expect(genreInputElement).toHaveTextContent("Genre");
    });
    test("Should render and input field for Publisher", () => {
        render(<AddBook />);
        const publisherInputElement = screen.getByRole("new-book-publisher");
        expect(publisherInputElement).toBeInTheDocument();
        expect(publisherInputElement).toHaveTextContent("Publisher");
    });
});

describe("Add New Book Form Buttons", () => {
    test("Should render a form submit button", () => {
        render(<AddBook />);
        const newBookSubmitElement = screen.getByRole("new-book-submit");
        expect(newBookSubmitElement).toBeInTheDocument();
        expect(newBookSubmitElement).toHaveTextContent("Add Book");
    });
    test("Should render a form clear button", () => {
        render(<AddBook />);
        const newBookSubmitElement = screen.getByRole("new-book-clear");
        expect(newBookSubmitElement).toBeInTheDocument();
        expect(newBookSubmitElement).toHaveTextContent("Clear");
    });
});

describe("Add New Book Form Submit Errors", () => {
    test("Submit with all empty fields and expect error message", () => {
        render(<AddBook />);
        const newBookSubmitElement = screen.getByRole("new-book-submit");
        expect(newBookSubmitElement).toBeInTheDocument();
        fireEvent.click(newBookSubmitElement);
        expect(newBookSubmitElement).toHaveTextContent("Complete All Fields");
        expect(newBookSubmitElement).not.toHaveTextContent("Add Book");
    });
});
