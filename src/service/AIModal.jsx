import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [
  ],
  responseMimeType: "application/json",
};

// async function run() {
  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Princess Juliana International Airport (SXM), Airport Road, Simpson Bay, Sint Maarten, for 2 Days for 1 with a Budget Friendly budget. Provide Hotel options (Name, Address, Price, Image URL, Coordinates, Rating, Description) Daily itinerary (Place Name, Details, Image URL, Coordinates, Ticket Price, Rating, Visit Time) Best times to visit each location\nin JSON format\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"tripDetails\": {\n    \"location\": \"Princess Juliana International Airport (SXM), Sint Maarten\",\n    \"duration\": \"2 Days\",\n    \"travelerCount\": 1,\n    \"budget\": \"Budget-Friendly\"\n  },\n  \"hotels\": [\n    {\n      \"name\": \"Simpson Bay Resort & Marina\",\n      \"address\": \"Simpson Bay, Sint Maarten\",\n      \"priceRange\": \"$$$\", \n      \"imageUrl\": \"https://example.com/simpsonbayresort.jpg\",  // Replace with actual image URL\n      \"coordinates\": \"[18.0416,-63.0667]\",\n      \"rating\": 4.0,\n      \"description\": \"Offers various room types with marina views.  May have deals depending on the season.\"\n    },\n    {\n      \"name\": \"Mary's Boon Beach Hotel\",\n      \"address\": \"Oyster Pond, Sint Maarten\",\n      \"priceRange\": \"$$\",\n      \"imageUrl\": \"https://example.com/marysboon.jpg\", // Replace with actual image URL\n      \"coordinates\": \"[18.0500,-63.0500]\",\n      \"rating\": 3.5,\n      \"description\": \"More budget-friendly option, closer to the beach.  Simple but clean rooms.\"\n    },\n        {\n      \"name\": \"Great Bay Beach Hotel\",\n      \"address\": \"Great Bay, Philipsburg, Sint Maarten\",\n      \"priceRange\": \"$$$\",\n      \"imageUrl\": \"https://example.com/greatbaybeachhotel.jpg\", //Replace with actual Image URL\n      \"coordinates\": \"[18.0300, -63.0500]\",\n      \"rating\": 4.2,\n      \"description\": \"Near the action, has a beautiful beachfront location but might be slightly more expensive than other options\"\n    }\n\n  ],\n  \"dailyItinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"Maho Beach\",\n        \"details\": \"Famous for watching planes land very close to the beach.\",\n        \"imageUrl\": \"https://example.com/mahobeach.jpg\", // Replace with actual image URL\n        \"coordinates\": \"[18.0407,-63.0521]\",\n        \"ticketPrice\": \"Free\",\n        \"rating\": 4.5,\n        \"bestTime\": \"Late morning or early afternoon for optimal plane viewing\"\n      },\n      {\n        \"placeName\": \"Philipsburg\",\n        \"details\": \"Explore the capital city, shop for souvenirs, and enjoy the waterfront.\",\n        \"imageUrl\": \"https://example.com/philipsburg.jpg\", // Replace with actual image URL\n        \"coordinates\": \"[18.0333, -63.0500]\",\n        \"ticketPrice\": \"Free\",\n        \"rating\": 4.0,\n        \"bestTime\": \"Late Morning to Early Evening\"\n      }\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"Mullet Bay Beach\",\n        \"details\": \"Relax on the beautiful beach, swim, or sunbathe.\",\n        \"imageUrl\": \"https://example.com/mulletbaybeach.jpg\", // Replace with actual image URL\n        \"coordinates\": \"[18.0667,-63.0333]\",\n        \"ticketPrice\": \"Free\",\n        \"rating\": 4.2,\n        \"bestTime\": \"Morning or afternoon for sunbathing\"\n      },\n      {\n        \"placeName\": \"Orient Bay Beach\",\n        \"details\": \"Known for its lively atmosphere and water sports.\",\n        \"imageUrl\": \"https://example.com/orientbaybeach.jpg\", // Replace with actual image URL\n        \"coordinates\": \"[18.0833, -63.0500]\",\n        \"ticketPrice\": \"Free (water sports extra)\",\n        \"rating\": 4.3,\n        \"bestTime\": \"Anytime, depending on your preferences (lively afternoons, calmer mornings)\"\n      }\n    ]\n  }\n}\n```\n\n**Remember to replace the placeholder image URLs with actual image URLs.**  Also, prices for accommodation can vary greatly depending on the season and availability.  The `$$$`, `$$` price range is a relative indicator.  You should check current prices on booking sites.  Finally, consider adding transportation details (taxi, bus, rental car) to the JSON for a more complete plan.\n"},
        ],
      },
    ],
  });
