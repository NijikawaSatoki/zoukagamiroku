//@ts-check

/* ============================================================================
 * monster.js "妖獣の書"
 * ============================================================================
 * 
 * 制作者：虹川郷鬼
 * 
 * [ja]
 * このファイルはHTML「/html/monster.html」の為にデザインしました。
 * 楽しみを持って。
 * 
 * [en]
 * This script file is for the HTML file located at
 *     /html/monster.html
 * 
 * Enjoy!
 * 
 */

// *==========================================================================*
// 『コウモリ』のファンクション
// *==========================================================================*

function hideBat() {
    document.getElementById("bat").style.display = "none";
    return 0;
}

function revealBat() {
    document.getElementById("bat").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『スライム』のファンクション
// *==========================================================================*

function hideSlime() {
    document.getElementById("slime").style.display = "none";
    return 0;
}

function revealSlime() {
    document.getElementById("slime").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『氷スライム』のファンクション
// *==========================================================================*

function hideIceSlime() {
    document.getElementById("IceSlime").style.display = "none";
    return 0;
}

function revealIceSlime() {
    document.getElementById("IceSlime").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『溶岩スライム』のファンクション
// *==========================================================================*

function hideLaveSlime() {
    document.getElementById("LavaSlime").style.display = "none";
    return 0;
}

function revealLavaSlime() {
    document.getElementById("LavaSlime").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『オーク』のファンクション
// *==========================================================================*

function hideOrc() {
    document.getElementById("orc").style.display = "none";
    return 0;
}

function revealOrc() {
    document.getElementById("orc").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『地霊』のファンクション
// *==========================================================================*

function hideEarthSpirit() {
    document.getElementById("EarthSpirit").style.display = "none";
    return 0;
}

function revealEarthSpirit() {
    document.getElementById("EarthSpirit").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『火霊』のファンクション
// *==========================================================================*

function hideFireSpirit() {
    document.getElementById("FireSpirit").style.display = "none";
    return 0;
}

function revealFireSpirit() {
    document.getElementById("FireSpirit").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『水霊』のファンクション
// *==========================================================================*

function hideWaterSpirit() {
    document.getElementById("WaterSpirit").style.display = "none";
    return 0;
}

function revealWaterSpirit() {
    document.getElementById("WaterSpirit").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『風霊』のファンクション
// *==========================================================================*

function hideWindSpirit() {
    document.getElementById("WindSpirit").style.display = "none";
    return 0;
}

function revealWindSpirit() {
    document.getElementById("WindSpirit").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『コカトリス』のファンクション
// *==========================================================================*

function hideCockatrice() {
    document.getElementById("cockatrice").style.display = "none";
    return 0;
}

function revealCockatrice() {
    document.getElementById("cockatrice").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『妖精』のファンクション
// *==========================================================================*

function hideFairy() {
    document.getElementById("fairy").style.display = "none";
    return 0;
}

function revealFairy() {
    document.getElementById("fairy").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『氷妖精』のファンクション
// *==========================================================================*

function hideIceFairy() {
    document.getElementById("FrostFairy").style.display = "none";
    return 0;
}

function revealIceFairy() {
    document.getElementById("FrostFairy").style.display = "unset";
    return 0;
}

// *==========================================================================*
// 『羅刹』のファンクション
// *==========================================================================*

function hideRakshasa() {
    document.getElementById("rakshasa").style.display = "none";
    return 0;
}

function revealRakshasa() {
    document.getElementById("rakshasa").style.display = "unset";
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『全ての為に』のファンクション
// *==========================================================================*

// Function for the "Hide all" / 『全てを隠す』 button
function hideAll() {
    hideBat();
    hideSlime();
    hideIceSlime();
    hideLaveSlime();
    hideOrc();
    hideEarthSpirit();
    hideFireSpirit();
    hideWaterSpirit();
    hideWindSpirit();
    hideCockatrice();
    hideFairy();
    hideIceFairy();
    hideRakshasa();
    return 0;
}

// Function for the "Reveal all" / 『全てを現す』 button
function revealAll() {
    revealBat();
    revealSlime();
    revealIceSlime();
    revealLavaSlime();
    revealOrc();
    revealEarthSpirit();
    revealFireSpirit();
    revealWaterSpirit();
    revealWindSpirit();
    revealCockatrice();
    revealFairy();
    revealIceFairy();
    revealRakshasa();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// アーカイブしたファンクション
// *==========================================================================*
