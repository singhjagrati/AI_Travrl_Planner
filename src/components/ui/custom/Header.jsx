// import React, { useEffect } from 'react';
// import Button from '../../ui/Button';
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { googleLogout } from '@react-oauth/google';  // <-- Import added here

// function Header() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const login = () => {
//     setOpenDailog(true);
//   };   

//   useEffect(() => {
//     console.log(user);
//   }, []);

//   return (
//     <div className="p-4 shadow-sm flex justify-between items-center px-5">
//       <img src="/logo.svg" alt="Logo" />
//       <div>
//         {user ? (
//           <div className="flex items-center gap-5">
//             <Button variant="outline" className="rounded-full">My Trips</Button>
//             <Popover>
//               <PopoverTrigger>
//                 <img
//                   src={user?.profilePicture}
//                   alt="Profile"
//                   className="h-[35px] w-[35px] rounded-full"
//                 />
//               </PopoverTrigger>
//               <PopoverContent>
//                 <h2
//                   className="cursor-pointer"
//                   onClick={() => {
//                     googleLogout();
//                     localStorage.removeItem('user');
//                     window.location.reload();
//                   }}
//                 >
//                   Logout
//                 </h2>
//               </PopoverContent>
//             </Popover>
//           </div>
//         ) : (
//           <Button onClick={() => setOpenDailog(true)}>Sign In</Button>
//         )}
//       </div>
    
              
//     </div>
//   );
// }

// export default Header;





import React, { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout } from '@react-oauth/google';

function Header() {
  const [openDailog, setOpenDailog] = useState(false); // ✅ This line was missing
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="p-4 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" alt="Logo" />
      <div>
        {user ? (
          <div className="flex items-center gap-5">
            <Button variant="outline" className="rounded-full">My Trips</Button>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.profilePicture}
                  alt="Profile"
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.removeItem('user');
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDailog(true)}>Sign In</Button> // ✅ This will now work
        )}
      </div>
    </div>
  );
}

export default Header;






// import React, { useEffect, useState } from 'react';
// import Button from '../../ui/Button';
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
// import { googleLogout, GoogleLogin } from '@react-oauth/google';
// import jwtDecode from 'jwt-decode';
// import { FcGoogle } from 'react-icons/fc';

// function Header() {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
//   const [openDialog, setOpenDialog] = useState(false);

//   useEffect(() => {
//     console.log(user);
//   }, [user]);

//   const handleLogout = () => {
//     googleLogout();
//     localStorage.removeItem('user');
//     setUser(null);
//     window.location.reload();
//   };

//   const handleLoginSuccess = (credentialResponse) => {
//     const decoded = jwtDecode(credentialResponse.credential);
//     localStorage.setItem('user', JSON.stringify(decoded));
//     setUser(decoded);
//     setOpenDialog(false);
//     window.location.reload();
//   };

//   const handleLoginError = () => {
//     console.error('Login Failed');
//   };

//   return (
//     <div className="p-4 shadow-sm flex justify-between items-center px-5">
//       <img src="/logo.svg" alt="Logo" />

//       <div>
//         {user ? (
//           <div className="flex items-center gap-5">
//             <Button variant="outline" className="rounded-full">My Trips</Button>

//             <Popover>
//               <PopoverTrigger>
//                 <img
//                   src={user?.picture}
//                   alt="Profile"
//                   className="h-[35px] w-[35px] rounded-full"
//                 />
//               </PopoverTrigger>
//               <PopoverContent>
//                 <h2 className="cursor-pointer" onClick={handleLogout}>Logout</h2>
//               </PopoverContent>
//             </Popover>
//           </div>
//         ) : (
//           <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
//         )}
//       </div>

//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src='/logo.svg' alt="App Logo" />
//               <h2 className='font-bold text-lg mt-7 text-center'>Sign In With Google</h2>
//               <p className='text-center'>Sign in to the App with Google authentication securely</p>

//               <div className='w-full mt-5 flex justify-center'>
//                 <GoogleLogin
//                   onSuccess={handleLoginSuccess}
//                   onError={handleLoginError}
//                   width="100%"
//                 />
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default Header;


// import React, { useEffect, useState } from 'react';
// import { googleLogout, GoogleLogin } from '@react-oauth/google';
// import jwtDecode from 'jwt-decode';

// function Header() {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

//   const handleLogout = () => {
//     googleLogout();
//     localStorage.removeItem('user');
//     setUser(null);
//     window.location.reload();
//   };

//   const handleLoginSuccess = (credentialResponse) => {
//     const decoded = jwtDecode(credentialResponse.credential);
//     localStorage.setItem('user', JSON.stringify(decoded));
//     setUser(decoded);
//     window.location.reload();
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>My App</h1>
//       {user ? (
//         <>
//           <img src={user.picture} alt="Profile" style={{ width: 40, borderRadius: '50%' }} />
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log('Login Failed')} />
//       )}
//     </div>
//   );
// }

// export default Header;
