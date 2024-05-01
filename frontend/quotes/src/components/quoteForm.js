import React, { useState } from 'react';

function QuoteForm({ addQuote }) {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!quote || !author) return;
      addQuote({ text: quote, author });
      setQuote('');
      setAuthor('');
    };
  
    return (
      <div className="form-container">
        <div>
            <h2> Add Quotes </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={quote} onChange={e => setQuote(e.target.value)} placeholder="Enter a quote" />
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author's name" />
          <button type="submit">Add Quote</button>
        </form>
      </div>
    );
  }
  

export default QuoteForm;
