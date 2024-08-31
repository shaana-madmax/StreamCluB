document.getElementById('playMovie').addEventListener('click', () => {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('uploadPage').style.display = 'block';
    document.getElementById('mediaFile').setAttribute('accept', 'video/*');
});

document.getElementById('playSong').addEventListener('click', () => {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('uploadPage').style.display = 'block';
    document.getElementById('mediaFile').setAttribute('accept', 'audio/*');
});

document.getElementById('viewDocument').addEventListener('click', () => {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('uploadPage').style.display = 'block';
    document.getElementById('mediaFile').setAttribute('accept', 'application/pdf,.doc,.docx');
});

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const mediaFile = document.getElementById('mediaFile').files[0];
    const fileType = mediaFile.type.split('/')[0];
    const lobbyId = Date.now();
    const fileName = mediaFile.name;

    // Simulate file upload by generating a URL
    const fileUrl = `https://shaana-madmax.github.io/StreamClub/${fileName}`;
    const lobbyUrl = `https://shaana-madmax.github.io/StreamClub/playback.html?mediaFile=${encodeURIComponent(fileUrl)}&lobby=${lobbyId}`;

    // Show the generated URL and provide the start button
    document.getElementById('generatedUrl').value = lobbyUrl;
    document.getElementById('lobbyUrl').style.display = 'block';

    // Start the lobby when the button is clicked
    document.getElementById('startLobby').addEventListener('click', () => {
        window.location.href = lobbyUrl;
    });
});

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mediaFile = urlParams.get('mediaFile');
    const lobbyId = urlParams.get('lobby');

    if (mediaFile && lobbyId) {
        document.getElementById('welcomePage').style.display = 'none';
        document.getElementById('uploadPage').style.display = 'none';
        document.getElementById('playbackPage').style.display = 'block';

        // Determine media type and set source accordingly
        if (mediaFile.endsWith('.mp4') || mediaFile.endsWith('.webm') || mediaFile.endsWith('.ogg')) {
            document.getElementById('videoPlayer').src = mediaFile;
            document.getElementById('videoPlayer').style.display = 'block';
        } else if (mediaFile.endsWith('.mp3') || mediaFile.endsWith('.wav') || mediaFile.endsWith('.ogg')) {
            document.getElementById('audioPlayer').src = mediaFile;
            document.getElementById('audioPlayer').style.display = 'block';
        } else if (mediaFile.endsWith('.pdf') || mediaFile.endsWith('.doc') || mediaFile.endsWith('.docx')) {
            document.getElementById('docViewer').src = mediaFile;
            document.getElementById('docViewer').style.display = 'block';
        }
    }
});

// Chat functionality
document.getElementById('sendMessage').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        messageDiv.textContent = message;
        document.getElementById('messages').appendChild(messageDiv);
        messageInput.value = '';
    }
});

// Simulate receiving a message
setInterval(() => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message received';
    messageDiv.textContent = `Received message ${Date.now()}`;
    document.getElementById('messages').appendChild(messageDiv);
}, 10000);
