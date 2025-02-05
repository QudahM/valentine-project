const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const gifs = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnIyeDRwZTFpdzR2aTVkd2swdXFrZGo1MWdzbzJvNnRqZDEzMzVyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QKAdzJUr4eKwCjWOWc/giphy.gif",
    "https://media.giphy.com/media/FBEmS4HJ7Te7iOmDRn/giphy.gif?cid=ecf05e4769vlzgscgpbut1hg6avuh6q89e5hj37o1hpyqiaf&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenlzbHV0ZHFiZTdrYjdlZWs5cXh4NTM2MXcwNTljMjdrN3o3bGcyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7JgZnQJBbxQ4amqD4v/giphy.gif"
];

let messageIndex = 0;
let gifIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    gifImage.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const isLeftSide = Math.random() > 0.5;
    
    if (isLeftSide) {
        heart.style.left = Math.random() * 20 + "vw";
    } else {
        heart.style.left = (80 + Math.random() * 20) + "vw";
    }

    const colors = ["#8e44ad", "#27ae60", "#e74c3c", "#3498db", "#f39c12"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    const hearts = ["💜", "💚", "❤️", "😽", "💛", "🧡", "🤍", "💕", "👫"];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    document.querySelector(".heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000); // 4 seconds for the heart to move up and disappear
}
setInterval(createHeart, 500);
