const renderDiverCard = function(diver) {
    return `
        <div class="minimal-card">
            <span class="zone-label">Sector: ${diver.address.city}</span>
            <h3>${diver.name}</h3>
            <p><strong>Comms:</strong> ${diver.email}</p>
        </div>
    `;
};
document.addEventListener("DOMContentLoaded", () => {
    
    const rosterDiv = document.getElementById('roster');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(rawCrew => {
            const squad = rawCrew.filter(person => person.id <= 4);
            rosterDiv.innerHTML = '';
            squad.forEach(diver => {
                rosterDiv.innerHTML += renderDiverCard(diver);
            });
            
        })
        .catch(error => {
            rosterDiv.innerHTML = "Connection failure.";
            console.error(error);
        });

});
