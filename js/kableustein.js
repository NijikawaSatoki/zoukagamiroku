//@ts-check

/* ============================================================================
 * kableustein.js "キャブロイシュタイン王国"
 * ============================================================================
 * 
 * 制作者：虹川郷鬼
 * 
 * [ja]
 * このファイルはHTML「/html/kableustein.html」の為にデザインしました。
 * 楽しみを持って。
 * 
 * [en]
 * This script file is for the HTML file located at
 *     /html/kableustein.html
 * 
 * Enjoy!
 * 
 */

// *==========================================================================*
// 『キャブロイシュタイン町』のファンクション
// *==========================================================================*

// キャブロイシュタイン町をトグルする
function toggleKableusteinTown() {
    let divKableusteinTown = document.getElementById("KableusteinTown");
    if (window.getComputedStyle(divKableusteinTown).display === "none") {
        // ＯＮにする
        divKableusteinTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divKableusteinTown.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ヴィクトル・ボデンシュタイン』のファンクション
// *==========================================================================*

// ヴィクトルをトグルする
function toggleViktorBodenstein() {
    let divViktorBodenstein = document.getElementById("ViktorBodenstein");
    if (window.getComputedStyle(divViktorBodenstein).display === "none") {
        // ＯＮにする
        divViktorBodenstein.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divViktorBodenstein.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ジークリンデ・アイベンシューツ』のファンクション
// *==========================================================================*

// ジークリンデをトグルする
function toggleSieglindeEibenschuetz() {
    let divSieglindeEibenschuetz = document.getElementById("SieglindeEibenschuetz");
    if (window.getComputedStyle(divSieglindeEibenschuetz).display === "none") {
        // ＯＮにする
        divSieglindeEibenschuetz.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSieglindeEibenschuetz.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ヴォルクハルト・ゴルヴィツァー』のファンクション
// *==========================================================================*

// ヴォルクハルトをトグルする
function toggleVolkhardtGollwitzer() {
    let divVolkhardtGollwitzer = document.getElementById("VolkhardtGollwitzer");
    if (window.getComputedStyle(divVolkhardtGollwitzer).display === "none") {
        // ＯＮにする
        divVolkhardtGollwitzer.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divVolkhardtGollwitzer.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ヴィクトーリア・ギュールデンステイト』のファンクション
// *==========================================================================*

// ヴィクトーリアをトグルする
function toggleViktoriaGueldenstaedt() {
    let divViktoriaGueldenstaedt = document.getElementById("ViktoriaGueldenstaedt");
    if (window.getComputedStyle(divViktoriaGueldenstaedt).display === "none") {
        // ＯＮにする
        divViktoriaGueldenstaedt.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divViktoriaGueldenstaedt.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『レオポルド・ヴォンヘルゲンレーザー』のファンクション
// *==========================================================================*

// レオポルドをトグルする
function toggleLeopoldVonHergenroether() {
    let divLeopoldVonHergenroether = document.getElementById("LeopoldVonHergenroether");
    if (window.getComputedStyle(divLeopoldVonHergenroether).display === "none") {
        // ＯＮにする
        divLeopoldVonHergenroether.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divLeopoldVonHergenroether.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『オスカー・ケイストナー』のファンクション
// *==========================================================================*

// オスカーをトグルする
function toggleOskarKaestner() {
    let divOskarKaestner = document.getElementById("OskarKaestner");
    if (window.getComputedStyle(divOskarKaestner).display === "none") {
        // ＯＮにする
        divOskarKaestner.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divOskarKaestner.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『セラー・キルシュヴェガー』のファンクション
// *==========================================================================*

// セラーをトグルする
function toggleSarahKirschweger() {
    let divSarahKirschweger = document.getElementById("SarahKirschweger");
    if (window.getComputedStyle(divSarahKirschweger).display === "none") {
        // ＯＮにする
        divSarahKirschweger.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSarahKirschweger.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『イリス・クロステルマン』のファンクション
// *==========================================================================*

// イリスをトグルする
function toggleIrisKlostermann() {
    let divIrisKlostermann = document.getElementById("IrisKlostermann");
    if (window.getComputedStyle(divIrisKlostermann).display === "none") {
        // ＯＮにする
        divIrisKlostermann.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divIrisKlostermann.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『天里愛・キュールシュマン』のファンクション
// *==========================================================================*

// 天里愛をトグルする
function toggleAmaliaKuerschmann() {
    let divAmaliaKuerschmann = document.getElementById("AmaliaKuerschmann");
    if (window.getComputedStyle(divAmaliaKuerschmann).display === "none") {
        // ＯＮにする
        divAmaliaKuerschmann.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divAmaliaKuerschmann.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『イルゼ・キュールシュマン』のファンクション
// *==========================================================================*

// イルゼをトグルする
function toggleIlseKuerschmann() {
    let divIlseKuerschmann = document.getElementById("IlseKuerschmann");
    if (window.getComputedStyle(divIlseKuerschmann).display === "none") {
        // ＯＮにする
        divIlseKuerschmann.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divIlseKuerschmann.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『アルフリッド・メンゲルベルク』のファンクション
// *==========================================================================*

// アルフリッドをトグルする
function toggleAlfredMengelberg() {
    let divAlfredMengelberg = document.getElementById("AlfredMengelberg");
    if (window.getComputedStyle(divAlfredMengelberg).display === "none") {
        // ＯＮにする
        divAlfredMengelberg.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divAlfredMengelberg.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『キャスパー・メーリング』のファンクション
// *==========================================================================*

// キャスパーをトグルする
function toggleKasparMoehling() {
    let divKasparMoehling = document.getElementById("KasparMoehling");
    if (window.getComputedStyle(divKasparMoehling).display === "none") {
        // ＯＮにする
        divKasparMoehling.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divKasparMoehling.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『テレサ・ノイホイッサー』のファンクション
// *==========================================================================*

// テレサをトグルする
function toggleTeresaNeuhaeusser() {
    let divTeresaNeuhaeusser = document.getElementById("TeresaNeuhaeusser");
    if (window.getComputedStyle(divTeresaNeuhaeusser).display === "none") {
        // ＯＮにする
        divTeresaNeuhaeusser.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divTeresaNeuhaeusser.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『リリ・ローゼンベルガー』のファンクション
// *==========================================================================*

// リリをトグルする
function toggleLiliRosenberger() {
    let divLiliRosenberger = document.getElementById("LiliRosenberger");
    if (window.getComputedStyle(divLiliRosenberger).display === "none") {
        // ＯＮにする
        divLiliRosenberger.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divLiliRosenberger.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『シグムンド・シェーンベルガー』のファンクション
// *==========================================================================*

// シグムンドをトグルする
function toggleSigmundSchoenberger() {
    let divSigmundSchoenberger = document.getElementById("SigmundSchoenberger");
    if (window.getComputedStyle(divSigmundSchoenberger).display === "none") {
        // ＯＮにする
        divSigmundSchoenberger.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSigmundSchoenberger.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ロズヴィザー・ジンメル』のファンクション
// *==========================================================================*

// ロズヴィザーをトグルする
function toggleRoswithaSimmel() {
    let divRoswithaSimmel = document.getElementById("RoswithaSimmel");
    if (window.getComputedStyle(divRoswithaSimmel).display === "none") {
        // ＯＮにする
        divRoswithaSimmel.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divRoswithaSimmel.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ヴィルヘルム・シュパイッス』のファンクション
// *==========================================================================*

// ヴィルヘルムをトグルする
function toggleWilhelmSpeiss() {
    let divWilhelmSpeiss = document.getElementById("WilhelmSpeiss");
    if (window.getComputedStyle(divWilhelmSpeiss).display === "none") {
        // ＯＮにする
        divWilhelmSpeiss.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divWilhelmSpeiss.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ルドヴィグ・ヴォンヴァインベルガー』のファンクション
// *==========================================================================*

// ルドヴィグをトグルする
function toggleLudwigVonWeinberger() {
    let divLudwigVonWeinberger = document.getElementById("LudwigVonWeinberger");
    if (window.getComputedStyle(divLudwigVonWeinberger).display === "none") {
        // ＯＮにする
        divLudwigVonWeinberger.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divLudwigVonWeinberger.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『カイ・ヴェーラー』のファンクション
// *==========================================================================*

// カイをトグルする
function toggleKaiWoehler() {
    let divKaiWoehler = document.getElementById("KaiWoehler");
    if (window.getComputedStyle(divKaiWoehler).display === "none") {
        // ＯＮにする
        divKaiWoehler.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divKaiWoehler.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『セラフィナ・ヴォルフェンソーン・メルゲンタラー』のファンクション
// *==========================================================================*

// セラフィナをトグルする
function toggleSerafinaWolfensohnMergenthaler() {
    let divSerafinaWolfensohnMergenthaler = document.getElementById("SerafinaWolfensohnMergenthaler");
    if (window.getComputedStyle(divSerafinaWolfensohnMergenthaler).display === "none") {
        // ＯＮにする
        divSerafinaWolfensohnMergenthaler.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSerafinaWolfensohnMergenthaler.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle0 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle0() {
    toggleKableusteinTown();
    toggleViktorBodenstein();
    toggleSieglindeEibenschuetz();
    toggleVolkhardtGollwitzer();
    toggleViktoriaGueldenstaedt();
    toggleLeopoldVonHergenroether();
    toggleOskarKaestner();
    toggleSarahKirschweger();
    toggleIrisKlostermann();
    toggleAmaliaKuerschmann();
    toggleIlseKuerschmann();
    toggleAlfredMengelberg();
    toggleKasparMoehling();
    toggleTeresaNeuhaeusser();
    toggleLiliRosenberger();
    toggleSigmundSchoenberger();
    toggleRoswithaSimmel();
    toggleWilhelmSpeiss();
    toggleLudwigVonWeinberger();
    toggleKaiWoehler();
    toggleSerafinaWolfensohnMergenthaler();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『ステーンシンゲン市』のファンクション
// *==========================================================================*

// ステーンシンゲン市をトグルする
function toggleSteensingenCity() {
    let divSteensingenCity = document.getElementById("SteensingenCity");
    if (window.getComputedStyle(divSteensingenCity).display === "none") {
        // ＯＮにする
        divSteensingenCity.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSteensingenCity.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle1 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle1() {
    toggleSteensingenCity();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『ツヴィンゲンローダ町』のファンクション
// *==========================================================================*

// ツヴィンゲンローダ町をトグルする
function toggleZwingenrodaTown() {
    let divZwingenrodaTown = document.getElementById("ZwingenrodaTown");
    if (window.getComputedStyle(divZwingenrodaTown).display === "none") {
        // ＯＮにする
        divZwingenrodaTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divZwingenrodaTown.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『エレノル・ベークマン』のファンクション
// *==========================================================================*

// エレノルをトグルする
function toggleEllenorBoeckmann() {
    let divEllenorBoeckmann = document.getElementById("EllenorBoeckmann");
    if (window.getComputedStyle(divEllenorBoeckmann).display === "none") {
        // ＯＮにする
        divEllenorBoeckmann.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divEllenorBoeckmann.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『レオンハルト・ヘーフレ』のファンクション
// *==========================================================================*

// レオンハルトをトグルする
function toggleLeonhardHoefle() {
    let divLeonhardHoefle = document.getElementById("LeonhardHoefle");
    if (window.getComputedStyle(divLeonhardHoefle).display === "none") {
        // ＯＮにする
        divLeonhardHoefle.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divLeonhardHoefle.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『クリストフ・ハンフシュテイングル』のファンクション
// *==========================================================================*

// クリストフをトグルする
function toggleChristofHanfstaengl() {
    let divChristofHanfstaengl = document.getElementById("ChristofHanfstaengl");
    if (window.getComputedStyle(divChristofHanfstaengl).display === "none") {
        // ＯＮにする
        divChristofHanfstaengl.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divChristofHanfstaengl.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『エベリン・ヘイリング』のファンクション
// *==========================================================================*

// エベリンをトグルする
function toggleEvelynHaering() {
    let divEvelynHaering = document.getElementById("EvelynHaering");
    if (window.getComputedStyle(divEvelynHaering).display === "none") {
        // ＯＮにする
        divEvelynHaering.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divEvelynHaering.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ルツィア・クレチュメル』のファンクション
// *==========================================================================*

// ルツィアをトグルする
function toggleLuziaKretschmer() {
    let divLuziaKretschmer = document.getElementById("LuziaKretschmer");
    if (window.getComputedStyle(divLuziaKretschmer).display === "none") {
        // ＯＮにする
        divLuziaKretschmer.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divLuziaKretschmer.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ルウシー・オホス』のファンクション
// *==========================================================================*

// ルウシーをトグルする
function toggleLucyOchs() {
    let divLucyOchs = document.getElementById("LucyOchs");
    if (window.getComputedStyle(divLucyOchs).display === "none") {
        // ＯＮにする
        divLucyOchs.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divLucyOchs.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ピート・プロホノフ』のファンクション
// *==========================================================================*

// ピートをトグルする
function togglePietProchnow() {
    let divPietProchnow = document.getElementById("PietProchnow");
    if (window.getComputedStyle(divPietProchnow).display === "none") {
        // ＯＮにする
        divPietProchnow.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divPietProchnow.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ジナ・ロゼンクランツ』のファンクション
// *==========================================================================*

// ジナをトグルする
function toggleSinaRosenkranz() {
    let divSinaRosenkranz = document.getElementById("SinaRosenkranz");
    if (window.getComputedStyle(divSinaRosenkranz).display === "none") {
        // ＯＮにする
        divSinaRosenkranz.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSinaRosenkranz.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『エドゥアルド・シット』のファンクション
// *==========================================================================*

// エドゥアルドをトグルする
function toggleEduardSchitt() {
    let divEduardSchitt = document.getElementById("EduardSchitt");
    if (window.getComputedStyle(divEduardSchitt).display === "none") {
        // ＯＮにする
        divEduardSchitt.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divEduardSchitt.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ヨハン・タイヒミュラ』のファンクション
// *==========================================================================*

// ヨハンをトグルする
function toggleJohanTeichmueller() {
    let divJohanTeichmueller = document.getElementById("JohanTeichmueller");
    if (window.getComputedStyle(divJohanTeichmueller).display === "none") {
        // ＯＮにする
        divJohanTeichmueller.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divJohanTeichmueller.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle2 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle2() {
    toggleZwingenrodaTown();
    toggleEllenorBoeckmann();
    toggleLeonhardHoefle();
    toggleChristofHanfstaengl();
    toggleEvelynHaering();
    toggleLuziaKretschmer();
    toggleLucyOchs();
    togglePietProchnow();
    toggleSinaRosenkranz();
    toggleEduardSchitt();
    toggleJohanTeichmueller();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『グロッスヴェルテル町』のファンクション
// *==========================================================================*

// グロッスヴェルテル町をトグルする
function toggleGrosswerterTown() {
    let divGrosswerterTown = document.getElementById("GrosswerterTown");
    if (window.getComputedStyle(divGrosswerterTown).display === "none") {
        // ＯＮにする
        divGrosswerterTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divGrosswerterTown.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ブリッタ・ベイル』のファンクション
// *==========================================================================*

// ブリッタをトグルする
function toggleBrittaBaer() {
    let divBrittaBaer = document.getElementById("BrittaBaer");
    if (window.getComputedStyle(divBrittaBaer).display === "none") {
        // ＯＮにする
        divBrittaBaer.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divBrittaBaer.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『フェリツィタス・グリュック』のファンクション
// *==========================================================================*

// フェリツィタスをトグルする
function toggleFelizitasGlueck() {
    let divFelizitasGlueck = document.getElementById("FelizitasGlueck");
    if (window.getComputedStyle(divFelizitasGlueck).display === "none") {
        // ＯＮにする
        divFelizitasGlueck.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divFelizitasGlueck.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『アン・ハウフェ』のファンクション
// *==========================================================================*

// アンをトグルする
function toggleAnneHauffe() {
    let divAnneHauffe = document.getElementById("AnneHauffe");
    if (window.getComputedStyle(divAnneHauffe).display === "none") {
        // ＯＮにする
        divAnneHauffe.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divAnneHauffe.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ゲオルグ・ヘーニグマン』のファンクション
// *==========================================================================*

// ゲオルグをトグルする
function toggleGeorgHoenigmann() {
    let divGeorgHoenigmann = document.getElementById("GeorgHoenigmann");
    if (window.getComputedStyle(divGeorgHoenigmann).display === "none") {
        // ＯＮにする
        divGeorgHoenigmann.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divGeorgHoenigmann.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『イル・ホプフ』のファンクション
// *==========================================================================*

// イルをトグルする
function toggleJilHopf() {
    let divJilHopf = document.getElementById("JilHopf");
    if (window.getComputedStyle(divJilHopf).display === "none") {
        // ＯＮにする
        divJilHopf.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divJilHopf.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『フィンヤ・リュティ』のファンクション
// *==========================================================================*

// フィンヤをトグルする
function toggleFinjaLuethi() {
    let divFinjaLuethi = document.getElementById("FinjaLuethi");
    if (window.getComputedStyle(divFinjaLuethi).display === "none") {
        // ＯＮにする
        divFinjaLuethi.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divFinjaLuethi.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ベネディクト・フォンペーペル』のファンクション
// *==========================================================================*

// ベネディクトをトグルする
function toggleBenediktVonPoepel() {
    let divBenediktVonPoepel = document.getElementById("BenediktVonPoepel");
    if (window.getComputedStyle(divBenediktVonPoepel).display === "none") {
        // ＯＮにする
        divBenediktVonPoepel.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divBenediktVonPoepel.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『スフェン・シェルシャイト』のファンクション
// *==========================================================================*

// スフェンをトグルする
function toggleSvenSchellscheidt() {
    let divSvenSchellscheidt = document.getElementById("SvenSchellscheidt");
    if (window.getComputedStyle(divSvenSchellscheidt).display === "none") {
        // ＯＮにする
        divSvenSchellscheidt.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSvenSchellscheidt.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『レフィ・フォンシュッツ』のファンクション
// *==========================================================================*

// レフィをトグルする
function toggleLeviVonSchutz() {
    let divLeviVonSchutz = document.getElementById("LeviVonSchutz");
    if (window.getComputedStyle(divLeviVonSchutz).display === "none") {
        // ＯＮにする
        divLeviVonSchutz.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divLeviVonSchutz.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ヨアヒム・シュヴァイニツ』のファンクション
// *==========================================================================*

// ヨアヒムをトグルする
function toggleJoachimSchweinitz() {
    let divJoachimSchweinitz = document.getElementById("JoachimSchweinitz");
    if (window.getComputedStyle(divJoachimSchweinitz).display === "none") {
        // ＯＮにする
        divJoachimSchweinitz.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divJoachimSchweinitz.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle3 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle3() {
    toggleGrosswerterTown();
    toggleBrittaBaer();
    toggleFelizitasGlueck();
    toggleAnneHauffe();
    toggleGeorgHoenigmann();
    toggleJilHopf();
    toggleFinjaLuethi();
    toggleBenediktVonPoepel();
    toggleSvenSchellscheidt();
    toggleLeviVonSchutz();
    toggleJoachimSchweinitz();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『アッピンゲスホテン町』のファンクション
// *==========================================================================*

// アッピンゲスホテン町をトグルする
function toggleAppingeschotenTown() {
    let divAppingeschotenTown = document.getElementById("AppingeschotenTown");
    if (window.getComputedStyle(divAppingeschotenTown).display === "none") {
        // ＯＮにする
        divAppingeschotenTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divAppingeschotenTown.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle4 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle4() {
    toggleAppingeschotenTown();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『ニーデルンレイシェン村』のファンクション
// *==========================================================================*

// ニーデルンレイシェン村をトグルする
function toggleNiedernraeschenVillage() {
    let divNiedernraeschenVillage = document.getElementById("NiedernraeschenVillage");
    if (window.getComputedStyle(divNiedernraeschenVillage).display === "none") {
        // ＯＮにする
        divNiedernraeschenVillage.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divNiedernraeschenVillage.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『マドレン・ボイムレル』のファンクション
// *==========================================================================*

// マドレンをトグルする
function toggleMadlenBaeumler() {
    let divMadlenBaeumler = document.getElementById("MadlenBaeumler");
    if (window.getComputedStyle(divMadlenBaeumler).display === "none") {
        // ＯＮにする
        divMadlenBaeumler.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divMadlenBaeumler.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『アロイス・ブリュヘル』のファンクション
// *==========================================================================*

// アロイスをトグルする
function toggleAloisBluecher() {
    let divAloisBluecher = document.getElementById("AloisBluecher");
    if (window.getComputedStyle(divAloisBluecher).display === "none") {
        // ＯＮにする
        divAloisBluecher.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divAloisBluecher.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『フィッシュ・ファックス』のファンクション
// *==========================================================================*

// フィッシュをトグルする
function toggleFischFuchs() {
    let divFischFuchs = document.getElementById("FischFuchs");
    if (window.getComputedStyle(divFischFuchs).display === "none") {
        // ＯＮにする
        divFischFuchs.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divFischFuchs.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ファルコ・ゲールデル』のファンクション
// *==========================================================================*

// ファルコをトグルする
function toggleFalkoGoerder() {
    let divFalkoGoerder = document.getElementById("FalkoGoerder");
    if (window.getComputedStyle(divFalkoGoerder).display === "none") {
        // ＯＮにする
        divFalkoGoerder.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divFalkoGoerder.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ヴィーブケ・ケーレル＝ケーネ』のファンクション
// *==========================================================================*

// ヴィーブケをトグルする
function toggleWiebkeKoehlerKoehne() {
    let divWiebkeKoehlerKoehne = document.getElementById("WiebkeKoehlerKoehne");
    if (window.getComputedStyle(divWiebkeKoehlerKoehne).display === "none") {
        // ＯＮにする
        divWiebkeKoehlerKoehne.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divWiebkeKoehlerKoehne.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『リケ・ニチュ』のファンクション
// *==========================================================================*

// リケをトグルする
function toggleRikeNitzsch() {
    let divRikeNitzsch = document.getElementById("RikeNitzsch");
    if (window.getComputedStyle(divRikeNitzsch).display === "none") {
        // ＯＮにする
        divRikeNitzsch.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divRikeNitzsch.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ビェールン・プライッス』のファンクション
// *==========================================================================*

// ビェールンをトグルする
function toggleBjoernPreiss() {
    let divBjoernPreiss = document.getElementById("BjoernPreiss");
    if (window.getComputedStyle(divBjoernPreiss).display === "none") {
        // ＯＮにする
        divBjoernPreiss.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divBjoernPreiss.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『イェールグ・シュヴァルツェンベルゲル』のファンクション
// *==========================================================================*

// イェールグをトグルする
function toggleJoergSchwarzenberger() {
    let divJoergSchwarzenberger = document.getElementById("JoergSchwarzenberger");
    if (window.getComputedStyle(divJoergSchwarzenberger).display === "none") {
        // ＯＮにする
        divJoergSchwarzenberger.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divJoergSchwarzenberger.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ティム・ヴェルゼル』のファンクション
// *==========================================================================*

// ティムをトグルする
function toggleTimmWelser() {
    let divTimmWelser = document.getElementById("TimmWelser");
    if (window.getComputedStyle(divTimmWelser).display === "none") {
        // ＯＮにする
        divTimmWelser.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divTimmWelser.style.display = "none";
        return 0;
    }
}

// *==========================================================================*
// 『ティア・ヴィッスマン』のファンクション
// *==========================================================================*

// ティアをトグルする
function toggleTiaWissman() {
    let divTiaWissmann = document.getElementById("TiaWissmann");
    if (window.getComputedStyle(divTiaWissmann).display === "none") {
        // ＯＮにする
        divTiaWissmann.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divTiaWissmann.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle5 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle5() {
    toggleNiedernraeschenVillage();
    toggleMadlenBaeumler();
    toggleAloisBluecher();
    toggleFischFuchs();
    toggleFalkoGoerder();
    toggleWiebkeKoehlerKoehne();
    toggleRikeNitzsch();
    toggleBjoernPreiss();
    toggleJoergSchwarzenberger();
    toggleTimmWelser();
    toggleTiaWissman();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『アムステルリヘム＝ミッデルヴェーン町』のファンクション
// *==========================================================================*

// アムステルリヘム＝ミッデルヴェーン町をトグルする
function toggleAmstelrichemMiddelveenTown() {
    let divAmstelrichemMiddelveenTown = document.getElementById("AmstelrichemMiddelveenTown");
    if (window.getComputedStyle(divAmstelrichemMiddelveenTown).display === "none") {
        // ＯＮにする
        divAmstelrichemMiddelveenTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divAmstelrichemMiddelveenTown.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle6 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle6() {
    toggleAmstelrichemMiddelveenTown();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『ダシュガプ町』のファンクション
// *==========================================================================*

// ダシュガプ町をトグルする
function toggleDasgapTown() {
    let divDasgapTown = document.getElementById("DasgapTown");
    if (window.getComputedStyle(divDasgapTown).display === "none") {
        // ＯＮにする
        divDasgapTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divDasgapTown.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle7 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle7() {
    toggleDasgapTown();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『テュルケナバト町』のファンクション
// *==========================================================================*

// テュルケナバト町をトグルする
function toggleTurkenabatTown() {
    let divTurkenabatTown = document.getElementById("TurkenabatTown");
    if (window.getComputedStyle(divTurkenabatTown).display === "none") {
        // ＯＮにする
        divTurkenabatTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divTurkenabatTown.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle8 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle8() {
    toggleTurkenabatTown();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『サイゾブ町』のファンクション
// *==========================================================================*

// サイゾブ町をトグルする
function toggleSayzowTown() {
    let divSayzowTown = document.getElementById("SayzowTown");
    if (window.getComputedStyle(divSayzowTown).display === "none") {
        // ＯＮにする
        divSayzowTown.style.display = "block";
        return 0;
    } else {
        // ＯＦＦにする
        divSayzowTown.style.display = "none";
        return 0;
    }
}

// ****************************************************************************
// toggle9 function
// ****************************************************************************

// トグルする事のファンクションを組み合す
function _toggle9() {
    toggleSayzowTown();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// 『全ての為に』のファンクション
// *==========================================================================*

// 全てをトグルする
function toggleAll() {
    _toggle0();
    _toggle1();
    _toggle2();
    _toggle3();
    _toggle4();
    _toggle5();
    _toggle6();
    _toggle7();
    _toggle8();
    _toggle9();
    return 0;
}

// *--------------------------------------------------------------------------*

// *==========================================================================*
// アーカイブしたファンクション
// *==========================================================================*

/*
// Function for the "Hide all" / 『全てを隠す』 button
function hideAll() {
    return 0;
}
*/

/*
// Function for the "Reveal all" / 『全てを現す』 button
function revealAll() {
    return 0;
}
*/
