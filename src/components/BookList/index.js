import { useEffect, useState } from "react";
import BookCard from "../BookCard";
import SearchForm from "../SearchForm"
import "./index.css"

const BookList =()=>{

const initialSearchTerms = ['fiction', 'science', 'classic', 'history', 'mystery', 'fantasy', 'programming']
const booksPerPage = 12

const [books , setBooks] = useState([])
const [searchTerm, setSearchTerm] = useState(initialSearchTerms[Math.floor(Math.random() * initialSearchTerms.length)])
const [currentPage, setCurrentPage] = useState(1)
const [totalBooks, setTotalBooks] = useState(0)

useEffect(()=>{
    fetchBooks(searchTerm, currentPage)
}, [searchTerm, currentPage])


const fetchBooks = async (searchTerm, page)=>{
    const offset = (page - 1) * booksPerPage 
    const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}&limit=${booksPerPage}&offset=${offset}`)
    const data = await response.json()
    setBooks(data.docs)
    setTotalBooks(data.numFound)
  
}

// changing the page number
const totalPages = Math.ceil(totalBooks / booksPerPage)
const changePage = (pageNumber) =>{
    if(pageNumber > 0 && pageNumber <= totalPages){
        setCurrentPage(pageNumber)
    }
}

    return(
        <div className="booklist-container">
            <h1 className="header-h1">The Book Founder</h1>
            <SearchForm setSearchTerm={setSearchTerm}/>
            <div className="book-list">
                <BookCard books={books}/>
            </div>
            
            <div className="pagination">
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                <span className="page-nums"> {currentPage}  of {totalPages}</span>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    )
}

export default BookList