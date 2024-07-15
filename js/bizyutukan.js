/* ============================================================================
 * bizyutukan.js "美術館"
 * ============================================================================
 * 
 * 制作者：虹川郷鬼
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

// *==========================================================================*
// 『ＮＳＦＷコントロール』のファンクション
// *==========================================================================*

// Function for hiding NSFW art
function hideNotSafeForWork() {
    document.getElementById("nsfw0").style.display = "none";
    document.getElementById("nsfw1").style.display = "none";
    return 0;
}

// Function for showing NSFW art
function showNotSafeForWork() {
    document.getElementById("nsfw0").style.display = "unset";
    document.getElementById("nsfw1").style.display = "unset";
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『全ての為に』のファンクション
// *==========================================================================*

// Function for the "Hide all" / 『全てを隠す』 button
function hideAll() {
    return 0;
}

// Function for the "Reveal all" / 『全てを現す』 button
function revealAll() {
    return 0;
}

// *--------------------------------------------------------------------------*
