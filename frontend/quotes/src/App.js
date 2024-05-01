import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteForm from './components/quoteForm';
import QuoteList from './components/quoteList';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const res = await axios.get('http://localhost:5000/quotes');
    setQuotes(res.data);
  };

  const addQuote = async (quote) => {
    const res = await axios.post('http://localhost:5000/quotes', quote);
    setQuotes([...quotes, res.data]);
  };

  const deleteQuote = async (id) => {
    await axios.delete(`http://localhost:5000/quotes/${id}`);
    setQuotes(quotes.filter(quote => quote._id !== id));
  };

  const editQuote = async (id, quote) => {
    const res = await axios.put(`http://localhost:5000/quotes/${id}`, quote);
    const updatedQuotes = quotes.map(item => item._id === id ? res.data : item);
    setQuotes(updatedQuotes);
  };

  return (
    <div>
      <QuoteForm addQuote={addQuote} />
      <QuoteList quotes={quotes} deleteQuote={deleteQuote} editQuote={editQuote} />
    </div>
  );
}

export default App;
