

import React from 'react';

function Hotels({ trip }) {
  console.log("trip:", trip);

  let tripData = {};
  try {
    tripData = typeof trip?.tripData === "string" ? JSON.parse(trip.tripData) : trip.tripData;
  } catch (error) {
    console.error("Failed to parse tripData:", error);
  }

  const hotels = tripData?.hotels || [];

  console.log("Parsed tripData:", tripData);
  console.log("Hotels:", hotels);

  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>

      {hotels.length === 0 ? (
        <p className="text-gray-500 mt-2">No hotel recommendations available.</p>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
          {hotels.map((item, index) => (
            <div key={index} className="mt-4">
              <div className="transform hover:scale-110 transition-all duration-300 ease-in-out">
                <img
                  src="/placeholder.jpg"
                  alt={item.name || "Hotel"}
                  className="rounded-xl h-40 w-full object-cover"
                />

                <div className='my-2 flex flex-col gap-2'>
                  <h2 className='font-medium'>{item.name}</h2>
                  <h2 className='text-xs text-gray-500'>📍 {item.address}</h2>
                  <h2 className='text-sm text-gray-700'>💵 {item.priceRange}</h2>
                  <h2 className='text-sm text-gray-700'>⭐ {item.rating}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Hotels;
