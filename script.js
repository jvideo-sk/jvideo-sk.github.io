console.log("Welcome to jvideo.dev");
const birthDate = new Date("2008-09-02T00:00:00");
const ageSelector = document.getElementById("age");

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function updateAge() {
    const age = (Date.now() - birthDate) / 31557600000;
    ageSelector.innerText = `I am ${age.toFixed(20)} years old.`;
}

updateAge();
setInterval(updateAge, 1);