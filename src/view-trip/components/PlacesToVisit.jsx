// import React from 'react'

// function PlacesToVisit({trip}) {
//   console.log("Trip in PlacesToVisit:", trip); // Debug to check data structure
  
//   // Check if trip and tripData exist and if tripData is a string
//   if (!trip || !trip.tripData) return <div>No trip data available</div>;
  
//   // If tripData is a string (JSON), parse it
//   const tripData = typeof trip.tripData === 'string' 
//     ? JSON.parse(trip.tripData) 
//     : trip.tripData;
  
//   // Get the daily itinerary
//   const dailyItinerary = tripData.dailyItinerary;
  
//   // If there's no daily itinerary, show a message
//   if (!dailyItinerary) return <div>No itinerary available</div>;
  
//   // Convert object of days to array for mapping
//   const daysArray = Object.keys(dailyItinerary).map(dayKey => ({
//     day: dayKey,
//     places: dailyItinerary[dayKey]
//   }));
  
//   return (
//     <div>
//       <h2 className='font-bold text-lg mb-4'>Places to Visit</h2>
//       <div className="space-y-6">
//         {daysArray.map((dayData, index) => (
//           <div key={index} className="border rounded p-4 shadow-sm">
//             <h2 className='font-bold text-lg capitalize mb-2'>{dayData.day.replace(/day/, 'Day ')}</h2>
//             <div className="space-y-2">
//               {dayData.places.map((place, placeIndex) => (
//                 <div key={placeIndex} className="pl-4 border-l-2 border-gray-200">
//                   <h3 className="font-semibold">{place.placeName}</h3>
//                   <p className="text-sm text-gray-600">{place.details}</p>
//                   {place.bestTime && (
//                     <p className="text-sm font-medium text-orange-500 mt-1">
//                       Best Time: {place.bestTime}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PlacesToVisit







// import React from 'react'

// function PlacesToVisit({trip}) {
//   console.log("Trip in PlacesToVisit:", trip); // Debug to check data structure
  
//   // Check if trip and tripData exist and if tripData is a string
//   if (!trip || !trip.tripData) return <div>No trip data available</div>;
  
//   // If tripData is a string (JSON), parse it
//   const tripData = typeof trip.tripData === 'string' 
//     ? JSON.parse(trip.tripData) 
//     : trip.tripData;
  
//   // Get the daily itinerary
//   const dailyItinerary = tripData.dailyItinerary;
  
//   // If there's no daily itinerary, show a message
//   if (!dailyItinerary) return <div>No itinerary available</div>;
  
//   // Convert object of days to array for mapping
//   const daysArray = Object.keys(dailyItinerary).map(dayKey => ({
//     day: dayKey,
//     places: dailyItinerary[dayKey]
//   }));
  
//   return (
//     <div>
//       <h2 className='font-bold text-lg mb-4'>Places to Visit</h2>
//       <div className="space-y-6">
//         {daysArray.map((dayData, index) => (
//           <div key={index} className="mb-6">
//             <h2 className='font-bold text-lg capitalize mb-3'>{dayData.day.replace(/day/, 'Day ')}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {dayData.places.map((place, placeIndex) => (
//                 <PlaceCardItem key={placeIndex} place={place} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // New PlaceCardItem component
// function PlaceCardItem({ place }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
//       {/* Image area - using placeholder if no image available */}
//       <div className="h-40 bg-gray-200 relative">
//         <div className="absolute inset-0 flex items-center justify-center text-gray-500">
//           {place.imageUrl && !place.imageUrl.includes('example.com') ? (
//             <img src={place.imageUrl} alt={place.placeName} className="w-full h-full object-cover" />
//           ) : (
//             <span className="text-sm">No image available</span>
//           )}
//         </div>
//       </div>
      
//       {/* Content area */}
//       <div className="p-4">
//         <div className="flex justify-between items-start">
//           <h3 className="font-semibold text-lg text-gray-800">{place.placeName}</h3>
//           {place.rating && (
//             <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
//               ★ {place.rating}
//             </span>
//           )}
//         </div>
        
//         <p className="text-sm text-gray-600 mt-2">{place.details}</p>
        
//         <div className="mt-4 pt-2 border-t border-gray-100 space-y-1">
//           {place.bestTime && (
//             <p className="text-sm font-medium text-orange-500 flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               {place.bestTime}
//             </p>
//           )}
          
//           {place.ticketPrice && (
//             <p className="text-sm text-gray-700 flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
//               </svg>
//               {place.ticketPrice}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit








// import React from 'react'
// import PlaceCardItem from './PlaceCardItem' // Import the PlaceCardItem component

// function PlacesToVisit({trip}) {
//   console.log("Trip in PlacesToVisit:", trip); // Debug to check data structure
  
//   // Check if trip and tripData exist and if tripData is a string
//   if (!trip || !trip.tripData) return <div>No trip data available</div>;
  
//   // If tripData is a string (JSON), parse it
//   const tripData = typeof trip.tripData === 'string' 
//     ? JSON.parse(trip.tripData) 
//     : trip.tripData;
  
//   // Get the daily itinerary
//   const dailyItinerary = tripData.dailyItinerary;
  
//   // If there's no daily itinerary, show a message
//   if (!dailyItinerary) return <div>No itinerary available</div>;
  
//   // Convert object of days to array for mapping
//   const daysArray = Object.keys(dailyItinerary).map(dayKey => ({
//     day: dayKey,
//     places: dailyItinerary[dayKey]
//   }));
  
//   return (
//     <div>
//       <h2 className='font-bold text-lg mb-4'>Places to Visit</h2>
//       <div className="space-y-6">
//         {daysArray.map((dayData, index) => (
//           <div key={index} className="mb-6">
//             <h2 className='font-bold text-lg capitalize mb-3'>{dayData.day.replace(/day/, 'Day ')}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {dayData.places.map((place, placeIndex) => (
//                 <PlaceCardItem key={placeIndex} place={place} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PlacesToVisit



import React from 'react';
import PlaceCardItem from './PlaceCardItem'; // Import the PlaceCardItem component

function PlacesToVisit({ trip }) {
  console.log("Trip in PlacesToVisit:", trip);

  if (!trip || !trip.tripData) return <div>No trip data available</div>;

  let tripData;
  try {
    tripData = typeof trip.tripData === 'string'
      ? JSON.parse(trip.tripData)
      : trip.tripData;
  } catch (error) {
    console.error("Error parsing tripData:", error);
    return <div>Error loading trip data</div>;
  }

  const dailyItinerary = tripData.dailyItinerary;
  if (!dailyItinerary) return <div>No itinerary available</div>;

  const daysArray = Object.keys(dailyItinerary)
    .sort((a, b) => Number(a.match(/\d+/)) - Number(b.match(/\d+/)))
    .map(dayKey => ({
      day: dayKey,
      places: dailyItinerary[dayKey]
    }));

  return (
    <div>
      <h2 className='font-bold text-lg mb-4'>Places to Visit</h2>
      <div className="space-y-6">
        {daysArray.map((dayData, index) => (
          <div key={index} className="mb-6">
            <h2 className='font-bold text-lg capitalize mb-3'>{dayData.day.replace(/day/i, 'Day ')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dayData.places.map((place, placeIndex) => (
                <PlaceCardItem key={placeIndex} place={place} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
