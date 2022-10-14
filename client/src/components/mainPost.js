import { useState, useReducer, useEffect } from "react";
// import { useReducer } from "react";
import SocialCard from "./SocialCard";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  const getBlog = async () => {
    const response = await fetch(`http://localhost:8080/main`);
    const blogData = await response.json();

    console.log(blogData);

    setAllBlogs(blogData);
    setBlogs(blogData);
  };

  useEffect(() => {
    getBlog();
  }, []);

  const filterCards = (event) => {
    //this is what actually stores the text in your console
    //as you're typing in the search bar
    const value = event.target.value.toLowerCase();
    const filteredBlogs = allBlogs.filter((blog) =>
      `${blog.title}`.toLowerCase().includes(value)
    );
    setBlogs(filteredBlogs);
  };

  return (
    // big return statement for the component
    <>
      <div className="title">
        <h1>Tis the Season to be Spooky!</h1>
      </div>
      <input
        className="search-bar"
        placeholder="Search.."
        onInput={filterCards}
      />
      <div className="cards-container">
        {blogs.map((blog, index) => {
          // loops through students to grab every student
          return (
            <SocialCard blogData={blog} key={index} />
            // return to get data out of the anonymous function; big arrow means function
            // <p key={index}>
            //   {blog.title} {blog.images} {blog.paragraph} {blog.likes}
            // </p>
          );
        })}
      </div>
    </>
  );
};

export default AllBlogs;
