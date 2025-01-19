document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Create 800 boxes and append them to the container
    for (let i = 0; i < 800; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Generate a random color for each box
        const randomColor = getRandomColor();
        square.setAttribute("data-color", randomColor); // Store the color as a data attribute

        container.appendChild(square);

        // Event listener for hover effect
        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = randomColor; // Apply the random color on hover
            square.style.transition = "background-color 1s ease-out";
        });

        // Event listener for mouse leave to reset the color smoothly
        square.addEventListener("mouseleave", function () {
            setTimeout(() => {
                square.style.backgroundColor = '#ddd'; // Reset to original color after 1 second
            }, 1000);
        });
    }
});
