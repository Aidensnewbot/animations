document.addEventListener("DOMContentLoaded", function () {
    const animationBox = document.querySelector(".animation-box");
    const startButton = document.getElementById("startButton");

    let position = -5; // Initial position

    startButton.addEventListener("click", () => {
        playAnimation();
    });

    function playAnimation() {
        const interval = setInterval(() => {
            position += 3; // Adjust the speed of animation by changing this value
            animationBox.style.transform = `translateX(${position}px)`;
            
            if (position >= 400) {
                clearInterval(interval); // Stop the animation when it reaches a certain point
            }
        }, 50); // Adjust the interval to control the smoothness of the animation
    }
});
