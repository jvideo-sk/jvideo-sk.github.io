console.log("Welcome to jvideo.dev");
const birthDate = new Date("2008-09-02T00:00:00-06:00");
const ageSelector = document.getElementById("age");


// nav toggle
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}


// age updater
function updateAge() {
    const age = (Date.now() - birthDate) / 31557600000;
    ageSelector.innerText = `I am ${age.toFixed(20)} years old.`;
}


// repos loader
async function loadProjects() {
    const response = await fetch(
        "https://api.github.com/users/jvideo-sk/repos?sort=updated"
    );

    const repos = await response.json();

    const container = document.getElementById("projects");

    repos.forEach(repo => {
        // Skip forks if you want
        if (repo.fork) return;

        const card = document.createElement("article");

        card.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description ?? "No description provided."}</p>

            <a href="${repo.html_url}" target="_blank">
                View Repository →
            </a>
        `;

        container.appendChild(card);
    });
}

// load projects on page load
loadProjects();

// update age every millisecond
updateAge();
setInterval(updateAge, 1);
