/* ============================================================================
 * boss.js "ボスの書"
 * ============================================================================
 * 
 * 制作者：虹川郷鬼
 * 
 * [ja]
 * このファイルはHTML「/html/boss.html」の為にデザインしました。
 * 楽しみを持って。
 * 
 * [en]
 * This script file is for the HTML file located at
 *     /html/boss.html
 * 
 * Enjoy!
 * 
 */

// *==========================================================================*
// 『第一章　異常』のファンクション
// *==========================================================================*

function hideIjou() {
    document.getElementById("ChapterOneIjou").style.display = "none";
    return 0;
}

function revealIjou() {
    document.getElementById("ChapterOneIjou").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『崎鳥サーンプリヤ』のファンクション
// *==========================================================================*

function hideSakidoriSampriya() {
    document.getElementById("SakidoriSampriya").style.display = "none";
    return 0;
}

function revealSakidoriSampriya() {
    document.getElementById("SakidoriSampriya").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『テオニムフィ・アポストロプールー』のファンクション
// *==========================================================================*

function hideTheonymphiApostolopoulou() {
    document.getElementById("TheonymphiApostolopoulou").style.display = "none";
    return 0;
}

function revealTheonymphiApostolopoulou() {
    document.getElementById("TheonymphiApostolopoulou").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide0` and `reveal0` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide0() {
    hideIjou()
    hideSakidoriSampriya();
    hideTheonymphiApostolopoulou();
    return 0;
}

function reveal0() {
    revealIjou();
    revealSakidoriSampriya();
    revealTheonymphiApostolopoulou();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第二章　侵攻』のファンクション
// *==========================================================================*

function hideShinkou() {
    document.getElementById("ChapterTwoShinkou").style.display = "none";
    return 0;
}

function revealShinkou() {
    document.getElementById("ChapterTwoShinkou").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide1` and `reveal1` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide1() {
    hideShinkou();
    return 0;
}

function reveal1() {
    revealShinkou();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第三章　補給』のファンクション
// *==========================================================================*

function hideHokyuu() {
    document.getElementById("ChapterThreeHokyuu").style.display = "none";
    return 0;
}

function revealHokyuu() {
    document.getElementById("ChapterThreeHokyuu").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide2` and `reveal2` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide2() {
    hideHokyuu();
    return 0;
}

function reveal2() {
    revealHokyuu();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第四章　砂漠』のファンクション
// *==========================================================================*

function hideSabaku() {
    document.getElementById("ChapterFourSabaku").style.display = "none";
    return 0;
}

function revealSabaku() {
    document.getElementById("ChapterFourSabaku").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide3` and `reveal3` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide3() {
    hideSabaku();
    return 0;
}

function reveal3() {
    revealSabaku();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第五章　山々』のファンクション
// *==========================================================================*

function hideYamayama() {
    document.getElementById("ChapterFiveYamayama").style.display = "none";
    return 0;
}

function revealYamayama() {
    document.getElementById("ChapterFiveYamayama").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide4` and `reveal4` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide4() {
    hideYamayama();
    return 0;
}

function reveal4() {
    revealYamayama();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第六章　過去』のファンクション
// *==========================================================================*

function hideKako() {
    document.getElementById("ChapterSixKako").style.display = "none";
    return 0;
}

function revealKako() {
    document.getElementById("ChapterSixKako").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide5` and `reveal5` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide5() {
    hideKako();
    return 0;
}

function reveal5() {
    revealKako();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第七章　天界』のファンクション
// *==========================================================================*

function hideTenkai() {
    document.getElementById("ChapterSevenTenkai").style.display = "none";
    return 0;
}

function revealTenkai() {
    document.getElementById("ChapterSevenTenkai").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide6` and `reveal6` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide6() {
    hideTenkai();
    return 0;
}

function reveal6() {
    revealTenkai();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第八章　流竄』のファンクション
// *==========================================================================*

function hideRyuuzan() {
    document.getElementById("ChapterEightRyuuzan").style.display = "none";
    return 0;
}

function revealRyuuzan() {
    document.getElementById("ChapterEightRyuuzan").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide7` and `reveal7` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide7() {
    hideRyuuzan();
    return 0;
}

function reveal7() {
    revealRyuuzan();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第九章　智慧』のファンクション
// *==========================================================================*

function hideChie() {
    document.getElementById("ChapterNineChie").style.display = "none";
    return 0;
}

function revealChie() {
    document.getElementById("ChapterNineChie").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide8` and `reveal8` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide8() {
    hideChie();
    return 0;
}

function reveal8() {
    revealChie();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『第十章　解脱』のファンクション
// *==========================================================================*

function hideGedatsu() {
    document.getElementById("ChapterTenGedatsu").style.display = "none";
    return 0;
}

function revealGedatsu() {
    document.getElementById("ChapterTenGedatsu").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide9` and `reveal9` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide9() {
    hideGendatsu();
    return 0;
}

function reveal9() {
    revealGedatsu();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『最終章　輪廻』のファンクション
// *==========================================================================*

function hideRinne() {
    document.getElementById("FinalChapterRinne").style.display = "none";
    return 0;
}

function revealRinne() {
    document.getElementById("FinalChapterRinne").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide10` and `reveal10` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide10() {
    hideRinne();
    return 0;
}

function reveal10() {
    revealRinne();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『ＥＸ章　再会』のファンクション
// *==========================================================================*

function hideSaikai() {
    document.getElementById("ExtraChapterSaikai").style.display = "none";
    return 0;
}

function revealSaikai() {
    document.getElementById("ExtraChapterSaikai").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide11` and `reveal11` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide11() {
    hideSaikai();
    return 0;
}

function reveal11() {
    revealSaikai();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『全ての為に』のファンクション
// *==========================================================================*

// Function for the "Hide all" / 『全てを隠す』 button
function hideAll() {
    hide0();
    hide1();
    hide2();
    hide3();
    hide4();
    hide5();
    hide6();
    hide7();
    hide8();
    hide9();
    hide10();
    hide11();
    return 0;
}

// Function for the "Reveal all" / 『全てを現す』 button
function revealAll() {
    reveal0();
    reveal1();
    reveal2();
    reveal3();
    reveal4();
    reveal5();
    reveal6();
    reveal7();
    reveal8();
    reveal9();
    reveal10();
    reveal11();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// アーカイブしたファンクション
// *==========================================================================*
