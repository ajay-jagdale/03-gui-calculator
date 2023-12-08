document.addEventListener("DOMContentLoaded", function () {
    // Get the input and buttons
    const input = document.querySelector("input");
    const buttons = document.querySelectorAll("button");

    // Add click event listeners to the buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Handle different button clicks
            if (this.textContent === "=") {
                // Evaluate the expression and set the result in the input
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = "Error";
                }
            } else if (this.textContent === "AC") {
                // Clear the input
                input.value = "";
            } else if (this.textContent === "X") {
                // Backspace: remove the last character from the input
                input.value = input.value.slice(0, -1);
            } else {
                // Append the button's text to the input
                input.value += this.textContent;
            }
        });
    });
});
