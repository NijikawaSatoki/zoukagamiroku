/* ============================================================================
 * ancient.js "旧神關里"
 * ============================================================================
 * 
 * 制作者：虹川郷鬼
 * 
 * [ja]
 * このファイルはHTML「/html/ancient.html」の為にデザインしました。
 * 楽しみを持って。
 * 
 * [en]
 * This script file is for the HTML file located at
 *     /html/ancient.html
 * 
 * Enjoy!
 * 
 */

/* ┏━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃ 『古い都の町人、古代と現代』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideTownfolk() {
    document.getElementById("TheFormerCapitalThenAndNow").style.display = "none";
    return 0;
}

function revealTownfolk() {
    document.getElementById("TheFormerCapitalThenAndNow").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『柏嵜法牌香』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideKashizakiNoHakaruNoFudakau() {
    document.getElementById("KashizakiNoHakaruNoFudakau").style.display = "none";
    return 0;
}

function revealKashizakiNoHakaruNoFudakau() {
    document.getElementById("KashizakiNoHakaruNoFudakau").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『遠呂智蛇揺雨』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideOrochiNoHebiNoYurusame() {
    document.getElementById("OrochiNoHebiNoYurusame").style.display = "none";
    return 0;
}

function revealOrochiNoHebiNoYurusame() {
    document.getElementById("OrochiNoHebiNoYurusame").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『平也醒上丸』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideTairaNoYasameNoKamimaru() {
    document.getElementById("TairaNoYasameNoKamimaru").style.display = "none";
    return 0;
}

function revealTairaNoYasameNoKamimaru() {
    document.getElementById("TairaNoYasameNoKamimaru").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━━┓
 * ┃ 『夜叉町鐵奈我沙』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideYashamachiNoKuroganeNoNagasa() {
    document.getElementById("YashamachiNoKuroganeNoNagasa").style.display = "none";
    return 0;
}

function revealYashamachiNoKuroganeNoNagasa() {
    document.getElementById("YashamachiNoKuroganeNoNagasa").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide0` and `reveal0` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide0() {
    hideTownfolk();
    hideKashizakiNoHakaruNoFudakau();
    hideOrochiNoHebiNoYurusame();
    hideTairaNoYasameNoKamimaru();
    hideYashamachiNoKuroganeNoNagasa();
    return 0;
}

function reveal0() {
    revealTownfolk();
    revealKashizakiNoHakaruNoFudakau();
    revealOrochiNoHebiNoYurusame();
    revealTairaNoYasameNoKamimaru();
    revealYashamachiNoKuroganeNoNagasa();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* ┏━━━━━━━━━━━━━━━━━━┓
 * ┃ 『神關里の元帝王』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideFormerEmperors() {
    document.getElementById("FormerEmperorsOfKansekiri").style.display = "none";
    return 0;
}

function revealFormerEmperors() {
    document.getElementById("FormerEmperorsOfKansekiri").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━━┓
 * ┃ 『一条久二乃良宗』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideIchijoNoKuniNoNoramune() {
    document.getElementById("IchijoNoKuniNoNoramune").style.display = "none";
    return 0;
}

function revealIchijoNoKuniNoNoramune() {
    document.getElementById("IchijoNoKuniNoNoramune").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『二条清八太郎』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideNijoNoKiyoNoYataro() {
    document.getElementById("NijoNoKiyoNoYataro").style.display = "none";
    return 0;
}

function revealNijoNoKiyoNoYataro() {
    document.getElementById("NijoNoKiyoNoYataro").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『三條麹丸雨』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideSanjoNoKoujiNoMarusame() {
    document.getElementById("SanjoNoKoujiNoMarusame").style.display = "none";
    return 0;
}

function revealSanjoNoKoujiNoMarusame() {
    document.getElementById("SanjoNoKoujiNoMarusame").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『源蜘彩歌子』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideMinamotoNoKumoNoAyakashi() {
    document.getElementById("MinamotoNoKumoNoAyakashi").style.display = "none";
    return 0;
}

function revealMinamotoNoKumoNoAyakashi() {
    document.getElementById("MinamotoNoKumoNoAyakashi").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『平榊間美智』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideTairaNoSakamaNoYoshitomo() {
    document.getElementById("TairaNoSakamaNoYoshitomo").style.display = "none";
    return 0;
}

function revealTairaNoSakamaNoYoshitomo() {
    document.getElementById("TairaNoSakamaNoYoshitomo").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『藤原裁峰義』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideFujiwaraNoSaiNoMineyoshi() {
    document.getElementById("FujiwaraNoSaiNoMineyoshi").style.display = "none";
    return 0;
}

function revealFujiwaraNoSaiNoMineyoshi() {
    document.getElementById("FujiwaraNoSaiNoMineyoshi").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『橘藪根岸仁』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideTachibanaNoYabuneNoKishihito() {
    document.getElementById("TachibanaNoYabuneNoKishihito").style.display = "none";
    return 0;
}

function revealTachibanaNoYabuneNoKishihito() {
    document.getElementById("TachibanaNoYabuneNoKishihito").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『物部鑓殺奈』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideMononobeNoYariNoSetsuna() {
    document.getElementById("MononobeNoYariNoSetsuna").style.display = "none";
    return 0;
}

function revealMononobeNoYariNoSetsuna() {
    document.getElementById("MononobeNoYariNoSetsuna").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『九条纖本盛』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideKujoNoShinaNoMotomori() {
    document.getElementById("KujoNoShinaNoMotomori").style.display = "none";
    return 0;
}

function revealKujoNoShinaNoMotomori() {
    document.getElementById("KujoNoShinaNoMotomori").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『蘇我牀遣仁』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideSogaNoYukaNoYaruhito() {
    document.getElementById("SogaNoYukaNoYaruhito").style.display = "none";
    return 0;
}

function revealSogaNoYukaNoYaruhito() {
    document.getElementById("SogaNoYukaNoYaruhito").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『足利畔蒜毬二』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideAshikagaNoKuroneNoMariji() {
    document.getElementById("AshikagaNoKuroneNoMariji").style.display = "none";
    return 0;
}

function revealAshikagaNoKuroneNoMariji() {
    document.getElementById("AshikagaNoKuroneNoMariji").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『鷹司闇光之郞』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideTakatsukasaNoYamiNoMitsunoro() {
    document.getElementById("TakatsukasaNoYamiNoMitsunoro").style.display = "none";
    return 0;
}

function revealTakatsukasaNoYamiNoMitsunoro() {
    document.getElementById("TakatsukasaNoYamiNoMitsunoro").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『德川衣世探重』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideTokugawaNoIyoNoSagashishige() {
    document.getElementById("TokugawaNoIyoNoSagashishige").style.display = "none";
    return 0;
}

function revealTokugawaNoIyoNoSagashishige() {
    document.getElementById("TokugawaNoIyoNoSagashishige").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━━┓
 * ┃ 『大炊御門鈴鵜麻』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideOinomikadoNoSuzuNoUma() {
    document.getElementById("OinomikadoNoSuzuNoUma").style.display = "none";
    return 0;
}

function revealOinomikadoNoSuzuNoUma() {
    document.getElementById("OinomikadoNoSuzuNoUma").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『西園寺綯清宗』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideSaionjiNoNauNoKiyomune() {
    document.getElementById("SaionjiNoNauNoKiyomune").style.display = "none";
    return 0;
}

function revealSaionjiNoNauNoKiyomune() {
    document.getElementById("SaionjiNoNauNoKiyomune").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━┓
 * ┃ 『醍醐猿概』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━┛
 * 
 */

function hideDaigoNoSaruNoOmune() {
    document.getElementById("DaigoNoSaruNoOmune").style.display = "none";
    return 0;
}

function revealDaigoNoSaruNoOmune() {
    document.getElementById("DaigoNoSaruNoOmune").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━━┓
 * ┃ 『今出川裙兔雪丸』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideImadegawaNoGuntoNoSetsumaru() {
    document.getElementById("ImadegawaNoGuntoNoSetsumaru").style.display = "none";
    return 0;
}

function revealImadegawaNoGuntoNoSetsumaru() {
    document.getElementById("ImadegawaNoGuntoNoSetsumaru").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『德大寺誇宗沙』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideTokudaijiNoHokoruNoMunesa() {
    document.getElementById("TokudaijiNoHokoruNoMunesa").style.display = "none";
    return 0;
}

function revealTokudaijiNoHokoruNoMunesa() {
    document.getElementById("TokudaijiNoHokoruNoMunesa").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『近衛鞠染鮫』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

function hideKonoeNoMariNoSomezame() {
    document.getElementById("KonoeNoMariNoSomezame").style.display = "none";
    return 0;
}

function revealKonoeNoMariNoSomezame() {
    document.getElementById("KonoeNoMariNoSomezame").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『菊亭馬海春盛』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideKikuteiNoUmakaiNoHarumori() {
    document.getElementById("KikuteiNoUmakaiNoHarumori").style.display = "none";
    return 0;
}

function revealKikuteiNoUmakaiNoHarumori() {
    document.getElementById("KikuteiNoUmakaiNoHarumori").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━━┓
 * ┃ 『花山院墨染花清』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideKasannoinNoSumizomeNoHananokiyo() {
    document.getElementById("KasannoinNoSumizomeNoHananokiyo").style.display = "none";
    return 0;
}

function revealKasannoinNoSumizomeNoHananokiyo() {
    document.getElementById("KasannoinNoSumizomeNoHananokiyo").style.display = "unset";
    return 0;
}

/* ┏━━━━━━━━━━━━━━━━━┓
 * ┃ 『遊坂茜志奴呂』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━━┛
 * 
 */

function hideYuuzakaNoAkaneNoShinuro() {
    document.getElementById("YuuzakaNoAkaneNoShinuro").style.display = "none";
    return 0;
}

function revealYuuzakaNoAkaneNoShinuro() {
    document.getElementById("YuuzakaNoAkaneNoShinuro").style.display = "unset";
    return 0;
}

// ****************************************************************************
// `hide1` and `reveal1` functions for hideAll() and revealAll(), respectively
// ****************************************************************************

function hide1() {
    hideFormerEmperors();
    hideIchijoNoKuniNoNoramune();
    hideNijoNoKiyoNoYataro();
    hideSanjoNoKoujiNoMarusame();
    hideMinamotoNoKumoNoAyakashi();
    hideTairaNoSakamaNoYoshitomo();
    hideFujiwaraNoSaiNoMineyoshi();
    hideTachibanaNoYabuneNoKishihito();
    hideMononobeNoYariNoSetsuna();
    hideKujoNoShinaNoMotomori();
    hideSogaNoYukaNoYaruhito();
    hideAshikagaNoKuroneNoMariji();
    hideTakatsukasaNoYamiNoMitsunoro();
    hideTokugawaNoIyoNoSagashishige();
    hideOinomikadoNoSuzuNoUma();
    hideSaionjiNoNauNoKiyomune();
    hideDaigoNoSaruNoOmune();
    hideImadegawaNoGuntoNoSetsumaru();
    hideTokudaijiNoHokoruNoMunesa();
    hideKonoeNoMariNoSomezame();
    hideKikuteiNoUmakaiNoHarumori();
    hideKasannoinNoSumizomeNoHananokiyo();
    hideYuuzakaNoAkaneNoShinuro();
    return 0;
}

function reveal1() {
    revealFormerEmperors();
    revealIchijoNoKuniNoNoramune();
    revealNijoNoKiyoNoYataro();
    revealSanjoNoKoujiNoMarusame();
    revealMinamotoNoKumoNoAyakashi();
    revealTairaNoSakamaNoYoshitomo();
    revealFujiwaraNoSaiNoMineyoshi();
    revealTachibanaNoYabuneNoKishihito();
    revealMononobeNoYariNoSetsuna();
    revealKujoNoShinaNoMotomori();
    revealSogaNoYukaNoYaruhito();
    revealAshikagaNoKuroneNoMariji();
    revealTakatsukasaNoYamiNoMitsunoro();
    revealTokugawaNoIyoNoSagashishige();
    revealOinomikadoNoSuzuNoUma();
    revealSaionjiNoNauNoKiyomune();
    revealDaigoNoSaruNoOmune();
    revealImadegawaNoGuntoNoSetsumaru();
    revealTokudaijiNoHokoruNoMunesa();
    revealKonoeNoMariNoSomezame();
    revealKikuteiNoUmakaiNoHarumori();
    revealKasannoinNoSumizomeNoHananokiyo();
    revealYuuzakaNoAkaneNoShinuro();
    return 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* ┏━━━━━━━━━━━━━━━━┓
 * ┃ 『全ての為に』のファンクション ┃
 * ┗━━━━━━━━━━━━━━━━┛
 * 
 */

// Function for the "Hide all" / 『全てを隠す』 button
function hideAll() {
    hide0();
    hide1();
    return 0;
}

// Function for the "Reveal all" / 『全てを現す』 button
function revealAll() {
    reveal0();
    reveal1();
    return 0;
}
