# Book Finder App 

This is a React-based Book Finder application that allows users to search for boooks by title and browse with pagination. The app uses the Open library API to fetch book data based on user search input.

# FEATURES
-**Search by Title** :
    users can search for books by title  using a search bar.
-**Random Initial Search**:   
    When the app loads, it initializes a random searxh term to disply books from various genres.
-**Pagination**:
    users can navigate between pages to view more books.
-**Modular Componenets**:
    The app is built using modular components for ease of maintainace and scalability.


### Project Structure:
```php
├── public/                     # Public assets and HTML template
├── src/
│   ├── components/
│   │   ├── Banner              # Component to display banner of the page
│   │   ├── BookCard            # Component to display the card of a book
│   │   ├── BookList            # component to disply the list of books and to disply pagination
│   │   ├── Header              #Component to disply the header section of the page
|   |   ├── SearchFormn         # Component to disply the Search bar section of the page
│   ├── App.js                  # Main application component
│   ├── index.js                # Application entry point
│   └── index.css               # Main stylesheet
└── README.md 
```

# INSTALLATION
To run this project locally: 
-**Clone the repository**:
```bash
git clone https://github.com/harathipeetla/book-library.git
cd library-house 
```

-**Install dependencies**:
```bash 
npm install
```

-**Start the application**:
```bash 
npm start
```

The app should now be running on http://localhost:3000.

# Usage

-**Search for Books**:
Type in the search bar and hit Enter or click the search button to fetch books by title.
-**Pagination**:
Use the "Prev" and "Next" buttons to navigate through pages of results.

## API Reference

This project uses the Open Library API to fetch book data. The API endpoint for searching books by title is as follows

```bash 
https://openlibrary.org/search.json?title=${searchTerm}&limit=${booksPerPage}&offset=${offset}
```


### Parameters

- **searchTerm**: (*string*) The keyword or title of the book(s) you want to search for. This value is dynamically set based on user input in the search bar.
- **booksPerPage**: (*integer*) Limits the number of results returned per page. This project defaults to 12 books per page.
- **offset**: (*integer*) Specifies the number of results to skip, calculated as `(page - 1) * booksPerPage`. Used for pagination.

### Example Request

To search for books with "science" in the title:











