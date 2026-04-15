function createAccessTracker() {
    let scans = 0;
    return function() {
        scans++;
        return scans;
    };
}
const logScan = createAccessTracker();

function issueGear(diverName, ...gearItems) {
    return `<strong>Assigned Gear:</strong> <span class="gear-list">${gearItems.join(' | ')}</span>`;
}

function establishConnection() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Secure Connection Established.");
        }, 2000); 
    });
}

async function locateTarget() {
    const rosterDiv = document.getElementById('roster');
    await establishConnection(); 

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const rawCrew = await response.json();
        const targetDiver = rawCrew.find(member => member.address.city === "Gwenborough");
        const scanNumber = logScan(); 

        rosterDiv.innerHTML = `
            <div class="radar-card">
                <h3 class="success">✔️ Scan #${scanNumber} Complete</h3>
                <h2> Person found: ${targetDiver.name}</h2>
                <p><strong>Aquatic Base:</strong> ${targetDiver.address.city}</p>
                
                <p>${issueGear(targetDiver.name, "Oxygen Tank", "Thermal Suit", "Flares", "Depth Gauge")}</p>
            </div>
        `;
    } catch (error) {
        rosterDiv.innerHTML = "⚠️ Sonar Failure.";
        console.error(error);
    }
}
locateTarget();
