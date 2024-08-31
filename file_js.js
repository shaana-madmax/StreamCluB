document.addEventListener('DOMContentLoaded', () => {
    const playMovieButton = document.getElementById('playMovie');
    const playSongButton = document.getElementById('playSong');
    const viewDocumentButton = document.getElementById('viewDocument');
    const uploadPage = document.getElementById('uploadPage');
    const playbackPage = document.getElementById('playbackPage');
    const uploadForm = document.getElementById('uploadForm');
    const mediaFileInput = document.getElementById('mediaFile');
    const generateLobbyButton = document.getElementById('generateLobby');

    let mediaType = '';
    let mediaFileUrl = '';

    playMovieButton.addEventListener('click', () => {
        mediaType = 'movie';
        uploadPage.style.display = 'block';
    });

    playSongButton.addEventListener('click', () => {
        mediaType = 'song';
        uploadPage.style.display = 'block';
    });

    viewDocumentButton.addEventListener('click', () => {
        mediaType = 'document';
        uploadPage.style.display = 'block';
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = mediaFileInput.files[0];
        if (file) {
            mediaFileUrl = URL.createObjectURL(file);
            alert('File uploaded successfully.');
        }
    });

    generateLobbyButton.addEventListener('click', () => {
        if (!mediaFileUrl) {
            alert('Please upload a file first.');
            return;
        }
        const lobbyId = Date.now(); // Use current timestamp as lobby ID
        const url = `stream.html?lobby=${lobbyId}&type=${mediaType}&file=${encodeURIComponent(mediaFileUrl)}`;
        window.location.href = url;
    });
});
