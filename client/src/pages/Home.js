import React from 'react'
import axios from "axios";
import { useEffect , useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import {AuthContext} from "../helpers/AuthContext"
function Home() {

    const {authState} = useContext(AuthContext) 
    const [listOfPosts, setListOfPosts] = useState([]);
    let navigate = useNavigate( )
    useEffect(() => {
      
      if(!authState.status){
        navigate('/login')
      }
      else{
        axios.get("http://localhost:3001/posts").then((response) => {
          setListOfPosts(response.data);
        });
      }
    }, [])
    return (
      <div>{
        listOfPosts.map((value, key) => { 
            return (
              <div key= {key} className="post" onClick={() => {navigate(`/post/${value.id}`)}}> 
                <div className="title"> {value.title} </div>
                <div className="body"> {value.postText} </div>
                <div className="footer"> {value.username} </div>
              </div>
            )
        })}
      </div>
  );
}

export default Home
