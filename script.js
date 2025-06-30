06.30 11:08 PM
function generateVideo() {
  const story = document.getElementById("storyInput").value;

  if (!story.trim()) {
    alert("Please enter a story.");
    return;
  }

  // Placeholder logic – replace with real API call
  document.getElementById("videoResult").innerHTML = `
    <p> Generating video for your story...</p>
    <p><em>(This is a placeholder – integrate with an AI video API like Sora or Runway)</em></p>
  `;
}
