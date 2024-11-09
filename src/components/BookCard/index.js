import { useState } from "react"
import {FaStar} from 'react-icons/fa'
import "./index.css"

const BookCard =({books = []})=>{
    const [expand, setExpand] = useState({})

    const toggleReadMore =(key) =>{
        setExpand((prev) =>({
            ...prev,
            [key] : !prev[key]
        })) 
    }

    //rating 
    const renderStars = (avgRating)=>{
        const maxStars = 5 
        const rating = Math.round(avgRating)
        const stars = [];
        for(let i =0; i < rating; i++){
            stars.push(<FaStar key={i} color="gold"/>)
        }
        for(let i =rating; i <maxStars; i++){
            stars.push(<FaStar key={`empty-${i}`} color="gray"/>)
        }
        return stars
    }

    return(
        <div className="bookcard-container">
            {books.map((book) =>{
                const isExapand = expand[book.key]
                const fullText = book.first_sentence ? book.first_sentence[0] :""
                const shortText = fullText.slice(0, 30)
                return(
                    <div key={book.key} className="book-card">
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title || "No title available"}
                      className="book-card-img"
                      />
                      <h5 className="book-title">{book.title} - <span className="author-name">{book.author_name}</span></h5>
                      <p className="text">
                        {isExapand ? fullText : `${shortText} `}
                        {fullText.length > 30 && (
                            <span onClick={() => toggleReadMore(book.key)} className="read-text">{isExapand ? "Read Less" :"Read More"}</span>
                        )}
                    </p>
                    {book.ratings_average ? (
                        <div>
                           {renderStars(book.ratings_average)} 
                            <span className="rating">{book.ratings_average.toFixed(1)}</span>
                        </div>
                    ): ("")}
                    <p><strong>Intrested ? </strong>
                        <a href={`https://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer" className="view-details">
                            Know More
                        </a>
                    </p>
                    
              </div>

                )
            })}
        </div>
    )
}
export default BookCard