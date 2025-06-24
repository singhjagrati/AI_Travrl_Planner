
// import React, { useEffect, useState } from 'react';
// import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

// function PlaceCardItem({ place }) {
//   const [photoUrl, setPhotoUrl] = useState(null);

//   useEffect(() => {
//     const fetchTripImage = async () => {
//       if (!place?.placeName) return;

//       try {
//         const resp = await GetPlaceDetails({ textQuery: place.placeName });
//         const photoName = resp.data.places?.[0]?.photos?.[0]?.name;
//         if (photoName) {
//           setPhotoUrl(PHOTO_REF_URL(photoName));
//         } else {
//           setPhotoUrl(null);
//         }
//       } catch (error) {
//         console.error("Failed to fetch trip location image:", error);
//         setPhotoUrl(null);
//       }
//     };

//     fetchTripImage();
//   }, [place?.placeName]);

//   let parsedData = {};
//   try {
//     parsedData = typeof place?.tripData === "string"
//       ? JSON.parse(place.tripData)
//       : place.tripData;
//   } catch (error) {
//     console.error("Failed to parse tripData:", error);
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
//       <div className="h-40 bg-gray-200 relative">
//         {photoUrl ? (
//           <img
//             src={photoUrl}
//             alt={`${place.placeName || 'Place'} image`}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="absolute inset-0 flex items-center justify-center text-gray-500">
//             <span className="text-sm">No image available</span>
//           </div>
//         )}
//       </div>

//       <div className="p-4">
//         <div className="flex justify-between items-start">
//           <h3 className="font-semibold text-lg text-gray-800">
//             {place.placeName || 'Unknown Place'}
//           </h3>
//           {place.rating && (
//             <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
//               ★ {place.rating}
//             </span>
//           )}
//         </div>

//         <p className="text-sm text-gray-600 mt-2">
//           {place.details || 'No details available'}
//         </p>

//         {/* Example use of parsedData if needed */}
//         {/* {parsedData.description && (
//           <p className="text-sm text-gray-600 mt-1">{parsedData.description}</p>
//         )} */}

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

// export default PlaceCardItem;





// ******DEEPSE******




// import React, { useEffect, useState } from 'react';
// import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

// function PlaceCardItem({ place }) {
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTripImage = async () => {
//       if (!place?.placeName) {
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         const resp = await GetPlaceDetails({ 
//           textQuery: place.placeName,
//           maxResultCount: 1
//         });
        
//         console.log("API Response:", resp.data); // Debug log
        
//         const places = resp.data?.places;
//         if (places && places.length > 0) {
//           const photos = places[0]?.photos;
//           if (photos && photos.length > 0) {
//             const photoName = photos[0].name;
//             console.log("Photo Name:", photoName); // Debug log
//             setPhotoUrl(PHOTO_REF_URL(photoName));
//           }
//         }
//         setError(null);
//       } catch (error) {
//         console.error("Failed to fetch trip location image:", error);
//         setError("Failed to load image");
//         setPhotoUrl(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTripImage();
//   }, [place?.placeName]);

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
//       <div className="h-40 bg-gray-200 relative">
//         {loading ? (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="animate-pulse text-gray-500">Loading image...</div>
//           </div>
//         ) : error ? (
//           <div className="absolute inset-0 flex items-center justify-center text-red-500">
//             {error}
//           </div>
//         ) : photoUrl ? (
//           <img
//             src={photoUrl}
//             alt={`${place.placeName || 'Place'} image`}
//             className="w-full h-full object-cover"
//             onError={() => {
//               setError("Failed to load image");
//               setPhotoUrl(null);
//             }}
//           />
//         ) : (
//           <div className="absolute inset-0 flex items-center justify-center text-gray-500">
//             <span className="text-sm">No image available</span>
//           </div>
//         )}
//       </div>

//       {/* Rest of your card content remains the same */}
//       <div className="p-4">
//         <div className="flex justify-between items-start">
//           <h3 className="font-semibold text-lg text-gray-800">
//             {place.placeName || 'Unknown Place'}
//           </h3>
//           {place.rating && (
//             <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
//               ★ {place.rating}
//             </span>
//           )}
//         </div>

//         <p className="text-sm text-gray-600 mt-2">
//           {place.details || 'No details available'}
//         </p>

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

// export default PlaceCardItem;

import React, { useEffect, useState } from 'react';
import { GetPlaceDetails, PHOTO_REF_URL } from "../../service/GlobalApi";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlacePhoto = async () => {
      if (!place?.placeName) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const resp = await GetPlaceDetails({
          textQuery: place.placeName,
          maxResultCount: 1
        });

        const places = resp.data?.places;
        if (places && places.length > 0) {
          const photos = places[0]?.photos;
          const photoRef = photos?.[0]?.photoReference || photos?.[0]?.photo_reference;
          if (photoRef) {
            const url = PHOTO_REF_URL(photoRef);
            setPhotoUrl(url);
          } else {
            setPhotoUrl(null);
          }
        } else {
          setPhotoUrl(null);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching place details:", err);
        setError("Failed to load image");
        setPhotoUrl(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacePhoto();
  }, [place?.placeName]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="h-40 bg-gray-200 relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="animate-pulse text-gray-500">Loading image...</span>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center text-red-500">
            {error}
          </div>
        ) : photoUrl ? (
          <img
            src={photoUrl}
            alt={`${place.placeName} image`}
            className="w-full h-full object-cover"
            onError={() => {
              setError("Image failed to load");
              setPhotoUrl(null);
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            No image available
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-gray-800">{place.placeName || "Unknown Place"}</h3>
          {place.rating && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
              ★ {place.rating}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-2">{place.details || "No details available"}</p>

        <div className="mt-4 pt-2 border-t border-gray-100 space-y-1">
          {place.bestTime && (
            <p className="text-sm font-medium text-orange-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {place.bestTime}
            </p>
          )}
          {place.ticketPrice && (
            <p className="text-sm text-gray-700 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              {place.ticketPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaceCardItem;
