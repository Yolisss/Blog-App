import { useState, useReducer, useEffect } from "react";
// import { useReducer } from "react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlog = async () => {
    const response = await fetch(`http://localhost:8080/main`);
    const data = await response.json();

    console.log(data);
    setBlogs(data);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    // big return statement for the component
    <>
      <div>
        {blogs.map((blog, index) => {
          // loops through students to grab every student
          return (
            // return to get data out of the anonymous function; big arrow means function
            <p key={index}>
              {blog.title} {blog.images} {blog.paragraph} {blog.likes}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default AllBlogs;
