

// **************************


// import React from 'react';
// import HotelCardItem from './HotelCardItem';

// function Hotels({ trip }) {
//   let tripData = {};
//   try {
//     tripData = typeof trip?.tripData === "string" ? JSON.parse(trip.tripData) : trip.tripData;
//   } catch (error) {
//     console.error("Failed to parse tripData:", error);
//   }

//   const hotels = tripData?.hotels || [];

//   return (
//     <div>
//       <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

//       {hotels.length === 0 ? (
//         <p className="text-gray-500 mt-2">No hotel recommendations available.</p>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
//           {hotels.map((hotel, index) => (
//             <HotelCardItem key={index} hotel={hotel} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Hotels;




import React from 'react';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  let tripData = {};
  try {
    tripData =
      typeof trip?.tripData === "string"
        ? JSON.parse(trip.tripData)
        : trip.tripData;
  } catch (error) {
    console.error("Failed to parse tripData:", error);
  }

  const hotels = tripData?.hotels || [];

  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

      {hotels.length === 0 ? (
        <p className="text-gray-500 mt-2">No hotel recommendations available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {hotels.map((item, index) => (
            <HotelCardItem key={index} hotel={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Hotels;
