//@ts-check

/* ============================================================================
 * bizyutukan.js "美術館"
 * ============================================================================
 * 
 * 制作者：虹川郷鬼
 * 　　　　Miroslav Glamuzina (https://stackoverflow.com/users/5066625/miroslav-glamuzina)
 * 
 * [ja]
 * このファイルはHTML「/html/gallery/*.html」の為にデザインしました。
 * 楽しみを持って。
 * 
 * [en]
 * This script file is for the HTML file located at
 *     /html/gallery/*.html
 * 
 * Enjoy!
 * 
 */

// ＮＳＦＷをトグルするファンクション

/* This behemoth of a function was written by Miroslav Glamuzina
on StackOverflow.
https://stackoverflow.com/questions/54964933/javascript-toggle-div-style-display-by-button (first answer you see)
Modified from original */

// Toggles based on class name
// @ts-ignore
window.toggleDisplayByClass = function (btnId, className) {
    var c2 = Array.from(document.getElementsByClassName(className));
    c2.forEach(c => {
        // @ts-ignore
        if (window.getComputedStyle(c).display == null || window.getComputedStyle(c).display == "none") {
            // @ts-ignore
            c.style.display = "block";
        } else {
            // @ts-ignore
            c.style.display = "none";
        }
    });
}

// For when there is no NSFW art present
function noNsfw() {
    let NsfwLacking = document.getElementById("NoNsfw");
    if (window.getComputedStyle(NsfwLacking).display === "none") {
        // ＯＮにする
        NsfwLacking.style.display = "block";
    } else {
        // ＯＦＦにする
        NsfwLacking.style.display = "none";
    }
}

// For when the NSFW button is pressed on characters that are children
function nsfwNiceTry() {
    let noLoliOrShota = document.getElementById("YouSickFuck");
    if (window.getComputedStyle(noLoliOrShota).display === "none") {
        // ＯＮにする
        noLoliOrShota.style.display = "block";
    } else {
        // ＯＦＦにする
        noLoliOrShota.style.display = "none";
    }
}

///// ファイルの終わりです \\\\\
