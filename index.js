let container = document.getElementById("container")
let scoreElemenet = document.getElementById("scoreId")

let score = 0

for (let i=0; i<20; i++) {
    container.innerHTML += `
            <img 
                class="bubble" 
                onclick="remove(this)"
                src="bubble.png"
                style="top: ${randomInteger(0, 95)}%; 
                        left: ${randomInteger(0, 95)}%;"
            >
        `
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remove(bubble) {
    bubble.remove()
    score = score + 1
    scoreElemenet.innerHTML = "ניקוד: " + score
}