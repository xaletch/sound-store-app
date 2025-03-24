// import { useCallback, useEffect, useState } from "react";

// const SLIDES_COUNT = 3;

export const Welcome = () => {}
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [progress, setProgress] = useState([0, 0, 0]);

//   useEffect(() => {
//     if (currentSlide >= SLIDES_COUNT) return;

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const newProgress = [...prev];
//         newProgress[currentSlide] += 1.67; // 100% / 60 (1 сек)
//         return newProgress;
//       });
//     }, 16.7); // ~60 FPS

//     const timeout = setTimeout(() => {
//       if (currentSlide < SLIDES_COUNT - 1) {
//         setCurrentSlide((prev) => prev + 1);
//       }
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, [currentSlide]);

//   const handleClick = () => {
//     if (currentSlide < SLIDES_COUNT - 1) {
//       setCurrentSlide((prev) => prev + 1);
//     }
//   };

//   return (
//     <div 
//       className="relative h-screen w-full overflow-hidden cursor-pointer"
//     >
//       <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-10">
//         {[...Array(SLIDES_COUNT)].map((_, index) => (
//          <div key={index} className="w-full h-1 bg-gray-700 rounded overflow-hidden">
//          <div
//            className="h-full bg-green-400 transition-all"
//            style={{ width: `${progress[index]}%` }}
//          ></div>
//         </div>
//         ))}
//       </div>

//       {/* Слайды */}
//       <div
//         className="flex h-full transition-transform duration-500"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {/* Слайд 1 */}
//         <div className="w-full h-full flex-shrink-0 bg-blue-500 flex items-center justify-center text-white text-4xl">
//           Slide 1
//         </div>

//         {/* Слайд 2 */}
//         <div className="w-full h-full flex-shrink-0 bg-green-500 flex items-center justify-center text-white text-4xl">
//           Slide 2
//         </div>

//         {/* Слайд 3 */}
//         <div className="w-full h-full flex-shrink-0 bg-purple-500 flex items-center justify-center text-white text-4xl">
//           {/* {activeSlide === SLIDES_COUNT - 1 && (
//             <button
//               className="px-6 py-3 bg-white text-purple-500 rounded-lg hover:bg-opacity-90 transition"
//               onClick={nextSlide}
//             >
//               Finish
//             </button>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };