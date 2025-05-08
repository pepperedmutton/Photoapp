type APIResult = {
  message: string;
  code: number;
  data?: object | null;
};

interface Metadata {
  name: string;
  camera: string;
  lens: string;
  iso: string;
  shutter: string;
  aperture: string;
}

interface Photo {
  id: number;
  url: string;
  metadata: Metadata;
}

export type { APIResult, Metadata, Photo };
