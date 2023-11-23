import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark,handleRead}) => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return (

        <div className="md:w-2/3 m-5">


            <h1 className="text-4xl mb-3">Blogs : {blogs.length}</h1>
            {

                blogs.map(blog=><Blog 
                key={blog.id}  
                blog={blog} 
                handleBookmark={handleBookmark}
                handleRead={handleRead} >

                </Blog>)

            }

        </div>
    );
};

Blogs.propTypes={
    handleBookmark:PropTypes.func,
    handleRead:PropTypes.func
}


export default Blogs;