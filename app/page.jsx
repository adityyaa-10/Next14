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
    <section className='bg-[#fafafa] w-full py-24'>
      <div className="text-gray-600 body-font border bg-white mx-auto max-w-screen-lg rounded-lg">
        <div className='pl-4 pt-4 pr-4'>
          <div class=" flex items-center w-full justify-between p-4 bg-[#f0e6ff] border border-gray-200 md:gap-x-4 rounded-md">
            <p class="text-md leading-8 text-gray-800 "><span className='font-bold'>Lorem ipsum dolor sit amet.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt omnis inventore velit?</p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap p-2">
            {visibleCards.map((card, index) => (
              <Card
                key={index}
                status={card.status}
                title={card.title}
                description={card.description}
                author={card.author}
              />
            ))}
            {loading && (
              <div className=" fixed bottom-0 left-0 right-0 flex justify-center items-center h-16">
                <div className="spinner"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
