/**
 * ============================================================
 * Works / Goods カタログ（フィルタ編集はここだけ見ればOK）
 * ============================================================
 *
 * 【フィルタの付け方】
 * 1. 下の FILTERS 配列にボタン名を並べる（表示順＝この順番）
 * 2. 各作品/グッズの filter に、そのボタン名をそのまま書く
 *
 * 例） filter: "ブース型"
 * 複数のボタンに出したいとき） filter: ["ブース型", "その他"]
 *
 * 「すべて」は全件表示用なので、各アイテムの filter には書かないでください。
 * ============================================================
 */

/* ---- Works のフィルタボタン（左からこの順） ---- */
window.DRAFT_WORK_FILTERS = [
  "すべて",
  "ルーム型",
  "ブース型",
  "ホール型",
  "カフェ型",
  "その他",
];

/* ---- Goods のフィルタボタン（左からこの順） ---- */
window.DRAFT_GOOD_FILTERS = [
  "すべて",
  "キット",
  "Web",
  "その他",
];

/* ---- 制作した公演 ---- */
window.DRAFT_WORKS = [
  {
    id: "booster-coaster",
    title: "ブースターコースター",
    tag: "ブース突破型",
    filter: "その他",
    date: "2026/9/26〜",
    image: "assets/works/booster-coaster.webp",
    story: "これは、たくさんのブース型公演を突破していく、とても忙しい謎解きゲームです。",
  },
  {
    id: "kakemegure-muriyari",
    title: "かけめぐれ！ムリヤリセイトンスケルトン",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2026/9/26〜",
    image: "assets/works/kakemegure-muriyari.webp",
    story: "これは、ルームの中をかけめぐり、スケルトンパズルをムリヤリ解き明かす謎解きゲームです。",
  },
  {
    id: "tabunnani",
    title: "たぶんなに？",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2026/9/26〜",
    image: "assets/works/tabunnani.webp",
    story: "これは、たくさんの謎の答えを「推測」する謎解きゲームです。",
  },
  {
    id: "nazone-fes-2026",
    title: "NAZONE FES 2026",
    tag: "フェス",
    filter: "その他",
    date: "2026/9/26〜",
    image: "assets/works/nazone-fes-2026.webp",
    story: "NAZONE 新作中心のフェス型イベント「NAZONE FES 2026」",
  },
  {
    id: "girigiri-danshari",
    title: "ギリギリダンシャリ",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2026/5/2〜",
    image: "assets/works/girigiri-danshari.webp",
    story: "何かを捨てて解き進め！ これは、何かを捨てながらたくさんの謎を解きスコアを稼ぐ、スコアアタック型の謎解きゲーム。",
  },
  {
    id: "groove",
    title: "GROOVE",
    tag: "ホール型",
    filter: "ホール型",
    date: "2025/7/18〜",
    image: "assets/works/groove.webp",
    story: "ようこそ、不思議を愛する者しかたどり着けない秘密のジャズバー、『GROOVE』へ。",
  },
  {
    id: "second-run",
    title: "NAZONE SECOND RUN",
    tag: "フェス",
    filter: "その他",
    date: "2025/5/17〜",
    image: "assets/works/second-run.png",
    story: "NAZONE 初の再演中心のフェス型イベント「NAZONE SECOND RUN」",
  },
  {
    id: "kakikeshi-run",
    title: "カキケシラン！",
    tag: "ブース型",
    filter: "ブース型",
    date: "2025/5/17〜",
    image: "assets/works/kakikeshi-run.webp",
    story: "書いて！消して！考えて！",
  },
  {
    id: "ganbare-muriyari",
    title: "頑張れ！ムリヤリセイトンスケルトン",
    tag: "ブース型",
    filter: "ブース型",
    date: "2025/5/17〜",
    image: "assets/works/ganbare-muriyari.webp",
    story: "挑み続けろ、無理難題に──。",
  },
  {
    id: "motto-muriyari",
    title: "もっと！ムリヤリセイトンスケルトン",
    tag: "ブース型",
    filter: "ブース型",
    date: "2024/12/7〜",
    image: "assets/works/motto-muriyari.png",
    story: "ひらめきで解き明かす不思議なスケルトンパズルをもっともっと楽しめる！！！",
  },
  {
    id: "kaburu-ensemble",
    title: "カブルアンサンブル",
    tag: "ブース型",
    filter: "ブース型",
    date: "2024/11/3〜",
    image: "assets/works/kaburu-ensemble.png",
    story: "「カブリ」を見つけて攻略しろ！",
  },
  {
    id: "dustrush",
    title: "DUSTRUSH",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2024/10/12〜",
    image: "assets/works/dustrush.webp",
    story: "この会場の掃除は、皆さんの役目です。",
  },
  {
    id: "muriyari",
    title: "ムリヤリセイトンスケルトン",
    tag: "ブース型",
    filter: "ブース型",
    date: "2024/7/13〜",
    image: "assets/works/muriyari.png",
    story: "一風変わった「スケルトンパズル」を 最後まで攻略しろ!!",
  },
  {
    id: "aketari-tojitari-2",
    title: "◁アケタリ▷ ▷トジタリ◁2",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2024/2/23〜",
    image: "assets/works/aketari-tojitari-2.png",
    story: "気が付くと、また見知らぬ部屋にトジ込められてしまったあなた",
  },
  {
    id: "alive",
    title: "ALIVE",
    tag: "ホール型",
    filter: "ホール型",
    date: "2023/12/16〜",
    image: "assets/works/alive.webp",
    story: "あなたは、人生を何度送っても使いきれない巨万の富を手に入れた大金持ち。",
  },
  {
    id: "nazo-teikyo",
    title: "謎を提供して下さい",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2023/10/28〜",
    image: "assets/works/nazo-teikyo.webp",
    story: "あなたたちは江の島へとやってきた観光客一行",
  },
  {
    id: "shujin-game",
    title: "囚人ゲヱム",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2023/7/29〜",
    image: "assets/works/shujin-game.webp",
    story: "「こちらが実際に使われていた牢屋です──」",
  },
  {
    id: "nazomen",
    title: "謎免試験",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2023/4/15〜",
    image: "assets/works/nazomen.png",
    story: "近年、自動車の運転における注意力や対応力の重要性がより指摘されるようになり、",
  },
  {
    id: "aketari-tojitari",
    title: "◁アケタリ▷ ▷トジタリ◁",
    tag: "ルーム型",
    filter: "ルーム型",
    date: "2022/11〜",
    image: "assets/works/aketari-tojitari.png",
    story: "いつの間にか見知らぬ部屋にトジ込められてしまったあなた",
  },
  {
    id: "hudebako",
    title: "筆箱謎",
    tag: "カフェ型",
    filter: "カフェ型",
    date: "2022/10〜",
    image: "assets/works/hudebako.jpg",
    story: "✏️文房具を駆使して謎を解け📙📐📎",
  },
];

/* ---- 制作したグッズ（LINE謎 / WEB謎 含む） ---- */
window.DRAFT_GOODS = [
  {
    id: "mazu-naiyoubutsu",
    title: "まずは内容物一覧をご確認ください！",
    tag: "キット",
    filter: "キット",
    date: "2026/11/7〜",
    image: "assets/goods/mazu-naiyoubutsu.png",
    story: "頼みの綱はたった一枚……！？〈内容物一覧〉だけを頼りに、ムリヤリ謎を解き明かせ！",
  },
  {
    id: "okudake-puzzle",
    title: "オクダケパズル",
    tag: "キット",
    filter: "キット",
    date: "2025年",
    image: "assets/goods/okudake-puzzle.webp",
    story: "筆記用具は必要なし！？ 4つのキューブを「置くだけで」解き明かす新感覚の謎解きパズルブックです！",
  },
  {
    id: "bakusou-nazotoki",
    title: "頭が良くなる！爆走！ナゾトキ大冒険",
    tag: "書籍",
    filter: "その他",
    date: "2022/12〜",
    image: "assets/goods/bakusou-nazotoki.webp",
    story: "NAZONEが第2章と他一部制作！",
  },
  {
    id: "start",
    title: "はじまり START",
    tag: "LINE謎",
    filter: "Web",
    date: "2021/6〜",
    image: "assets/goods/start.jpeg",
    story: "NAZONEのLINE謎第4弾",
  },
  {
    id: "umi-escape",
    title: "ある海からの脱出",
    tag: "LINE謎",
    filter: "Web",
    date: "2020/12〜",
    image: "assets/goods/umi-escape.jpeg",
    story: "🌊NAZONEのLINE謎第3弾🌊",
  },
  {
    id: "nazomori",
    title: "ようこそ なぞときの森",
    tag: "LINE謎",
    filter: "Web",
    date: "2020/10〜",
    image: "assets/goods/nazomori.jpeg",
    story: "NAZONEのLINE謎第2弾",
  },
  {
    id: "piennazo",
    title: "ぴえん謎",
    tag: "LINE謎",
    filter: "Web",
    date: "2020/8〜",
    image: "assets/goods/piennazo.jpeg",
    story: "NAZONEのLINE謎第1弾",
  },
  {
    id: "hanasaki",
    title: "花咲き誇る処にて",
    tag: "WEB謎",
    filter: "Web",
    date: "2020/5〜",
    image: "assets/goods/hanasaki.jpeg",
    story: "春も終わりそうな暑さですが、今年の春は花をあまり見ていない！という人も多いのでは…？",
  },
];

/* 日付文字列（例: 2026/9/26〜, 2025年, 2022/11〜）を新しい順に並べる */
window.DRAFT_parseDate = function (value) {
  const m = String(value || "").match(/(\d{4})(?:[/年](\d{1,2}))?(?:\/(\d{1,2}))?/);
  if (!m) return 0;
  return Date.UTC(Number(m[1]), Number(m[2] || 1) - 1, Number(m[3] || 1));
};

window.DRAFT_sortByDateDesc = function (list) {
  return (list || []).slice().sort(function (a, b) {
    return window.DRAFT_parseDate(b.date) - window.DRAFT_parseDate(a.date);
  });
};
