// import { useEffect, useCallback } from 'react';

// const DrumPad = ({ padKey, padId, audioSrc, updateDisplay }) => {
//   const playSound = useCallback(() => {
//     const audio = new Audio(audioSrc);
//     audio.play();
//     updateDisplay(padId);
//   }, [audioSrc, padId, updateDisplay]);

//   useEffect(() => {
//     function handleKeyPress(e) {
//       if (e.key.toUpperCase() === padKey) {
//         playSound();
//       }
//     }
//     document.addEventListener('keydown', handleKeyPress);

//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [padKey, playSound]);

//   return (
//     <div
//       className="drum-pad"
//       id={padId}
//       onClick={playSound}
//     >
//       {padKey}
//     </div>
//   );
// };

// export default DrumPad;
