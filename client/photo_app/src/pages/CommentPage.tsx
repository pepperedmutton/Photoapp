import { useLocation } from "react-router-dom";

import Comment from "../components/Comment";

// CommentPage component to show full comment UI for a given photoId from query string
export default function CommentPage(props: {
  comments: {
    id: number;
    photoId: number;
    author: string;
    text: string;
    timestamp: string;
  }[];
  onAddComment: (
    photoId: number,
    comment: { author: string; text: string }
  ) => void;
}) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const photoId = Number(params.get("photoId")) || 1;

  return (
    <Comment
      photoId={photoId}
      comments={props.comments.filter((c) => c.photoId === photoId)}
      onAddComment={props.onAddComment}
      standalone
    />
  );
}
