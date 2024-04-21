
import React from 'react';
import Card from './ui/Cards/Card';
import cardData from './ui/Cards/cardData';

const App = () => {

  return (
    <section className='bg-[#fafafa] w-full py-4'>
      <div className="text-gray-600 border bg-white mx-auto max-w-screen-lg rounded-lg">
        <div className='p-4'>
          <div className="flex items-center w-full justify-between p-4 bg-[#f0e6ff] border border-gray-200 md:gap-x-4 rounded-md">
            <p className="text-md text-gray-800 selection:bg-[#DAF996]">
              <span className='font-bold'>Lorem ipsum dolor sit amet.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt omnis inventore velit?
            </p>
          </div>
        </div>
        <div className="p-4 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch">
            {cardData.map((card, index) => (
              <Card
                key={index}
                status={card.status}
                title={card.title}
                description={card.description}
                author={card.author}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;