import React from "react"
import { Link } from "react-router-dom";
import "./style.css"
const BlogList=(props)=>{

    const Blogs= props.Blogs;
    const title = props.title;

    return(
        <>  
            <h1 className="title">{title}</h1>
            {Blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                    <div className="title">{blog.Name}</div>
                    <div className="author">written by :{blog.Auther}</div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default BlogList;
