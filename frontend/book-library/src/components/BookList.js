import React, {useState} from "react";
import axios from 'axios';


const BookList = (props) => {
    const [selectedBook, setSelectedBook] = useState(null);

    const handleDelete = async(bookId) => {
        try{
            await axios.delete(`http://localhost:8000/booklibrary/${bookId}/`);
            props.refreshBooks();
        }catch(error){
            console.error('Error Deleting Book: ', error);
        }
    };

    const handleBookClick = (bookId) => {
        if(selectedBook === bookId){
            setSelectedBook(null);
        }else{
            setSelectedBook(bookId);
        }
    };



    return(
        <div className="container mt-5">
            <h2 className="mb-4">All Books</h2>
            <ul className="list-group">
                {props.books.map(book => (
                    <li key = {book.id}>
                        <div>
                            <span 
                                onClick = {()=> {handleBookClick(book.id)}}
                                style = {{cursor: "pointer" }}>
                                <b>{book.title}</b>
                            </span>
                            <button className="btn btn-danger" onClick={() => handleDelete(book.id) }>Delete</button>
                        </div>
                        {selectedBook === book.id && (
                            <div>
                                <strong>Author:</strong>
                                <p dangerouslySetInnerHTML={{ __html: book.book_author.replace(/\n/g, '<br />') }}></p>
                                <strong>Genre:</strong>
                                <p dangerouslySetInnerHTML={{ __html: book.book_genre.replace(/\n/g, '<br />') }}></p>
                                <strong>Synopsis:</strong>
                                <p dangerouslySetInnerHTML={{ __html: book.book_synopsis.replace(/\n/g, '<br />') }}></p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;