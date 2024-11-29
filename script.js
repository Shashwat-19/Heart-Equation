const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
const kValueDisplay = document.getElementById("kValue");

// Dynamically adjust canvas size
function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}

resizeCanvas(); // Initial resize

let k = 0; // Initial value of k

function drawAxes() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    // Draw x-axis
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

// Function to draw the heart graph
function drawHeart(kValue) {
    ctx.strokeStyle = "#ff0066";
    ctx.lineWidth = 2;

    // Dynamically calculate scale (reduced further for smaller heart)
    const scale = Math.min(canvas.width, canvas.height) / 4.5; // Smaller scale for better fitting

    ctx.beginPath();
    for (let x = -2; x <= 2; x += 0.01) {
        const xScaled = x * scale + canvas.width / 2; // Center horizontally
        const yValue =
            Math.pow(Math.abs(x), 2 / 3) +
            0.9 * Math.sin(kValue * x) * Math.sqrt(3 - x * x);

        const yScaled = -yValue * scale + canvas.height / 2; // Center vertically

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

// Listen for window resize to adjust canvas
window.addEventListener("resize", () => {
    resizeCanvas();
    animate(); // Re-render the animation on resize
});

// Start animation
animate();
