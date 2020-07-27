// Constant Global Objects
const output = document.querySelector('.output');
const message = document.querySelectorAll('.message span');
let score = 0;


// Change colors when cursor is either in or outside the box 
output.addEventListener("mouseenter", function() {
    output.style.backgroundColor = "orangered";
})
output.addEventListener("mouseleave", function() {
    output.style.backgroundColor = "white";
})

// Track mouse's position and shows coordinates
output.addEventListener("mousemove", function(e) {
    console.log(e.x);
    console.log(e.y);
    message[0].innerText = e.x;
    message[1].innerText = e.y;
})

// Creating the box and random movement for the game
document.addEventListener("DOMContentLoaded", function(){
    // Creating the box
    let div = document.createElement("div");
    div.classList.add("box");
    output.appendChild(div);
    div.x = div.offsetLeft;
    div.y = div.offsetTop;
    // Random Color
    div.ranColor = "#" + Math.random().toString(16).substr(-6);
    div.style.backgroundColor = div.ranColor;
    // Red when box is hovered
    div.addEventListener("mouseenter", function(e) {
        div.style.backgroundColor = "red";
    })
    // Back to initial color when cursor is away
    div.addEventListener("mouseleave", function(e) {
        div.style.backgroundColor = div.ranColor;
    })
    // Random color when box is clicked
    div.addEventListener("click", function(e) {
        div.ranColor = "#" + Math.random().toString(16).substr(-6);
        div.style.backgroundColor = div.ranColor;
        score++
        message[2].innerText = score;
    });
    // Random movements
    div.steps = Math.random() * 20;
    div.direction = Math.floor(Math.random() * 4);
    // Animation function called move
    window.requestAnimationFrame(move);
})
// move function for the box
function move() {
    // Variables for the speed and box
    let speed = Math.random() * 8 + 9;
    const box = document.querySelector(".box");
    // make boundaries for the box
    let bounds = output.getBoundingClientRect();
    box.steps--;
    if (box.steps < 0) {
        // Creating random directions and steps
        box.direction = Math.floor(Math.random() * 4);
        box.steps = Math.random() * 20;
    }
    // Moving directions of up, down, left, and right
    if (box.direction == 0 && box.x < bounds.right - 100) {
        box.x += speed;
    }
    else if (box.direction == 1 && box.x > bounds.left) {
        box.x -= speed;
    }
    else if (box.direction == 2 && box.y < bounds.bottom - 100) {
        box.y += speed;
    }
    else if (box.direction == 3 && box.y > bounds.top) {
        box.y -= speed;
    }

    // Updated the box's style
    box.style.top = box.y + "px";
    box.style.left = box.x + "px";


    // CALL THE ANIMATION AGAIN!
    window.requestAnimationFrame(move);

}