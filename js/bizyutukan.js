//@ts-check

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

// ＮＳＦＷをトグルするファンクション
function toggleNSFW() {
    let divNSFW = document.getElementsByClassName("nsfw");
    if (window.getComputedStyle(divNSFW).display === "none") {
        // ＯＮにする
        divNSFW.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divNSFW.style.display = "none";
        return 0;
    }
}

///// ファイルの終わりです \\\\\
