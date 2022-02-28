import {Link, useNavigate } from 'react-router-dom'
import {useState, useContext } from "react"
import DataProvider, {DataContext} from '../providers/DataProvider'

const NewBook = ()=>{
    const navigate = useNavigate()
    const data = useContext(DataContext)
    let [title, setTitle]= useState('')
    let [author, setAuthor]= useState('')
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        let newBook = {title, author}
        console.log(newBook)
        // have values from form, also the addUser func working what do I do
        data.addBook(newBook)
        // want to go back to users page?
        navigate('/Books')
    }
    return(
        <div>
        
            <h1>New Book </h1>
            <Link to='/Books'>Books page</Link>
            <form onSubmit={handleSubmit}>
                <p>Author's Full Name</p>
                <input value={author} onChange={(e)=>setAuthor(e.target.value)} />
                <p>Book Title</p>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} />
                <button>Add</button>
            </form>
      
        </div>
    )
}
export default NewBook