import React, { useRef } from 'react';

interface UploadProps {
  onUpload: (files: FileList) => void;
}

const Upload: React.FC<UploadProps> = ({ onUpload }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement> |
    React.DragEvent<HTMLDivElement>) => {
      let files: FileList | null = null;
      if ('dataTransfer' in e) {
        files = e.dataTransfer.files;
      } else if ('target' in e && e.target instanceof HTMLInputElement) {
        files = e.target.files;
      } 
      if (files) {
        onUpload(files);
      }
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
      <button onClick={() => fileInput.current?.click()}>Select Files</button>
      <div>Or drag & drop files here</div>
      {/* Add tagging UI here */}
    </div>
  );
};

export default Upload;