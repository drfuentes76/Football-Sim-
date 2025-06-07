function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
}

document.getElementById('startGame').addEventListener('click', () => {
  const basePath = window.location.origin + window.location.pathname;
  const jsonPath = basePath.endsWith('/') ? `${basePath}teams.json` : `${basePath}/teams.json`;

  fetch(jsonPath)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      const message = `Loaded ${data.length} teams. First team: ${data[0].teamName}`;
      document.getElementById('output').textContent = message;
      speak(message);
    })
    .catch(err => {
      console.error('Fetch error:', err);
      document.getElementById('output').textContent = 'Failed to load team data.';
      speak('Error loading teams.');
    });
});