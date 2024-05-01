import React, { useState } from 'react';

function QuoteItem({ quote, deleteQuote, editQuote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedQuote, setEditedQuote] = useState(quote.text);
    const [editedAuthor, setEditedAuthor] = useState(quote.author);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      editQuote(quote._id, { text: editedQuote, author: editedAuthor });
      setIsEditing(false);
    };
  
    return (
      <div className="quote-item">
        {isEditing ? (
          <div className="edit-form">
            <input type="text" value={editedQuote} onChange={e => setEditedQuote(e.target.value)} />
            <input type="text" value={editedAuthor} onChange={e => setEditedAuthor(e.target.value)} />
            <div className="controls">
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        ) : (
          <div>
            <span className="quote-text">{quote.text}</span>
            <span className="author-text">- {quote.author}</span>
            <div className="controls">
              <button onClick={() => deleteQuote(quote._id)}>Delete</button>
              <button onClick={handleEdit}>Edit</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
export default QuoteItem;
