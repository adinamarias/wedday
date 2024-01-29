import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Text, Rect, Image } from 'react-konva';
import { useImage } from 'react-konva';

function InvitationEditor() {
  const [image] = useImage('/path_to_your_image.jpg');
  const [text, setText] = useState('Adaugă text aici');
  const stageRef = useRef();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    const dataURL = stageRef.current.toDataURL();
    // Aici poți salva dataURL sau face altceva cu el
    console.log('Imagine salvată:', dataURL);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleSaveClick}>Salvează</button>
      <Stage width={600} height={400} ref={stageRef}>
        <Layer>
          {image && (
            <Image image={image} width={600} height={400} />
          )}
          <Text
            text={text}
            x={100}
            y={100}
            fontSize={20}
            fill="black"
            draggable
          />
        </Layer>
      </Stage>
    </div>
  );
}

export default InvitationEditor;
