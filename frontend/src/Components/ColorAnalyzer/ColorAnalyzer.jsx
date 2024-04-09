import React, { useState } from "react";

const ColorAnalyzer = () => {
  const [previewURL, setPreviewURL] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [hexCodes, setHexCodes] = useState([]);
  const items = ["Skin", "Hair", "Eye"];

  async function query(data) {
    const response = await fetch("https://api-inference.huggingface.co/models/google/gemma-1.1-7b-it", {
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }

  const handleClick = (e) => {
    if (selectedColors.length >= 3) {
      return;
    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    canvas.width = e.target.width;
    canvas.height = e.target.height;
    context.drawImage(e.target, 0, 0, e.target.width, e.target.height);
    const pixel = context.getImageData(x, y, 1, 1).data;
    const color = `#${((1 << 24) | (pixel[0] << 16) | (pixel[1] << 8) | pixel[2]).toString(16).slice(1)}`;
    setSelectedColors((prevColors) => [...prevColors, color]);
    console.log(color);
  };

  const handleGenerate = () => {
    if (selectedColors.length >= 3) {
      query({
        inputs: `my skin tone is ${selectedColors[0]}, hair color is ${selectedColors[1]}, what is my color analysis season, give 10 different unique colors for my season in hex and response in json only`,
      }).then((response) => {
        const text = JSON.stringify(response);
        const regex = /#([0-9A-Fa-f]{6})/g;
        const extractedHexCodes = [...text.matchAll(regex)].map((match) => match[0]).slice(3);
        setHexCodes(extractedHexCodes);
      });
    }
  };

  const handleReset = () => {
    setHexCodes([]);
    setSelectedColors([]);
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
        <img src={previewURL} alt="Preview" onClick={handleClick} style={{ width: "100%", height: "auto" }} />
      )}
      {selectedColors.map((color, index) => (
        <div key={color}>
          <div className="label">{items[index]} Color</div>
          <div
            key={index}
            style={{
              width: "60px",
              height: "60px",
              border: "5px solid",
              backgroundColor: color,
            }}
          ></div>
        </div>
      ))}
      {hexCodes?.map((code) => (
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "5px solid",
            backgroundColor: code,
          }}
        ></div>
      ))}
      <button onClick={handleGenerate}>Generate</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ColorAnalyzer;
