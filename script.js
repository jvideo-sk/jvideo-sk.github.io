console.log("Welcome to jvideo.dev");
const ageSelector = document.getElementById("age");

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function change() {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    parentTextSelector.classList.add("hide");

    setTimeout(() => {
        textSelector.innerText = randomText;
        parentTextSelector.classList.remove("hide");
    }, 500);
}

setInterval(change, 2000);

change();

const age = ((Date.now() - new Date("2008-9-2")) / (31557600000));
ageSelector.innerText = age.toFixed(8);

setInterval(() => {
    const age = ((Date.now() - new Date("2008-9-2")) / (31557600000));
    ageSelector.innerText = age.toFixed(10);
}, 1);