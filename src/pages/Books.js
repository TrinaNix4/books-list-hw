import {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";


const Books = () =>{
  const data = useContext(DataContext)
  return (
    <div>
      <h1>Books Page</h1>
      <Link to='/newBook'>Create a New Book Entry</Link>
      <hr />
      <button onClick={()=> data.setDemoState('changed in BOOKS')}>change text</button>
    
    {data.books.map(u=>{
    return(
      <div key={u.title}>
        <h1>{u.author} {u.title}</h1>
        <button onClick={() => {data.deleteBook(u.title)}}>Delete</button>
        <Link to={`/books/${u.title}`} state={u}>show</Link> 
    </div>
  )
        })}
        <button onClick={data.getBooks}>getBooks</button>
        <hr />
        {JSON.stringify(data)}
        <hr />
        </div>
  )
}
export default Books; 
