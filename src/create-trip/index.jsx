import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import loader from '../lib/loadGoogleMaps';
import { SelectBudgetOptions, SelectTravelsList } from '../constants/options.jsx';
import { Toaster, toast } from 'sonner';
import { chatSession } from '../service/AIModal.jsx';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../service/firebaseConfig';

import { AiOutlineLoading3Quarters } from "react-icons/ai";



import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { FcGoogle } from "react-icons/fc";
import { LogIn, Save } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate, } from 'react-router-dom';


const AI_PROMPT_TEMPLATE = `
Generate Travel Plan for Location: {{location}}, for {{days}} Days for {{travelWith}} with a {{budget}} budget.
Provide:
1. Hotel options (Name, Address, Price, Image URL, Coordinates, Rating, Description)
2. Daily itinerary (Place Name, Details, Image URL, Coordinates, Ticket Price, Rating, Visit Time)
3. Best times to visit each location
in JSON format.
`;

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [budget, setBudget] = useState(null);
  const [travelCompanion, setTravelCompanion] = useState(null);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [openDailog, setOpenDialog] = useState(false);

  const navigate=useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    loader
      .load()
      .then(() => {
        console.log('Google Maps API loaded!');
      })
      .catch((e) => {
        console.error('Failed to load Google Maps API:', e);
        toast.error('Failed to load map services');
      });
  }, []);

  const validateForm = () => {
    if (!formData?.location) {
      toast.warning("Please select a destination ⚠️");
      return false;
    }
    if (!formData?.days || formData.days < 1) {
      toast.warning("Please enter valid trip days (1-5) ⚠️");
      return false;
    }
    if (formData?.days > 5) {
      toast.warning("Maximum trip duration is 5 days ⚠️");
      return false;
    }
    if (!formData?.budget) {
      toast.warning("Please select a budget ⚠️");
      return false;
    }
    if (!formData?.travelWith) {
      toast.warning("Please select travel companions ⚠️");
      return false;
    }
    return true;
  };

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => console.log(codeResponse),
  //   onError: (error) => console.log('Login Failed:', error),
  // });

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Google login success:', tokenResponse);
      GetUserProfile(tokenResponse);
    },
    onError: (error) => console.log('Login Failed:', error),
    scope: 'profile email openid', // ✅ add this line
  });
  

  const OnGenerateTrip = async () => {

    const user=localStorage.getItem('user');

    if(!user)
    {
      setOpenDialog(true);
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const FINAL_PROMPT = AI_PROMPT_TEMPLATE
        .replace("{{location}}", formData.location)
        .replace("{{days}}", formData.days)
        .replace("{{budget}}", formData.budget)
        .replace("{{travelWith}}", formData.travelWith);

      // console.log("Final AI Prompt:", FINAL_PROMPT);

      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result?.response?.text());
      SaveAiTrip(result?.response?.text());

      toast.success("Trip plan generated successfully! 🚀");
    } catch (error) {
      toast.error("Failed to generate trip plan");
      console.error("Generation error:", error);
    } finally {
      setIsLoading(false);
    }
  };
   
   
   const SaveAiTrip=async (tripData) => {

    setIsLoading(true);
      const user=JSON.parse(localStorage.getItem('user'));
      const docId = Date.now().toString();
      await setDoc(doc(db, "AITrips", docId), {
        userSlections: formData,
        tripData:tripData,
        userEmail:user?.email,
        id:docId,

      });
      console.log("Trip data saved successfully!");
      setIsLoading(false);
      navigate('/view-trip/'+docId);
  }


  const GetUserProfile = (tokenInfo) => {
    axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'application/json',
      },
    })
    .then((response) => {
      console.log("User Profile:", response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      setOpenDialog(false);
      // toast.success("User profile fetched successfully! 🚀");
      OnGenerateTrip();
    })
    .catch((error) => {
      console.error('Failed to fetch user profile:', error);
    });
  };
  

  return (
    <div className="max-w-6xl mx-auto">
      <div className="sm:px-10 md:px-20 lg:px-32 px-5 mt-10">
        <h2 className="font-bold text-3xl">Tell us your travel preferences 🏕️🌴</h2>
        <p className="mt-3 text-gray-500 text-lg">
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>

        {/* Destination */}
        <div className="mt-12 flex flex-col gap-4">
          <h2 className="text-xl font-medium">What is your destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (val) => {
                setPlace(val);
                handleInputChange('location', val?.label || '');
              },
              placeholder: 'Search for a destination...',
              isClearable: true,
              className: "w-full",
            }}
          />
        </div>

        {/* Days */}
        <div className="mt-8">
          <h2 className="text-xl font-medium">How many days are you planning your trip?</h2>
          <input
            type="number"
            min="1"
            max="5"
            onChange={(e) => handleInputChange('days', e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter number of days (1-5)"
          />
        </div>

        {/* Budget */}
        <div className="mt-8">
          <h2 className="text-xl font-medium">What is your budget?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {SelectBudgetOptions.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setBudget(item);
                  handleInputChange('budget', item.title);
                }}
                className={`p-4 border-2 rounded-lg cursor-pointer hover:shadow-md transition ${
                  budget?.id === item.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Companion */}
        <div className="mt-8">
          <h2 className="text-xl font-medium">
            Who are you traveling with?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {SelectTravelsList.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setTravelCompanion(item);
                  handleInputChange('travelWith', item.people);
                }}
                className={`p-4 border-2 rounded-lg cursor-pointer hover:shadow-md transition ${
                  travelCompanion?.id === item.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Generate Button */}
      <div className="text-right mt-10 px-10">
        <button
           disabled={isLoading}
           onClick={OnGenerateTrip}
           className="px-6 py-2 black font-semibold rounded-lg"
            >
             {isLoading ? (
             <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin mr-2" />
            ) : (
            "Generate Trip"
           )}
        </button>
      </div>

        
        <Dialog open={openDailog} >
        <DialogContent>
          <DialogHeader>
             <DialogDescription>
                <img src='/logo.svg'/>
                <h2 className='font-bold text-lg mt-7 text-center'>Sign In With Google</h2>
                <p className='text-center'>Sign in to the App with Google authentication securely</p>

                <button 
                onClick={login}
                className='w-full mt-5 flex gap-4 items-center justify-center border p-2 rounded-md'>
                 
                  <FcGoogle className='h-7 w-7'/>
                  Sign In With Google
                 
                </button>
               
             </DialogDescription>
          </DialogHeader>
        </DialogContent>
        </Dialog>
        


  


      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default CreateTrip;


