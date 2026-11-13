/**
 * GOODS ページ用データ
 * 画像は assets/goods/ に置いてください
 * 詳細文は https://nazone-web.studio.site/contents から反映
 */
const GOODS = [
  {
    id: "mazu-naiyoubutsu",
    title: "まずは内容物一覧をご確認ください！",
    date: "2026年",
    year: 2026,
    image: "mazu-naiyoubutsu.png",
    clearImage: "mazu-naiyoubutsu-clear.png",
    sharePath: "share/naiyoubutsu-clear/",
    about: "頼みの綱はたった1枚……！？\n\nこのゲームでは、謎解きの一番最初に確認する〈内容物一覧〉だけを使ってムリヤリ謎を解いていただきます！\n\n個性豊かな内容物一覧たちをぜひご確認ください！",
    meta: [],
    hashtag: "#まずは内容物一覧をご確認ください",
  },
  {
    id: "okudake-puzzle",
    title: "オクダケパズル",
    date: "2025年",
    year: 2025,
    image: "okudake-puzzle.webp",
    about: "筆記用具は必要なし！？\n4つのキューブを「置くだけで」解き明かす新感覚の謎解きパズルブックです！\n盤面や問題の一部にキューブを正しく置くだけ……ですが、中にはひらめかないと一筋縄では解けないものも……！？\n1人でじっくり楽しんだり、友達や家族とわいわい楽しんだり、個性豊かな「オクダケパズル」たちをどうぞご堪能ください！！！",
    meta: ["所要時間：約40~80分"],
    hashtag: "#オクダケパズル",
  },
  {
    id: "bakusou-nazotoki",
    title: "頭が良くなる！爆走！ナゾトキ大冒険",
    date: "2022/12/13〜",
    year: 2022,
    image: "bakusou-nazotoki.webp",
    about: "NAZONEが第2章と他一部制作！\nAmazonにて販売中",
    meta: [],
    hashtag: "",
  },
  {
    id: "hanasaki",
    title: "花咲き誇る処にて",
    date: "2020/5/16〜",
    year: 2020,
    image: "hanasaki.jpeg",
    about: "春も終わりそうな暑さですが、今年の春は花をあまり見ていない！という人も多いのでは…？\nそんな皆様に、私たちから花を巡る物語を送ります。\n【花咲き誇る処にて】\n是非、花の織りなす素敵な世界をお楽しみください\nWEB上でプレイする謎解きゲーム",
    meta: [],
    hashtag: "#花咲謎",
  },
  {
    id: "start",
    title: "はじまり START",
    date: "2021/6/6〜",
    year: 2021,
    image: "start.jpeg",
    about: "NAZONEのLINE謎第4弾\n終わらない謎解きが今はじまる───\nLINE上でプレイする謎解きゲーム",
    meta: [],
    hashtag: "#はじまり謎",
  },
  {
    id: "umi-escape",
    title: "ある海からの脱出",
    date: "2020/12/27〜",
    year: 2020,
    image: "umi-escape.jpeg",
    about: "🌊NAZONEのLINE謎第3弾🌊\n気づけばあなたは海にいる。\n綺麗な海の上で、綺麗な謎を解き明かせ🐚\nLINE上でプレイする謎解きゲーム",
    meta: [],
    hashtag: "#海脱出",
  },
  {
    id: "nazomori",
    title: "ようこそ なぞときの森",
    date: "2020/10/10〜",
    year: 2020,
    image: "nazomori.jpeg",
    about: "NAZONEのLINE謎第2弾\nどうぶつの森の知識がなくても楽しめる無人島脱出パッケージ🏝️\nあなたは脱出成功できますか？\nLINE上でプレイする謎解きゲーム",
    meta: [],
    hashtag: "#なぞ森",
  },
  {
    id: "piennazo",
    title: "ぴえん謎",
    date: "2020/8/2〜",
    year: 2020,
    image: "piennazo.jpeg",
    about: "NAZONEのLINE謎第1弾\n細部まで凝りに凝ったJK感と謎解きのハーモニーをご堪能ください🥺\nLINE上でプレイする謎解きゲーム（現在LINEの仕様変更によりプレイ不可）",
    meta: [],
    hashtag: "#ぴえん謎",
  }
];

function getListedGoods() {
  return GOODS.filter((g) => g.listed !== false);
}

function getGoodById(id) {
  return GOODS.find((g) => g.id === id);
}

function getGoodYears() {
  return [...new Set(getListedGoods().map((g) => g.year).filter(Boolean))].sort(
    (a, b) => b - a
  );
}
