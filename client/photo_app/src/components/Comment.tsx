import React, { useState } from 'react';

interface Comment {
    id: number;
    author: string;
    text: string;
    timestamp: string;
}

interface CommentProps {
    photoId: number;
    comments: Comment[];
    onAddComment: (photoId: number, comment: Omit<Comment, 'id' | 'timestamp'>) => void;

}

const CommentSection: React.FC<CommentProps> = ({ photoId, comments, onAddComment }) => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (author.trim() || !text.trim()) {
            alert('Please fill out both fields.');
            return;
        }
        onAddComment(photoId, { author, text });
        setAuthor('');
        setText('');
    }

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <strong>{comment.author}</strong>{''}
                        <span style={{ color: 'gray', fontSize: '0.9rem' }}>
                            ({new Date(comment.timestamp).toLocaleString()})
                        </span>
                        <p>{comment.text}</p>
                    </div>
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}

            <form onSubmit={handleSubmit} className="comment-form">
                <input
                    type="text"
                    placeholder="Your name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="input-field"
                    required
                />
                <textarea
                    placeholder="Write a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="input-field"
                    rows={3}
                    required
                ></textarea>
                <button type="submit" className="button">Post Comment</button>
            </form>
           </div>
    );
};

export default CommentSection;