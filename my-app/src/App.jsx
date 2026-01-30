import React, { useState } from 'react';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div>
      <button onClick={toggleHighlight}>Toggle Highlight</button>
      <p className={isHighlighted ? 'highlight' : ''}>
        This is a paragraph.
      </p>
      <style>
        {`
          .highlight {
            background-color: yellow;
          }
        `}
      </style>
    </div>
  );
}

export default App;
