import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './custom.css';
import CreateUsers from './components/CreateUsers';
import EditUsers from './components/EditUsers';
import ListUsers from './components/ListUsers';


function App() {
  return (
    <Router>
      <div className='main-container'>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">ListUsers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/edit">EditUsers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/create">CreateUsers</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/list" element={<ListUsers />} />
          <Route path="/user/edit" element={<EditUsers />} />
          <Route path="/user/create" element={<CreateUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
