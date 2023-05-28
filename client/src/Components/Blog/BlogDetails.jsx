import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/BlogDetails.css";
import TextareaAutosize from "react-textarea-autosize";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // * Entire API Data object
  const [data, setData] = useState({});

  // * Enabling or disabling the edit mode
  const [editMode, setEditMode] = useState(false);

  // * States for updating
  const [titleUpdate, setTitleUpdate] = useState("");
  const [SubjectUpdate, setSubjectUpdate] = useState("");
  const [NotesUpdate, setNotesUpdate] = useState("");

  // * State for error
  const [error, setError] = useState("");

  const fetchBlog = async () => {
    try {
      const blogData = await axios.get(
        `http://localhost:5000/blog/getById/${id}`
      );
      setData(blogData.data.blog);
    } catch (error) {
      if (error.response.status === 404) {
        setError("Blog Not Found");
      }
    }
  };

  useEffect(() => {
    fetchBlog();

    // Setting the initial value of input field from "data" state
    // variable so that direct editinf can be done
    if (data && data.BlogTitle) {
      setTitleUpdate(data.BlogTitle);
    }
    if (data && data.Subject) {
      setSubjectUpdate(data.Subject);
    }
    if (data && data.Notes) {
      setNotesUpdate(data.Notes);
    }
  }, [editMode]);

  //* From here the 𝘂𝗽𝗱𝗮𝘁𝗶𝗻𝗴 the text field using input field starts
  const handleUpdate = () => {
    setEditMode(true);
  };
  const handleTitleChange = (e) => {
    setTitleUpdate(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubjectUpdate(e.target.value);
  };
  const handleNotesChange = (e) => {
    setNotesUpdate(e.target.value);
  };

  //* After updating the input field, we save the response in database
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("BlogTitle", titleUpdate);
      formData.append("Subject", SubjectUpdate);
      formData.append("Notes", NotesUpdate);
      const response = await axios.put(
        `http://localhost:5000/blog/UpdateById/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  // * Function for deleting the blog
  const handleDelete = async () => {
    try {
      const blog = await axios.delete(
        `http://localhost:5000/blog/deleteById/${id}`
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detailContainer">
      <div className="detailWrapper">
        <img
          src={`data:image/jpeg;base64,${data.cover}`}
          alt=""
          className="blogCover"
        />
        <h1>
          {editMode ? (
            <input
              type="text"
              value={titleUpdate}
              name="BlogTitle"
              onChange={handleTitleChange}
              className="inputTitle"
            />
          ) : (
            <p className="BlogTitle">{data.BlogTitle}</p>
          )}
        </h1>
        <div>
          {editMode ? (
            <textarea
              type="text"
              value={SubjectUpdate}
              name="Subject"
              onChange={handleSubjectChange}
              className="inputTitle"
              maxLength="10"
            />
          ) : (
            <p className="blogSubject">{data.Subject}</p>
          )}
        </div>
        <div className="imageMargin">
          <img
            src={`data:image/jpeg;base64,${data.imageFile}`}
            alt=""
            style={{ height: "100px" }}
            className="imageFile"
          />
        </div>
        <div>
          {editMode ? (
            <TextareaAutosize
              minRows={5}
              maxRows={20}
              type="text"
              value={NotesUpdate}
              name="Notes"
              onChange={handleNotesChange}
              className="inputTitle"
            />
          ) : (
            <p className="blogNotes">{data.Notes}</p>
          )}
        </div>

        <div className="btns">
          {editMode ? (
            <button onClick={handleSave} className="btn">
              Save
            </button>
          ) : (
            <button onClick={handleUpdate} className="btn">
              Update
            </button>
          )}

          <button onClick={handleDelete} className="btn">
            Delete
          </button>
        </div>
      <h2>{error}</h2>
      </div>
    </div>
  );
};

export default BlogDetails;
