// Toggle the infobox on and off
function ToggleInfobox() {
    const INFOBOX = document.getElementById("Infobox");
    if (window.getComputedStyle(INFOBOX).display === "none") {
        INFOBOX.style.display = "block";
    } else {
        INFOBOX.style.display = "none";
    }
    return;
}

/* An explanation of how I'm gonna determine the dark-light pairs for the 
 * colours.
 * 
 * Basically I'm gonna do a NOT operation on them.
 * In other words, I'm gonna flip all 24 bits in the colour (since CSS uses 24-
 * bit colour).
 * So for example, colour #000000 (true black, all 0's) would become #FFFFFF 
 * (true white, all 1's).
 */

// Switch to a dark theme
function DarkTheme() {
    // Some variables
    let body = document.getElementById("DocumentBody");
    let header = document.getElementById("PageHead");
    let footer = document.getElementById("PageFoot");
    let infobox = document.getElementById("Infobox");
    let contents = document.getElementById("Contents");
    // Style change!
    body.style.backgroundColor = "#121212";   // %000100100001001000010010
    body.style.color = "#e5e5e5";             // %111001011110010111100101
    infobox.style.borderColor = "#efefef";    // %111011111110111111101111
    contents.style.borderColor = "#efefef";   // %111011111110111111101111
    header.style.backgroundColor = "#1f1f1f"; // %000111110001111100011111
    footer.style.backgroundColor = "#1f1f1f"; // %000111110001111100011111
    header.style.color = "#e5e5e5";           // %111001011110010111100101
    footer.style.color = "#e5e5e5";           // %111001011110010111100101
    return;
}

// Switch to a light theme
function LightTheme() {
    // Some variables
    let body = document.getElementById("DocumentBody");
    let header = document.getElementById("PageHead");
    let footer = document.getElementById("PageFoot");
    let infobox = document.getElementById("Infobox");
    let contents = document.getElementById("Contents");
    // Style change!
    body.style.backgroundColor = "#ededed";   // %111011011110110111101101
    body.style.color = "#1a1a1a";             // %000110100001101000011010
    infobox.style.borderColor = "#101010";    // %000100000001000000010000
    contents.style.borderColor = "#101010";   // %000100000001000000010000
    header.style.backgroundColor = "#e0e0e0"; // %111000001110000011100000
    footer.style.backgroundColor = "#e0e0e0"; // %111000001110000011100000
    header.style.color = "#1a1a1a";           // %000110100001101000011010
    footer.style.color = "#1a1a1a";           // %000110100001101000011010
    return;
}
