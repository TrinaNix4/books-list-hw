import React, {useState} from 'react';
import axios from "axios";

//create a state we can share across components
export const DataContext = React.createContext();

const DataSource = (props)=>{
  const [books, setBooks] = useState([{author:"john doe", title: "Insert Book Title"}]);
  const [error, setError] = useState(null);
   const [demoState, setDemoState] = useState('hi i am demoState from the data source');


   const getBooks = async () => {
  try {
    let res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
    setBooks(res.data.data);
  } catch (err) {
    setError('Error Occured');
  }
};
//add
const addBook = (book)=>{
  let newBooks = [...books, book]
  setBooks(newBooks)
}
//update
const updateBook = (updateBookFromForm) => {
  let updateBooks = books.map(b=> b.title === updateBookFromForm.title ? updateBookFromForm : b )
  setBooks(updateBooks)
}
//delete
const deleteBook = (title) => {
  let filteredBooks = books.filter(b => b.title !== title)
setBooks(filteredBooks)
}


  const dataSourceState = {
    books:books, 
    demoState:demoState, 
    x:1, 
    setDemoState,
    addBook, 
    updateBook, 
    deleteBook,
    getBooks,
    error,
 };
return(
  <DataContext.Source value={dataSourceState}>

    {props.children}
  </DataContext.Source>
);
};

export default DataSource;