import React, { useState } from "react";
import "../Styles/UploadImage.css";
import axios from "axios";
import GetImage from "./GetImage";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [event, setEvent] = useState(false);
  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async (props) => {
    console.log(props.data);
    const formData = new FormData();
    formData.append("image", selectedImage);
    try {
      const image = await axios.post(
        "http://localhost:5000/file/imageUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(image);
      setEvent(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="wrapper">
      <input type="file" className="inputTag" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <GetImage event={event} setEvent={setEvent} />
    </div>
  );
};

export default UploadImage;
