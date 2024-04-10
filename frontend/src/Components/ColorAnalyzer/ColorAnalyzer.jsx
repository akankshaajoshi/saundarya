import React, { useState } from "react";
import "./ColourAnalyzer.css";
import axios from "axios";
import Cookies from "js-cookie";

const ColorAnalyzer = () => {
  const [previewURL, setPreviewURL] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [hexCodes, setHexCodes] = useState([]);
  const items = ["Skin", "Hair", "Eye"];

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/palette",
        {
          name: `Save ${Date.now()}`,
          palettes: hexCodes,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

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
    <div className="outer">
      <div className="container">
        <div className="instructions">
          <div className="heading">Pick an image</div>
          <div className="subheading">
            We recommend choosing an image clicked in natural light for the best results. <br />
            <div className="content">
              Select in order the part which resembles the most with your - skin color, hair color, and eye color from
              the image.
            </div>
          </div>
        </div>
        <div className="cols">
          <div className="image-container">
            {previewURL && <img src={previewURL} alt="Preview" onClick={handleClick} className="preview-image" />}
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="operations-container">
            <div className="selected-colors">
              {selectedColors.map((color, index) => (
                <div key={color} className="color-box">
                  <div className="label">{items[index]}</div>
                  <div
                    className="color"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="suggestions">
              <div className="subheading">Suggested palette:</div>
              <div className="hex-codes">
                {hexCodes?.map((code, index) => (
                  <div key={index} className="color-box">
                    <div
                      className="color"
                      style={{
                        backgroundColor: code,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div>
                <button onClick={handleGenerate}>Generate</button>
                <button onClick={handleReset}>Reset</button>
                {hexCodes.length > 0 && <button onClick={handleSave}>Save</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorAnalyzer;
