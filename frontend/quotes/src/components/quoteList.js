import React from 'react';
import QuoteItem from './quoteItem';

function QuoteList({ quotes, deleteQuote, editQuote }) {
    return (
      <div className="list-container">
        {quotes.map((quote) => (
          <QuoteItem key={quote._id} quote={quote} deleteQuote={deleteQuote} editQuote={editQuote} />
        ))}
      </div>
    );
  }
  

export default QuoteList;
