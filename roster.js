fetch('teams.json')
  .then(response => response.json())
  .then(data => {
    const rosterDiv = document.getElementById('roster');
    data.forEach(team => {
      const teamName = document.createElement('h2');
      teamName.textContent = team.teamName;
      rosterDiv.appendChild(teamName);
      team.players.forEach(player => {
        const p = document.createElement('p');
        p.textContent = `${player.name} - ${player.position} - Rating: ${player.rating}`;
        rosterDiv.appendChild(p);
      });
    });
  });