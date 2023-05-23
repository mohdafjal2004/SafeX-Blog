import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/getImage.css";

const GetImage = ({ event, setEvent }) => {
  const [data, setdata] = useState([]);
  console.log(event);

  const Image = async () => {
    try {
      const imageData = await axios.get("http://localhost:5000/file/getImage");
      console.log(imageData.data.image);
      setdata(imageData.data.image);
    } catch (error) {
      console.log(error);
    }
  };

  // const ImagebyId = async () => {
  //   const imageData = await axios.get(
  //     "http://localhost:5000/file/getImage/6469fa55c6796597b46f8fc1"
  //   );
  //   //   setdata(imageData.data.file);
  //   // console.log(imageData.data.file);
  // };

  useEffect(() => {
    Image();
    setEvent(false);
    // ImagebyId();
  }, [event]);

  return (
    <div className="wrapper">
      {data
        .map((item, index) => {
          return (
            <div key={index} className="wrapper">
              <img
                className="image"
                src={`data:image/jpeg;base64,${item.file}`}
                alt="allImages"
              />
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default GetImage;
