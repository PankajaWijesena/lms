import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Add New Book Input Fields Availability", () => {
    test("Should render and input field for Title", () => {
        render(<App />);
        const titleInputElement = screen.getByRole("new-book-title");
        expect(titleInputElement).toContainHTML("input");
    });
    test("Should render and input field for ISBN", () => {
        render(<App />);
        const isbnInputElement = screen.getByRole("new-book-isbn");
        expect(isbnInputElement).toContainHTML("input");
    });
    test("Should render and input field for Author", () => {
        render(<App />);
        const authorInputElement = screen.getByRole("new-book-author");
        expect(authorInputElement).toContainHTML("input");
    });
    test("Should render and input field for Genre", () => {
        render(<App />);
        const genreInputElement = screen.getByRole("new-book-genre");
        expect(genreInputElement).toContainHTML("input");
    });
    test("Should render and input field for Publisher", () => {
        render(<App />);
        const publisherInputElement = screen.getByRole("new-book-publisher");
        expect(publisherInputElement).toContainHTML("input");
    });
});

describe("Add New Book Input Fields Labels", () => {
    test("Should render and input field for Title", () => {
        render(<App />);
        const titleInputElement = screen.getByRole("new-book-title");
        expect(titleInputElement).toContainHTML("label");
        expect(titleInputElement).toHaveTextContent("Title");
    });
    test("Should render and input field for ISBN", () => {
        render(<App />);
        const isbnInputElement = screen.getByRole("new-book-isbn");
        expect(isbnInputElement).toContainHTML("label");
        expect(isbnInputElement).toHaveTextContent("ISBN");
    });
    test("Should render and input field for Author", () => {
        render(<App />);
        const authorInputElement = screen.getByRole("new-book-author");
        expect(authorInputElement).toContainHTML("label");
        expect(authorInputElement).toHaveTextContent("Author");
    });
    test("Should render and input field for Genre", () => {
        render(<App />);
        const genreInputElement = screen.getByRole("new-book-genre");
        expect(genreInputElement).toContainHTML("label");
        expect(genreInputElement).toHaveTextContent("Genre");
    });
    test("Should render and input field for Publisher", () => {
        render(<App />);
        const publisherInputElement = screen.getByRole("new-book-publisher");
        expect(publisherInputElement).toContainHTML("label");
        expect(publisherInputElement).toHaveTextContent("Publisher");
    });
});

describe("Add New Book Submit Button", () => {
    test("Should render a form submit button", () => {
        render(<App />);
        const newBookSubmitElement = screen.getByRole("new-book-submit");
        expect(newBookSubmitElement).toContainHTML("button");
    });
    test("Form button should be labelled 'Add Book'", () => {
        render(<App />);
        const newBookSubmitElement = screen.getByRole("new-book-submit");
        expect(newBookSubmitElement).toHaveTextContent("Add Book");
    });
});

describe("Clear New Book Form Fields Button", () => {
    test("Should render a form clear button", () => {
        render(<App />);
        const newBookSubmitElement = screen.getByRole("new-book-clear");
        expect(newBookSubmitElement).toContainHTML("button");
    });
    test("Form button should be labelled 'Clear'", () => {
        render(<App />);
        const newBookSubmitElement = screen.getByRole("new-book-clear");
        expect(newBookSubmitElement).toHaveTextContent("Clear");
    });
});
