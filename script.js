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
    // List of themes and their background images
    const themes = {
        garden: "resources/backgrounds/garden.gif",
        sweden: "resources/backgrounds/sweden.gif",
        otherside: "resources/backgrounds/otherside.gif"
    };

    // Get the selected theme from the cookie
    const selectedTheme = getCookie("theme") || "garden";

    // Set the initial background based on the selected theme
    document.querySelector('.background').style.backgroundImage = `url(${themes[selectedTheme]})`;

    // Set the dropdown to the selected theme
    document.getElementById('theme-select').value = selectedTheme;
});

function changeTheme(theme) {
    // List of themes and their background images
    const themes = {
        garden: "resources/backgrounds/garden.gif",
        sweden: "resources/backgrounds/sweden.gif",
        otherside: "resources/backgrounds/otherside.gif"
    };

    // Change the background image
    document.querySelector('.background').style.backgroundImage = `url(${themes[theme]})`;

    // Store the selected theme in a cookie
    setCookie("theme", theme, 30);
}

// Utility function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Utility function to get a cookie value by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
