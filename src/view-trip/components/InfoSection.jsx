// import React from 'react';

// function InfoSection({ trip }) {
//   console.log("Trip inside InfoSection:", trip); // Debugging

//   if (!trip) {
//     return <p>Loading trip info...</p>;
//   }

//   let parsedData = {};
//   try {
//     console.log("Trip Data:", trip.tripData); // Debugging
//     parsedData = JSON.parse(trip.tripData);
//   } catch (error) {
//     console.error("Failed to parse tripData:", error);
//   }

//   const userSelections = trip.userSlections || {};

//   return (
//     <div>
//       <img
//         src='/placeholder.jpg'
//         className='h-[340px] w-full object-cover rounded-xl'
//         alt='Trip Banner'
//       />

//       <div className='my-5 flex flex-col gap-2'>
//         <h2 className='text-2xl font-bold'>
//           {parsedData?.tripDetails?.location || "Location not available"}
//         </h2>

//         <div className='flex flex-wrap gap-2'>
//           <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>
//             {userSelections?.noOfDays
//               ? `${userSelections.noOfDays} Day`
//               : "Duration not specified"}
//           </h2>

//           <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>
//             {userSelections?.budget
//               ? `Budget: ₹${userSelections.budget}`
//               : "Budget not specified"}
//           </h2>

//           <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>
//             {userSelections?.traveler
//               ? `${userSelections.traveler} Traveler(s)`
//               : "No. of travelers not specified"}
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;

// import { Button } from '@/components/ui/Button'; // ✅ PascalCase
import React from 'react';
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  if (!trip) {
    return <p>Loading trip info...</p>;
  }

  let parsedData = {};
  try {
    parsedData = JSON.parse(trip.tripData);
  } catch (error) {
    console.error("Failed to parse tripData:", error);
  }

  const location = parsedData?.tripDetails?.location || "Location not available";
  const duration = parsedData?.tripDetails?.duration || "Duration not specified";
  const budget = parsedData?.tripDetails?.budget || "Budget not specified";
  const travelerCount = parsedData?.tripDetails?.travelerCount || "No. of travelers not specified";

  return (
    <div>
      <img
        src='/placeholder.jpg'
        className='h-[340px] w-full object-cover rounded-xl'
        alt='Trip Banner'
      />
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>{location}</h2>

        <div className="flex gap-2 flex-wrap">
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📆{duration}</h2>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰Budget: ₹{budget}</h2>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂No. of travelers: {travelerCount}</h2>
        </div>
        </div>
      <button><IoIosSend /></button>
      </div>
      
    </div>
  );
}

export default InfoSection;
