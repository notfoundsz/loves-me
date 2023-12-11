function openLink() {
    window.location.href = "https://www.tiktok.com/@scottstots01/video/7281197502873881864?q=just%20the%20hottest%20girl%20in%20the%20world%20loves%20me&t=1702311555389";
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var newX = Math.floor(Math.random() * (windowWidth - 100));
    var newY = Math.floor(Math.random() * (windowHeight - 40));

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';

    if (noButton.nextElementSibling) {
        noButton.parentNode.insertBefore(noButton, yesButton);
    } else {
        noButton.parentNode.appendChild(noButton);
    }
}
