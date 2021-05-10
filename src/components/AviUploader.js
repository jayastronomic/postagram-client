import React, { useRef } from "react";

const AviUploader = (props) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded)
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="fas fa-user-circle fa-7x text-gray-500"
      ></button>
      <input
        style={{ display: "none" }}
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </>
  );
};
export default AviUploader;