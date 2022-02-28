import {useParams, useLocation} from "react-router-dom"
import NewBook from "./NewBook";



const Book = () =>{
  let params = useParams()
  let location = useLocation()
//TODO: figure out what is happening in the section below
  return (
    <div> 
      <h1>Book Page</h1>
      <p>{JSON.stringify(params)}</p>
      <p>{JSON.stringify(location)}</p>
      <h1>Book:</h1>
      <p>{JSON.stringify(location.state)}</p>
     <h1>Book Title:</h1>
     <p>{params.title}</p>
    <p>UPDATE NOT NEW</p>
    <NewBook />
    </div>
  )
}

export default Book; 
