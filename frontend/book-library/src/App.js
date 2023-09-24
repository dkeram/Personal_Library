import axios from 'axios';
import './App.css';
import AddBook from './components/AddBook.js';
import BookList from './components/BookList.js';
import React, { useEffect, useState } from 'react';


function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try{
      const response = await axios.get(`http://localhost:8000/booklibrary/`);
      setBooks(response.data);
    }catch(error){
      console.error('Error fetching Books: ', error);
    }
  };

  useEffect(() =>{
    fetchBooks();
  }, []);

  return (
   <div className="App">
    <header className="App-Header">
      <h1>Book Library</h1>
      <AddBook refreshBooks = {fetchBooks} />
      <BookList books = {books} refreshBooks = {fetchBooks} />
    </header>
   </div>
  );
}

export default App;
