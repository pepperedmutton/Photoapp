import React, { useState } from 'react';

interface Metadata {
  name: string;
  camera: string;
  lens: string;
  iso: string;
  shutter: string;
  aperture: string;
}

interface UploadProps {
  onUpload: (file: File, metadata: Metadata) => void;
}

const Upload: React.FC<UploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<Metadata>({
    name: '',
    camera: '',
    lens: '',
    iso: '',
    shutter: '',
    aperture: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a photo to upload.');
      return;
    }
    onUpload(file, metadata);
    setFile(null);
    setMetadata({ name: '', camera: '', lens: '', iso: '', shutter: '', aperture: '' });
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h2>Upload Picture</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Photo Title"
        value={metadata.name}
        onChange={(e) => setMetadata({ ...metadata, name: e.target.value })}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Camera"
        value={metadata.camera}
        onChange={(e) => setMetadata({ ...metadata, camera: e.target.value })}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Lens"
        value={metadata.lens}
        onChange={(e) => setMetadata({ ...metadata, lens: e.target.value })}
        className="input-field"
      />

      <input
        type="text"
        placeholder="ISO"
        value={metadata.iso}
        onChange={(e) => setMetadata({ ...metadata, iso: e.target.value })}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Shutter Speed"
        value={metadata.shutter}
        onChange={(e) => setMetadata({ ...metadata, shutter: e.target.value })}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Aperture"
        value={metadata.aperture}
        onChange={(e) => setMetadata({ ...metadata, aperture: e.target.value })}
        className="input-field"
      />

      <button type="submit" className="button">Upload</button>
    </form>
  );
};

export default Upload;
