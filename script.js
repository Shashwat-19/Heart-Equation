const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
const kValueDisplay = document.getElementById("kValue");

// Set canvas dimensions
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

const width = canvas.width;
const height = canvas.height;

let k = 0; // Initial value of k

function drawAxes() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    // Draw x-axis
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
}

// Function to draw the heart graph
function drawHeart(kValue) {
    ctx.strokeStyle = "#ff0066";
    ctx.lineWidth = 2;

    const scale = Math.min(width, height) / 6; // Reduced scale for better fit

    ctx.beginPath();
    for (let x = -2; x <= 2; x += 0.01) {
        const xScaled = x * scale + width / 2;
        const yValue =
            Math.pow(Math.abs(x), 2 / 3) +
            0.9 * Math.sin(kValue * x) * Math.sqrt(3 - x * x);

        const yScaled = -yValue * scale + height / 2;

        if (x === -2) {
            ctx.moveTo(xScaled, yScaled);
        } else {
            ctx.lineTo(xScaled, yScaled);
        }
    }
    ctx.stroke();
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, width, height);

    drawAxes(); // Draw axes
    drawHeart(k); // Draw heart graph

    // Update k value on the screen
    kValueDisplay.textContent = k.toFixed(2);

    // Increment k
    k += 0.5;
    if (k <= 100) {
        requestAnimationFrame(animate); // Smooth animation
    }
}

// Start animation
animate();
