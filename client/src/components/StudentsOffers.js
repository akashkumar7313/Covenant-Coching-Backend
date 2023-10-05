import React, { useState, useEffect, useCallback } from "react";
import { firebase } from "../../src/components/db/firebase";
import { MdDeleteForever } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

const StudentsOffers = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [uploading, setUploading] = useState(false); // To track the upload process

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file); // Store the selected file object

    // Set the selected image name (just for display)
    setSelectedImageName(file.name);
  };
  

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setSelectedImageName(image.name);
  };

  const handleSaveButtonClick = () => {
    if (selectedImage) {
      setUploading(true);
      const storageRef = firebase.storage().ref(`images/${selectedImage.name}`);
      const uploadTask = storageRef.put(selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (error) => {
          setUploading(false);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            firebase.database().ref("images").push({
              url: downloadURL,
              name: selectedImage.name,
            });

            // Clear the selected image and name
            setSelectedImage(null);
            setSelectedImageName("");
            setUploading(false);
          });
        }
      );
    }
  };

  const [selectedImageName, setSelectedImageName] = useState(""); // To display the selected image name

  return (
    <div className=" bg-cyan-600">
      <div className=" p-3">
      <div className="flex flex-col items-center rounded-[10px]">
        <div className="flex flex-wrap justify-center border border-cyan-900 rounded-[10px] bg-slate-400">
          {imageData.map((image) => (
            <div
              key={image.id}
              className="m-4 w-[460px] border border-pink-500 rounded-[10px] bg-pink-100 "
            >
              <img
                src={image.url}
                alt="Uploaded"
                className="rounded-[10px] h-auto cursor-pointer"
                onClick={() => handleImageSelect(image)}
              />
              <div className="flex justify-center">
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default StudentsOffers;
