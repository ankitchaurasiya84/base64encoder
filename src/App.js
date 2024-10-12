import React from 'react';
import FileUploadBase64 from './../src/components/FileUploadBase64'; // Import the component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FileUploadBase64 /> {/* Use the Base64 file upload component */}
      </header>
    </div>
  );
}

export default App;