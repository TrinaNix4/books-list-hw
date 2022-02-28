import {useContext} from "react";
//import { Link } from "react-router-dom";
import { DataContext } from "../Source/BookSource";


const Books = () =>{
  const data = useContext(DataContext)
  return (
    <div>
      <h1>Books Page</h1>
      {JSON.stringify(data)}
      <hr />
      <button onClick={()=> data.setDemoState('changed in BOOKS')}>change text</button>
    <p>{data.demoState}</p>  
      <button onClick={()=> data.addBook({title:'Random Book Title'})}>Add Book</button>
      <button onClick={()=> data.updateBook({title:'ABCD', author: 'Trina Nixon'})}>Update Book</button>
      <button onClick={()=> data.deleteBook({title:'ABCD'})}>Delete Book</button>
      <button onClick={ data.getBooks}>get Books</button>
      {data.error && <p>{data.error}</p>}
    </div>
  )
}

export default Books; 
