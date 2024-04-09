import React, { useState } from 'react';
import './Upload.css'; // Import CSS file for styling
import ColorAnalyzer from './../ColorAnalyzer/ColorAnalyzer.jsx';

const Upload = () => {
    const [image, setImage] = useState(null);
    const [skinColor, setSkinColor] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [selectedInput, setSelectedInput] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type && file.type.indexOf('image') === -1) {
                alert('Please select an image file.');
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePixelSelect = (e) => {
        if (!selectedInput) return;
        const img = e.target;
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const [r, g, b, _] = ctx.getImageData(x, y, 1, 1).data;
        const pixelColor = `rgb(${r}, ${g}, ${b})`;
        switch (selectedInput) {
            case 'skinColor':
                setSkinColor(pixelColor);
                break;
            case 'eyeColor':
                setEyeColor(pixelColor);
                break;
            case 'hairColor':
                setHairColor(pixelColor);
                break;
            default:
                break;
        }
    };

    const handleFormInputSelect = (input) => {
        setSelectedInput(input);
    };

    return (
        <div className="container">
            {/* Left half with form */}
            <div className="left">
                <form>
                    <h1 className="head"><b>Select Your Shades</b></h1>
                    <label htmlFor="skinColor" className="label-input">Skin Color:</label>
                    <input
                        type="text"
                        id="skinColor"
                        value={skinColor}
                        onChange={(e) => setSkinColor(e.target.value)}
                        onClick={() => handleFormInputSelect('skinColor')}
                    />

                    <label htmlFor="eyeColor" className="label-input">Eye Color:</label>
                    <input
                        type="text"
                        id="eyeColor"
                        value={eyeColor}
                        onChange={(e) => setEyeColor(e.target.value)}
                        onClick={() => handleFormInputSelect('eyeColor')}
                    />

                    <label htmlFor="hairColor" className="label-input">Hair Color:</label>
                    <input
                        type="text"
                        id="hairColor"
                        value={hairColor}
                        onChange={(e) => setHairColor(e.target.value)}
                        onClick={() => handleFormInputSelect('hairColor')}
                    />

                    <div className="buttons">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => { setSkinColor(''); setEyeColor(''); setHairColor(''); }}>Reset</button>
                    </div>
                </form>
                <input type="file" onChange={handleImageUpload} />
            </div>

            {/* Right half with uploaded image */}
            <div className="bottom">
                {image && (
                    <div className="image-container">
                        <img
                            className="uploaded-image"
                            src={image}
                            alt="Uploaded Image"
                            onMouseDown={handlePixelSelect}
                        />
                    </div>
                )}
            </div>
            <div className="right">
                <ColorAnalyzer/>
            </div>
    </div >
  );
};

export default Upload;
