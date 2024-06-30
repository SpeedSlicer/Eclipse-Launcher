function launchVersion() {
    var version = document.getElementById('version-home').value;
    var baseURL = 'versions/'; // Path to versions directory
    var versionPath = `${baseURL}${version}/index.html`;

    // Navigate to the version's index.html
    location.href = versionPath;
}

function launchArchive() {
    var version = document.getElementById('archiveVer').value;
    var baseURL = 'versions/'; // Path to versions directory
    var versionPath = `${baseURL}${version}/index.html`;

    // Navigate to the version's index.html
    location.href = versionPath;
}

function showTab(tabId) {
    // Hide all content
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected content
    var activeContent = document.getElementById(tabId);
    activeContent.classList.add('active');

    // Optional: Highlight the active tab (not in CSS)
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    var activeTab = document.querySelector('.tab[onclick="showTab(\'' + tabId + '\')"]');
    activeTab.classList.add('active-tab');
}

document.addEventListener('DOMContentLoaded', function() {
    // Define an array of objects with audio sources, corresponding text, and background GIFs
    const audioTracks = [
        { src: 'resources/audiotrack/memories.mp3', text: 'Playing Subwoofer Lullaby - By C418', background: 'resources/backgrounds/subwoofer.gif' },
        { src: 'resources/audiotrack/oxygen.mp3', text: 'Playing Oxygene - By C418', background: 'resources/backgrounds/oxygen.gif' },
        { src: 'resources/audiotrack/minecraft.mp3', text: 'Playing Minecraft - By C418', background: 'resources/backgrounds/minecraft.gif' },
        { src: 'resources/audiotrack/swedes.mp3', text: 'Playing Sweden - By C418', background: 'resources/backgrounds/sweden.gif' },
        { src: 'resources/audiotrack/technoblade.mp3', text: 'Playing Pigstep - By Lana Raines', background: 'resources/backgrounds/pigstep.gif' },
        { src: 'resources/audiotrack/otherside.mp3', text: 'Playing Otherside - By Lana Raines', background: 'resources/backgrounds/otherside.gif' }
    ];

    // Select a random audio track from the array
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    const selectedTrack = audioTracks[randomIndex];

    // Update the audio source and text
    const audioElement = document.querySelector('audio');
    audioElement.src = selectedTrack.src;
    audioElement.addEventListener('loadedmetadata', function() {
        audioElement.play(); // Autoplay the selected track
    });

    // Update the audio widget text
    const audioWidget = document.querySelector('.audio-widget');
    audioWidget.textContent = selectedTrack.text;

    // Update the background GIF
    const backgroundDiv = document.querySelector('.background');
    backgroundDiv.style.backgroundImage = `url(${selectedTrack.background})`;
});
