import React, { useState, useEffect, useCallback } from "react";
import { firebase } from "../../src/components/db/firebase";

const StudentsOffers = () => {
  const [imageData, setImageData] = useState([]);

  const fetchImages = useCallback(() => {
    const imagesRef = firebase.database().ref("images");

    imagesRef.on("value", (snapshot) => {
      const images = [];
      snapshot.forEach((childSnapshot) => {
        const image = childSnapshot.val();
        images.push({
          id: childSnapshot.key,
          url: image.url,
          name: image.name, // Retrieve image name from the database
          // Other relevant data
        });
      });
      setImageData(images);
    });
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  
  return (
    <div className="">
      <div className=" px-3">
      <div className="flex flex-col items-center rounded-[10px]">
        <div className="flex flex-wrap justify-center rounded-[10px]">
          {imageData.map((image) => (
            <div
              key={image.id}
              className="m-4 w-[460px] border border-pink-500 rounded-[10px] bg-pink-100 "
            >
              <img
                src={image.url}
                alt="Uploaded"
                className="rounded-[10px] h-auto cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default StudentsOffers;
