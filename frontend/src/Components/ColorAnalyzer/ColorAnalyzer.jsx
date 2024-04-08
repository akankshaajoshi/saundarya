import React, { useState, useRef } from "react";

const ColorAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const handleMouseMove = (e) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    canvas.width = e.target.width;
    canvas.height = e.target.height;
    context.drawImage(e.target, 0, 0, e.target.width, e.target.height);
    const pixel = context.getImageData(x, y, 1, 1).data;
    const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    setSelectedColor(color);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {previewURL && (
        <img src={previewURL} alt="Preview" onMouseMove={handleMouseMove} style={{ width: "100%", height: "auto" }} />
      )}
      {selectedColor && (
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: selectedColor,
          }}
        ></div>
      )}
    </div>
  );
};

export default ColorAnalyzer;
