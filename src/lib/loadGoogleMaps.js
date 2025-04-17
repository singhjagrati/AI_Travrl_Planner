// src/lib/loadGoogleMaps.js
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_PLACE_API_KEY, // Make sure your .env file has this key
  libraries: ['places'],
});

export default loader;
