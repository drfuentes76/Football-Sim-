function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
}

document.getElementById('startGame').addEventListener('click', () => {
  fetch('./teams.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const message = `Loaded ${data.length} teams. First team: ${data[0].teamName}`;
      document.getElementById('output').textContent = message;
      speak(message);
    })
    .catch(error => {
      const errorMessage = 'Failed to load team data.';
      document.getElementById('output').textContent = errorMessage;
      speak(errorMessage);
      console.error('Error fetching teams.json:', error);
    });
});