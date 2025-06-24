// import axios from 'axios';

// const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
//     'X-Goog-FieldMask': 'places.displayName,places.photos,places.id'
//   }
// };

// export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config);

// // ✅ Use the legacy photo API for browser compatibility
// export const PHOTO_REF_URL = (photoReference) =>
//     `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${photoReference}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;
  





import axios from 'axios';

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
    'X-Goog-FieldMask': [
      'places.photos',
      'places.displayName',
      'places.id',
    ]
  }
};

export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config);

export const PHOTO_REF_URL = (photoName) =>
  `https://places.googleapis.com/v1/${photoName}/media?key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}&maxHeightPx=1000&maxWidthPx=1000`;
