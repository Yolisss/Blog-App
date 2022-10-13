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
    <>
      <div className="title">
        <header> Welcome All </header>
        <br></br>
        {/* <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setSearchTerm(e.target.value)} */}
        {/* /> */}
      </div>
    </>
  );
};

export default AllBlogs;
