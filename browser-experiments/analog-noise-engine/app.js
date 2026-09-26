/* 
  📡 ANALOG NOISE ENGINE • PROCEDURAL BEHAVIOR RUNTIME
  Direct DOM Canvas Manipulation • Phosphor Decay Emulation
*/

const canvas = document.getElementById("noiseCanvas");
const ctx = canvas.getContext("2d");

// Establish physical pixel density array dimensions
function resizeCanvas() {
  // Scaling resolution down slightly creates a heavier, more blocky vintage aesthetic
  canvas.width = canvas.offsetWidth / 2;
  canvas.height = canvas.offsetHeight / 2;
}

// Generate random monochromatic pixel data across the buffer matrix
function generateStatic() {
  const width = canvas.width;
  const height = canvas.height;

  // Create an empty raw image data buffer mapping
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;
  const bufferLength = data.length;

  // Loop through pixels in steps of 4 channels (Red, Green, Blue, Alpha)
  for (let i = 0; i < bufferLength; i += 4) {
    // Generate a random brightness value (0 = black, 255 = pure white)
    const grainIntensity = Math.floor(Math.random() * 255);

    // Emulate monochrome phosphor bias by tinting the noise data slightly green
    data[i] = Math.floor(grainIntensity * 0.15); // Low Red threshold
    data[i + 1] = Math.floor(grainIntensity * 0.75); // Dominant Toxic Green signature
    data[i + 2] = Math.floor(grainIntensity * 0.25); // Low Blue threshold
    data[i + 3] = 255; // Fully opaque Alpha matrix layer
  }

  // Paint the newly populated pixel data block back onto the terminal viewport
  ctx.putImageData(imgData, 0, 0);
}

// High-speed rendering loop trigger execution sequence
function simulationLoop() {
  generateStatic();

  // Request next screen frame refresh execution block
  requestAnimationFrame(simulationLoop);
}

// Initialize layout matrix and launch behavior thread loop
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
simulationLoop();

console.log(
  ">> ANALOG ENGINE SIMULATION MATRIX INTERFACE CORE EXECUTION LOADED SUCCESFULLY.",
);
