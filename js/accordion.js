/* ============================================================================
 * accordion.js
 * ============================================================================
 * 
 * 制作者：虹川郷鬼
 * 
 */

// Initialise the variables
var acc = document.getElementsByClassName("accordion");
var i;

// The neccessary loop for the accordion to, er, accordion
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
