import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost.js"

function App() {
    return ( <
        div className = "App" >
            <Router >
                <Link to="/CreatePost">Create a Post</Link>
                <Link to="/"> Home Page</Link>
                <Routes >
                    <Route path = "/" element = {<Home/>}/>
                    <Route path ="/CreatePost" element = {<CreatePost/>}/>
                </Routes > 
            </Router> 
        </div>
    );
}

export default App;