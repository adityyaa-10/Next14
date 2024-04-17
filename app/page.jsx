"use client"
import React, { useState, useEffect } from 'react';
import Card from './ui/Cards/Card';
import cardData from './ui/Cards/cardData';

const App = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10; // Number of cards to load per page

  const fetchMoreCards = () => {
    setLoading(true);

    // Simulating API call to fetch more data
    setTimeout(() => {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const newCards = cardData.slice(startIndex, endIndex);

      setVisibleCards(prevCards => [...prevCards, ...newCards]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    }, 1000); // Simulated delay, replace with actual API call
  };

  useEffect(() => {
    // Initial load of cards
    fetchMoreCards();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleScroll = () => {
    // Check if user has scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 200 // Adjust 200 based on your needs
    ) {
      // Load more cards if not already loading and there are more cards to load
      if (!loading && visibleCards.length < cardData.length) {
        fetchMoreCards();
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, visibleCards]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="text-gray-600 body-font mx-auto w-full">
      <div className="container px-5 md:px-11 py-11 mx-auto">
        <div className="flex flex-wrap">
          {visibleCards.map((card, index) => (
            <Card
              key={index}
              date={card.date}
              role={card.role}
              title={card.title}
              description={card.description}
              author={card.author}
            />
          ))}
          {loading && (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
