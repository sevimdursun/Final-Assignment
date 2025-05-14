document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("animateBox");
    let pos = 0;
    let direction = 1;

    setInterval(function () {
        if (pos > 80 || pos < -80) direction *= -1;
        pos += direction * 4;
        box.style.transform = `translateX(${pos}px)`;
    }, 35);
});
