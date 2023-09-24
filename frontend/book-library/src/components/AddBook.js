import React, {useState} from "react";
import axios from 'axios';

const AddBook = (props) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [synopsis, setSynopsis] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post(`http://localhost:8000/booklibrary/`, {
                title : title,
                author : author,
                genre : genre,
                synopsis : synopsis
            });

            setTitle('');
            setAuthor('');
            setGenre('');
            setSynopsis('');
        }catch(error){
            console.error('Error Adding Book: ', error);
        }
    };

    return(
        <div className="container mt-5">
            <h2 className="mb-4">Add New Book</h2>
            <form onSubmit={handleSubmit} className="mb-5">
                <div className='mb-3'>
                    <label className="form-label">Book Title:</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Author:</label>
                    <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Book Genre:</label>
                    <input type="text" className="form-control" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Book Synopsis:</label>
                    <textarea className='form-control' value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required></textarea>
                </div>
                <button type='submit' className="addBook">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;