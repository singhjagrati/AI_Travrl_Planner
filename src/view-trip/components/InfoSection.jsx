

// **************************
// import React, { useEffect, useState } from "react";
// import { IoIosSend } from "react-icons/io";
// import { GetPlaceDetails } from "../../service/GlobalApi";

// const PHOTO_REF_URL = (photoName) =>
//   `https://places.googleapis.com/v1/${photoName}/media?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&maxHeightPx=1000&maxWidthPx=1000`;

// function InfoSection({ trip }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   useEffect(() => {
//     if (trip) {
//       fetchTripImage();
//     }
//   }, [trip]);

//   let parsedData = {};
//   try {
//     parsedData = typeof trip?.tripData === "string"
//       ? JSON.parse(trip.tripData)
//       : trip.tripData;
//   } catch (error) {
//     console.error("Failed to parse tripData:", error);
//   }

//   const location = parsedData?.tripDetails?.location || "Location not available";
//   const duration = parsedData?.tripDetails?.duration || "Duration not specified";
//   const budget = parsedData?.tripDetails?.budget || "Budget not specified";
//   const travelerCount = parsedData?.tripDetails?.travelerCount || "No. of travelers not specified";

//   const fetchTripImage = async () => {
//     try {
//       const resp = await GetPlaceDetails({ textQuery: location });
//       const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
//       if (photoName) {
//         setPhotoUrl(PHOTO_REF_URL(photoName));
//       }
//     } catch (error) {
//       console.error("Failed to fetch trip location image:", error);
//     }
//   };

//   return (
//     <div>
//       <img
//         src={photoUrl || "/placeholder.jpg"}
//         alt="Trip Banner"
//         className="h-[340px] w-full object-cover rounded-xl"
//       />

//       <div className="flex justify-between items-center">
//         <div className="my-5 flex flex-col gap-2">
//           <h2 className="text-2xl font-bold">{location}</h2>
//           <div className="flex gap-2 flex-wrap">
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">📆 {duration}</h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">💰 Budget: ₹{budget}</h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">🥂 No. of travelers: {travelerCount}</h2>
//           </div>
//         </div>
//         <button><IoIosSend /></button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;








// import React, { useEffect, useState } from "react";
// import { IoIosSend } from "react-icons/io";
// import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

// function InfoSection({ trip }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   useEffect(() => {
//     if (trip) {
//       fetchTripImage();
//     }
//   }, [trip]);

//   let parsedData = {};
//   try {
//     parsedData = typeof trip?.tripData === "string"
//       ? JSON.parse(trip.tripData)
//       : trip.tripData;
//   } catch (error) {
//     console.error("Failed to parse tripData:", error);
//   }

//   const location = parsedData?.tripDetails?.location || "Location not available";
//   const duration = parsedData?.tripDetails?.duration || "Duration not specified";
//   const budget = parsedData?.tripDetails?.budget || "Budget not specified";
//   const travelerCount = parsedData?.tripDetails?.travelerCount || "No. of travelers not specified";

//   const fetchTripImage = async () => {
//     try {
//       const resp = await GetPlaceDetails({ textQuery: location });
//       const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
//       if (photoName) {
//         setPhotoUrl(PHOTO_REF_URL(photoName));
//       }
//     } catch (error) {
//       console.error("Failed to fetch trip location image:", error);
//     }
//   };

//   return (
//     <div>
//       <img
//         src={photoUrl || "/placeholder.jpg"}
//         alt="Trip Banner"
//         className="h-[340px] w-full object-cover rounded-xl"
//       />

//       <div className="flex justify-between items-center">
//         <div className="my-5 flex flex-col gap-2">
//           <h2 className="text-2xl font-bold">{location}</h2>
//           <div className="flex gap-2 flex-wrap">
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">📆 {duration}</h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">💰 Budget: ₹{budget}</h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">🥂 No. of travelers: {travelerCount}</h2>
//           </div>
//         </div>
//         <button><IoIosSend /></button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;





// import React, { useEffect, useState } from "react";
// import { IoIosSend } from "react-icons/io";
// import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

// function InfoSection({ trip }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   useEffect(() => {
//     if (trip) {
//       fetchTripImage();
//     }
//   }, [trip]);

//   let parsedData = {};
//   try {
//     parsedData = typeof trip?.tripData === "string"
//       ? JSON.parse(trip.tripData)
//       : trip.tripData;
//   } catch (error) {
//     console.error("Failed to parse tripData:", error);
//   }

//   const location = parsedData?.tripDetails?.location || "Location not available";
//   const duration = parsedData?.tripDetails?.duration || "Duration not specified";
//   const budget = parsedData?.tripDetails?.budget || "Budget not specified";
//   const travelerCount = parsedData?.tripDetails?.travelerCount || "No. of travelers not specified";

//   const fetchTripImage = async () => {
//     try {
//       const resp = await GetPlaceDetails({ textQuery: location });
//       const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
//       if (photoName) {
//         setPhotoUrl(PHOTO_REF_URL(photoName));
//       }
//     } catch (error) {
//       console.error("Failed to fetch trip location image:", error);
//     }
//   };

//   return (
//     <div>
//       <img
//         src={photoUrl || "/placeholder.jpg"}
//         alt="Trip Banner"
//         className="h-[340px] w-full object-cover rounded-xl"
//       />

//       <div className="flex justify-between items-center">
//         <div className="my-5 flex flex-col gap-2">
//           <h2 className="text-2xl font-bold">{location}</h2>
//           <div className="flex gap-2 flex-wrap">
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">📆 {duration}</h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">💰 Budget: ₹{budget}</h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">🥂 No. of travelers: {travelerCount}</h2>
//           </div>
//         </div>
//         <button><IoIosSend /></button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;


// import React, { useEffect, useState, useMemo } from "react";
// import { IoIosSend } from "react-icons/io";
// import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

// function InfoSection({ trip }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   // Memoize parsed trip data
//   const parsedData = useMemo(() => {
//     try {
//       return typeof trip?.tripData === "string"
//         ? JSON.parse(trip.tripData)
//         : trip.tripData || {};
//     } catch (error) {
//       console.error("Failed to parse tripData:", error);
//       return {};
//     }
//   }, [trip?.tripData]);

//   const location = parsedData?.tripDetails?.location || null;
//   const duration = parsedData?.tripDetails?.duration || "Duration not specified";
//   const budget = parsedData?.tripDetails?.budget || "Budget not specified";
//   const travelerCount = parsedData?.tripDetails?.travelerCount || "No. of travelers not specified";

//   // Fetch image URL based on location
//   const fetchTripImage = async () => {
//     if (!location) return;
//     try {
//       const resp = await GetPlaceDetails({ textQuery: location });
//       const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
//       if (photoName) {
//         const url = PHOTO_REF_URL(photoName);
//         setPhotoUrl(url);
//       }
//     } catch (error) {
//       console.error("Failed to fetch trip location image:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTripImage();
//   }, [location]);

//   return (
//     <div>
//       <img
//         src={photoUrl || "/placeholder.jpg"}
//         alt="Trip Banner"
//         className="h-[340px] w-full object-cover rounded-xl"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "/placeholder.jpg";
//         }}
//       />

//       <div className="flex justify-between items-center">
//         <div className="my-5 flex flex-col gap-2">
//           <h2 className="text-2xl font-bold">{location || "Location not available"}</h2>
//           <div className="flex gap-2 flex-wrap">
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
//               📆 {duration}
//             </h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
//               💰 Budget: ₹{budget}
//             </h2>
//             <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
//               🥂 No. of travelers: {travelerCount}
//             </h2>
//           </div>
//         </div>
//         <button>
//           <IoIosSend />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;




import React, { useEffect, useState, useMemo } from "react";
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  // Memoize parsed trip data
  const parsedData = useMemo(() => {
    try {
      return typeof trip?.tripData === "string"
        ? JSON.parse(trip.tripData)
        : trip.tripData || {};
    } catch (error) {
      console.error("Failed to parse tripData:", error);
      return {};
    }
  }, [trip?.tripData]);

  const location = parsedData?.tripDetails?.location || null;
  const duration = parsedData?.tripDetails?.duration || "Duration not specified";
  const budget = parsedData?.tripDetails?.budget || "Budget not specified";
  const travelerCount = parsedData?.tripDetails?.travelerCount || "No. of travelers not specified";

  // Fetch image URL based on location
  const fetchTripImage = async () => {
    if (!location) return;
    try {
      const resp = await GetPlaceDetails({ textQuery: location });
      const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
      if (photoName) {
        const url = PHOTO_REF_URL(photoName);
        setPhotoUrl(url);
      }
    } catch (error) {
      console.error("Failed to fetch trip location image:", error);
    }
  };

  useEffect(() => {
    fetchTripImage();
  }, [location]);

  return (
    <div>
      <img
        src={photoUrl || "/placeholder.jpg"}
        alt="Trip Banner"
        className="h-[340px] w-full object-cover rounded-xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder.jpg";
        }}
      />

      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{location || "Location not available"}</h2>
          <div className="flex gap-2 flex-wrap">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📆 {duration}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              💰 Budget: ₹{budget}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🥂 No. of travelers: {travelerCount}
            </h2>
          </div>
        </div>
        <button>
          <IoIosSend />
        </button>
      </div>
    </div>
  );
}

export default InfoSection;
