import React, { useRef } from 'react';

const Upload = ({ onUpload }) => {
  const fileInput = useRef();

  const handleFiles = e => {
    const files = e.target.files || e.dataTransfer.files;
    onUpload(files);
  };

  return (
    <div
      className="upload-drop"
      onDrop={e => { e.preventDefault(); handleFiles(e); }}
      onDragOver={e => e.preventDefault()}
    >
      <input
        type="file"
        multiple
        ref={fileInput}
        style={{ display: 'none' }}
        onChange={handleFiles}
      />
      <button onClick={() => fileInput.current.click()}>Select Files</button>
      <div>Or drag & drop files here</div>
      {/* Add tagging UI here */}
    </div>
  );
};

export default Upload;