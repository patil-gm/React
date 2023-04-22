import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails =()=>{

    const API ='http://localhost:8000/blogs/';
  
    const {id} = useParams();
    const {data : blog,error,ispending} = useFetch(API + id);
//  useFetch it is a custom hook that i have made to get the data 
    const navigate = useNavigate();

    const handleClick=()=>{
        fetch(API + blog.id , {method : 'DELETE'})
          .then(()=>{
              navigate('/');
          })
    }
    
    
    return (
        <div className="blg-details">
            { ispending && <div>Loading......!</div> }
            { error && <div>{error}</div> }
            { blog && <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <p>{blog.body}</p>
                <button onClick={handleClick}>delete blog</button>
                </article>}
        </div>
);}

export default BlogDetails;
