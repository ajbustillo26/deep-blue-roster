// week 10
class MarineResearcher {
    constructor(name, email, specialty) {
        this.name = name;
        this.email = email;
        this.specialty = specialty;
    }

    getHtml() {
        return `<div class="crew-card">
                    <h3>⚓ ${this.name}</h3>
                    <p><strong>Comms:</strong> ${this.email} <br>
                    <strong>Assigned Vessel:</strong> ${this.specialty}</p>
                </div>`;
    }
}

// week 9
async function loadCrew() {
    const rosterDiv = document.getElementById('roster');

    try {
        // week 11
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const rawCrew = await response.json();

        // week 6
        const crewMembers = rawCrew.map(user => new MarineResearcher(user.name, user.email, user.company.name));

        // week 6
        const activeCrew = crewMembers.filter(member => member.name.toLowerCase().includes("e"));
        rosterDiv.innerHTML = '';
        activeCrew.forEach(member => {
            rosterDiv.innerHTML += member.getHtml();
        });

    } catch (error) {
        rosterDiv.innerHTML = "sonar failure :( Could not reach the remote server.";
    }
}
loadCrew();