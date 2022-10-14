import { useState, useEffect } from "react";
import { useReducer } from "react";

const Form = ({ onBlogAdd }) => {
  const [blogs, setBlogs] = useState([]);

  // create useReducer for changing values
  const reducer = (state, action) => {
    console.log(action, "this is the action");
    switch (action.type) {
      case "addTitle":
        return { ...state, title: action.payload };
      case "addImages":
        return { ...state, Image: action.payload };
      case "addParagraph":
        return { ...state, Paragraph: action.payload };
      case "clearForm":
        return { title: "", image: "", content: "" };
      default:
        return state;
    }
  };
  const initialState = {
    title: "",
    image: "",
    paragraph: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddBlog = async (e) => {
    e.preventDefault();

    const newForm = {
      title: state.title,
      image: state.image,
      paragraph: state.paragraph,
    };

    //New Indiv data will be sent to server and new data will be posted
    const response = await fetch("http://localhost:8080/disneyblog", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    const content = await response.json();
    onBlogAdd(content);
    //calling a specific part of your reducer type
    //whenever we press submit, all the values in the boxes will be cleared
    dispatch({ type: "clearForm" });
  };
  return (
    <>
      <div className="addBlog">
        <h2 className="title">Add a New post</h2>
        <form onSubmit={handleAddBlog}>
          <br></br>
          <label>Title: </label>
          <input
            type="text"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "addTitle", payload: e.target.value })
            }
          />
          <br></br>
          <label>Image: </label>
          <input
            type="text"
            value={state.image}
            onChange={(e) =>
              dispatch({ type: "addImages", payload: e.target.value })
            }
          />
          <br></br>
          <label>Paragraph: </label>
          <input
            type="text"
            value={state.paragraph}
            onChange={(e) =>
              dispatch({ type: "addParagraph", payload: e.target.value })
            }
          />
          <br></br>
          <input type="submit" />
        </form>
      </div>
    </>
  );
  //   <OnBlogAdd />;
};

export default Form;
