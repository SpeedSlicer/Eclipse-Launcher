    const themes = {
        overworld: "resources/backgrounds/overworld.gif",
        nether: "resources/backgrounds/nether.gif",
        end: "resources/backgrounds/end.gif",
        cherryblossom: "resources/backgrounds/cherryblossom.gif",
        city: "resources/backgrounds/city.gif",
        colosseum: "resources/backgrounds/colosseum.gif",
        cyberpunk: "resources/backgrounds/cyberpunk.gif",
        office: "resources/backgrounds/office.gif",
        snowstorm: "resources/backgrounds/snowstorm.gif",
        starfall: "resources/backgrounds/starfall.gif",
        room: "resources/backgrounds/room.gif",
        retro: "resources/backgrounds/retro.gif",
        redmoon: "resources/backgrounds/redmoon.gif",

    };

    document.addEventListener('DOMContentLoaded', () => {
        const selectedTheme = getCookie('theme') || 'overworld';
        const baseColor = getCookie('base-color') || '#6e6e6e';
        const darkerColor = getCookie('darker-color') || '#5c5c5c';
        const lighterColor = getCookie('lighter-color') || '#7f7f7f';
        const highlightColor = getCookie('highlight-color') || '#a3a3a3';
        const shadowColor = getCookie('shadow-color') || '#4b4b4b';
        const textColor = getCookie('text-color') || '#ffffff';
        const backgroundColor = getCookie('background-color') || '#1e1e1e';

        document.querySelector('.background').style.backgroundImage = `url(${themes[selectedTheme]})`;
        document.getElementById('theme-select').value = selectedTheme;

        updateColor('--base-color', baseColor);
        updateColor('--darker-color', darkerColor);
        updateColor('--lighter-color', lighterColor);
        updateColor('--highlight-color', highlightColor);
        updateColor('--shadow-color', shadowColor);
        updateColor('--text-color', textColor);
        updateColor('--background-color', backgroundColor);

        document.getElementById('base-color-picker').value = baseColor;
        document.getElementById('darker-color-picker').value = darkerColor;
        document.getElementById('lighter-color-picker').value = lighterColor;
        document.getElementById('highlight-color-picker').value = highlightColor;
        document.getElementById('shadow-color-picker').value = shadowColor;
        document.getElementById('text-color-picker').value = textColor;
        document.getElementById('background-color-picker').value = backgroundColor;

        document.getElementById('base-color-picker').addEventListener('input', (event) => updateColor('--base-color', event.target.value));
        document.getElementById('darker-color-picker').addEventListener('input', (event) => updateColor('--darker-color', event.target.value));
        document.getElementById('lighter-color-picker').addEventListener('input', (event) => updateColor('--lighter-color', event.target.value));
        document.getElementById('highlight-color-picker').addEventListener('input', (event) => updateColor('--highlight-color', event.target.value));
        document.getElementById('shadow-color-picker').addEventListener('input', (event) => updateColor('--shadow-color', event.target.value));
        document.getElementById('text-color-picker').addEventListener('input', (event) => updateColor('--text-color', event.target.value));
        document.getElementById('background-color-picker').addEventListener('input', (event) => updateColor('--background-color', event.target.value));

    });

    function launchVersion() {
        var version = document.getElementById('version-home').value;
        var baseURL = 'versions/';
        var versionPath = `${baseURL}${version}/index.html`;

        location.href = versionPath;
    }

    function launchArchive() {
        var version = document.getElementById('archiveVer').value;
        var baseURL = 'versions/';
        var versionPath = `${baseURL}${version}/index.html`;

        location.href = versionPath;
    }

    function showTab(tabId) {
        var contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('active'));

        var activeContent = document.getElementById(tabId);
        activeContent.classList.add('active');

        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));

        var activeTab = document.querySelector(`.tab[onclick="showTab('${tabId}')"]`);
        activeTab.classList.add('active-tab');
    }

    function changeTheme(theme) {
        document.querySelector('.background').style.backgroundImage = `url(${themes[theme]})`;

        setCookie('theme', theme, 30);
    }

    function updateColor(variable, color) {
        console.log(`Updating ${variable} to ${color}`);
        document.documentElement.style.setProperty(variable, color);
        setCookie(variable.replace('--', ''), color, 30);
    }


    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim(); // Trim the cookie to remove leading spaces
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }
    function resetToDefaults() {

        const defaultTheme = 'overworld';
        const defaultBaseColor = '#6e6e6e';
        const defaultDarkerColor = '#5c5c5c';
        const defaultLighterColor = '#7f7f7f';
        const defaultHighlightColor = '#a3a3a3';
        const defaultShadowColor = '#4b4b4b';
        const defaultTextColor = '#ffffff';
        const defaultBackgroundColor = '#1e1e1e';
        document.querySelector('.background').style.backgroundImage = `url(${themes[defaultTheme]})`;

        document.getElementById('theme-select').value = defaultTheme;

        updateColor('--base-color', defaultBaseColor);
        updateColor('--darker-color', defaultDarkerColor);
        updateColor('--lighter-color', defaultLighterColor);
        updateColor('--highlight-color', defaultHighlightColor);
        updateColor('--shadow-color', defaultShadowColor);
        updateColor('--text-color', defaultTextColor);
        updateColor('--background-color', defaultBackgroundColor);

        document.getElementById('base-color-picker').value = defaultBaseColor;
        document.getElementById('darker-color-picker').value = defaultDarkerColor;
        document.getElementById('lighter-color-picker').value = defaultLighterColor;
        document.getElementById('highlight-color-picker').value = defaultHighlightColor;
        document.getElementById('shadow-color-picker').value = defaultShadowColor;
        document.getElementById('text-color-picker').value = defaultTextColor;
        document.getElementById('background-color-picker').value = defaultBackgroundColor;

        setCookie('theme', defaultTheme, 30);
        setCookie('base-color', defaultBaseColor, 30);
        setCookie('darker-color', defaultDarkerColor, 30);
        setCookie('lighter-color', defaultLighterColor, 30);
        setCookie('highlight-color', defaultHighlightColor, 30);
        setCookie('shadow-color', defaultShadowColor, 30);
        setCookie('text-color', defaultTextColor, 30);
        setCookie('background-color', defaultBackgroundColor, 30);
    }
    function customPreset(baseColor, darkerColor, lighterColor, highlightColor, shadowColor, textColor, backgroundColor, selectedTheme) {
        // Update theme background
        document.querySelector('.background').style.backgroundImage = `url(${themes[selectedTheme]})`;
        document.getElementById('theme-select').value = selectedTheme;
    
        // Update color variables
        updateColor('--base-color', baseColor);
        updateColor('--darker-color', darkerColor);
        updateColor('--lighter-color', lighterColor);
        updateColor('--highlight-color', highlightColor);
        updateColor('--shadow-color', shadowColor);
        updateColor('--text-color', textColor);
        updateColor('--background-color', backgroundColor);
    
        // Update color picker values
        document.getElementById('base-color-picker').value = baseColor;
        document.getElementById('darker-color-picker').value = darkerColor;
        document.getElementById('lighter-color-picker').value = lighterColor;
        document.getElementById('highlight-color-picker').value = highlightColor;
        document.getElementById('shadow-color-picker').value = shadowColor;
        document.getElementById('text-color-picker').value = textColor;
        document.getElementById('background-color-picker').value = backgroundColor;
    
        // Update cookies
        setCookie('theme', selectedTheme, 30);
        setCookie('base-color', baseColor, 30);
        setCookie('darker-color', darkerColor, 30);
        setCookie('lighter-color', lighterColor, 30);
        setCookie('highlight-color', highlightColor, 30);
        setCookie('shadow-color', shadowColor, 30);
        setCookie('text-color', textColor, 30);
        setCookie('background-color', backgroundColor, 30);
    }
    
    function copyCustomPreset() {
        const baseColor = getComputedStyle(document.documentElement).getPropertyValue('--base-color').trim();
        const darkerColor = getComputedStyle(document.documentElement).getPropertyValue('--darker-color').trim();
        const lighterColor = getComputedStyle(document.documentElement).getPropertyValue('--lighter-color').trim();
        const highlightColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color').trim();
        const shadowColor = getComputedStyle(document.documentElement).getPropertyValue('--shadow-color').trim();
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();
        const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
    
        const selectedTheme = getCookie('theme') || 'overworld'; // Assuming you store the theme in a cookie
    
        const scriptText = `customPreset('${baseColor}', '${darkerColor}', '${lighterColor}', '${highlightColor}', '${shadowColor}', '${textColor}', '${backgroundColor}', '${selectedTheme}');`;
    
        // Create a textarea to copy the script text
        const textarea = document.createElement('textarea');
        textarea.value = scriptText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    
        alert('Custom Preset copied to clipboard!');
    }
    