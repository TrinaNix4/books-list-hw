import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <nav
        style={{
          display: 'flex', 
          border: '2px solid green'
        }}
        >
        <Link to='/Books'>Books</Link> | {' '}
        <Link to='/About'>About</Link> | {' '}
        <Link to='/new_book'>New Book</Link>
      </nav>
      <Outlet /> 
    </div>
  );
}

export default App;
