// src/soundPlayer.js
const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.currentTime = 0; // Reset to the start
  return audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export default playSound;