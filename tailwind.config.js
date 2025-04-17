/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   corePlugins: {
//     // Ensure these core plugins are not disabled
//     transform: true,
//     scale: true,
//     transitionProperty: true,
//   },
// }


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   darkMode: 'class', // Enable class-based dark mode
//   theme: {
//     extend: {
//       colors: {
//         background: 'var(--background)', // Using custom background variable
//         foreground: 'var(--foreground)', // Using custom foreground variable
//       },
//     },
//   },
//   plugins: [],
// }
