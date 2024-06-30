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

    // Highlight the active tab
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    var activeTab = document.querySelector('.tab[onclick="showTab(\'' + tabId + '\')"]');
    activeTab.classList.add('active-tab');
}

document.addEventListener('DOMContentLoaded', () => {
    
    // List of background images
    const backgrounds = [
      "resources/backgrounds/minecraft.gif",
      "resources/backgrounds/sweden.gif",
      "resources/backgrounds/otherside.gif"
    ];

    // Randomly select a background
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Set the background image
    document.querySelector('.background').style.backgroundImage = `url(${randomBackground})`;

});

