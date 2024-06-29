function launchVersion() {
    var version = document.getElementById('version').value;
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
