import React, { useEffect, useRef } from 'react';
import { StyledUploadWidget } from '../styles/general/UploadWidget.styled';
// useEffect and useRef used to reference to code whenever template file is used

const UploadWidget = ({ setUploadedImageURL }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  // Assigns image URL of previously uploaded image to the state variables
  //const [previousUploadedImage, setPreviousUploadedImage] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      styles: {
        palette: {
          tabIcon: "#A05C52",
          inactiveTabIcon: "#26291E",
          link: "#FFA51F",
          action: "#FF611F",
          sourceBg: "#FFF"
        }
      }
    }, function (error, result) {
      if (!error && result && result.event === "success") {
        // Route to delete previously uploaded image based on previously uploaded publicID/URL?
        const imageUrl = result.info.url;
        setUploadedImageURL(imageUrl);
        //setPreviousUploadedImage(imageUrl);
      }
    })
  }, [])

  return (
    <StyledUploadWidget onClick={(e) => {
      e.preventDefault()
      widgetRef.current.open()
    }}>
      Upload Image
    </StyledUploadWidget>
  );
};

export default UploadWidget;