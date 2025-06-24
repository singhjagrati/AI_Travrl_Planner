

// ********************************

// import React, { useEffect, useState } from "react";
// import { GetPlaceDetails } from "../../service/GlobalApi";

// const PHOTO_REF_URL = (photoName) =>
//   `https://places.googleapis.com/v1/${photoName}/media?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&maxHeightPx=400&maxWidthPx=400`;

// function HotelCardItem({ hotel }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   useEffect(() => {
//     if (hotel?.name && hotel?.address) {
//       fetchPlacePhoto();
//     }
//   }, [hotel]);

//   const fetchPlacePhoto = async () => {
//     try {
//       const resp = await GetPlaceDetails({ textQuery: `${hotel.name}, ${hotel.address}` });
//       const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
//       if (photoName) {
//         setPhotoUrl(PHOTO_REF_URL(photoName));
//       }
//     } catch (error) {
//       console.error("Failed to fetch hotel photo:", error);
//     }
//   };

//   return (
//     <a
//       href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel.name}, ${hotel.address}`)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="mt-4 transform transition-all cursor-pointer hover:scale-105 block"
//     >
//       <div className="bg-white shadow-md rounded-xl overflow-hidden">
//         <img
//           src={photoUrl || "/placeholder.jpg"}
//           alt={hotel.name || "Hotel"}
//           className="rounded-t-xl h-40 w-full object-cover"
//         />
//         <div className="my-2 px-2 flex flex-col gap-2">
//           <h2 className="font-medium">{hotel.name}</h2>
//           <h2 className="text-xs text-gray-500">📍 {hotel.address}</h2>
//           <h2 className="text-sm text-gray-700">💵 {hotel.priceRange}</h2>
//           <h2 className="text-sm text-gray-700">⭐ {hotel.rating}</h2>
//         </div>
//       </div>
//     </a>
//   );
// }

// export default HotelCardItem;






// import React, { useEffect, useState } from "react";
// import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

// function HotelCardItem({ hotel }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   useEffect(() => {
//     if (hotel) {
//       fetchPlacePhoto();
//     }
//   }, [hotel]);

//   const fetchPlacePhoto = async () => {
//     try {
//       const resp = await GetPlaceDetails({ textQuery: hotel.name });
//       const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
//       if (photoName) {
//         setPhotoUrl(PHOTO_REF_URL(photoName));
//       }
//     } catch (error) {
//       console.error("Failed to fetch hotel image:", error);
//     }
//   };

//   return (
//     <a
//       href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//         `${hotel.name}, ${hotel.address}`
//       )}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="mt-4 transform transition-all cursor-pointer hover:scale-105 block"
//     >
//       <div className="bg-white shadow-md rounded-xl overflow-hidden">
//         <img
//           src={photoUrl || "/placeholder.jpg"}
//           alt={hotel.name || "Hotel"}
//           className="rounded-xl h-200px w-full object-cover"
//         />
//         <div className="my-2 px-2 flex flex-col gap-2">
//           <h2 className="font-medium">{hotel.name}</h2>
//           <h2 className="text-xs text-gray-600">📍 {hotel.address}</h2>
//           <h2 className="text-sm text-gray-700">💵 {hotel.priceRange}</h2>
//           <h2 className="text-sm text-gray-700">⭐ {hotel.rating}</h2>
//         </div>
//       </div>
//     </a>
//   );
// }

// export default HotelCardItem;



import React, { useEffect, useState } from "react";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    if (hotel?.name) {
      fetchPlacePhoto();
    }
  }, [hotel]);

  const fetchPlacePhoto = async () => {
    try {
      const resp = await GetPlaceDetails({ textQuery: hotel.name });
      const photoReference = resp?.data?.places?.[0]?.photos?.[0]?.photoReference || resp?.data?.places?.[0]?.photos?.[0]?.name;

      if (photoReference) {
        const photoUrl = PHOTO_REF_URL(photoReference);
        setPhotoUrl(photoUrl);
      }
    } catch (error) {
      console.error("Failed to fetch hotel image:", error);
    }
  };

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${hotel.name}, ${hotel.address}`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 transform transition-all cursor-pointer hover:scale-105 block"
    >
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <img
          src={photoUrl || "/placeholder.jpg"}
          alt={hotel.name || "Hotel"}
          className="rounded-xl h-[200px] w-full object-cover"
        />
        <div className="my-2 px-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel.name}</h2>
          <h2 className="text-xs text-gray-600">📍 {hotel.address}</h2>
          <h2 className="text-sm text-gray-700">💵 {hotel.priceRange}</h2>
          <h2 className="text-sm text-gray-700">⭐ {hotel.rating}</h2>
        </div>
      </div>
    </a>
  );
}

export default HotelCardItem;
