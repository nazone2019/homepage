/**
 * GOODS ページ用データ
 * 画像は assets/goods/ に置いてください
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
    about:
      "頼みの綱はたった1枚……！？\n\nこのゲームでは、謎解きの一番最初に確認する〈内容物一覧〉だけを使ってムリヤリ謎を解いていただきます！\n\n個性豊かな内容物一覧たちをぜひご確認ください！",
    meta: [],
    hashtag: "#まずは内容物一覧をご確認ください",
  },
  {
    id: "okudake-puzzle",
    title: "オクダケパズル",
    date: "2025年",
    year: 2025,
    image: "okudake-puzzle.webp",
    about:
      "筆記用具は必要なし！？\n4つのキューブを「置くだけで」解き明かす新感覚の謎解きパズルブックです！\n盤面や問題の一部にキューブを正しく置くだけ……ですが、中にはひらめかないと一筋縄では解けないものも……！？\n1人でじっくり楽しんだり、友達や家族とわいわい楽しんだり、個性豊かな「オクダケパズル」たちをどうぞご堪能ください！！！",
    meta: ["所要時間：約40~80分"],
    hashtag: "#オクダケパズル",
  },
  {
    id: "bakusou-nazotoki",
    title: "頭が良くなる！爆走！ナゾトキ大冒険",
    date: "2022/12〜",
    year: 2022,
    image: "bakusou-nazotoki.webp",
    about: "書籍。企業さまとのコラボ実績。",
    meta: [],
    hashtag: "",
  },
  {
    id: "hanasaki",
    title: "花咲き誇る処にて",
    date: "2020/5",
    year: 2020,
    image: "hanasaki.jpeg",
    about:
      "NAZONE初期のWEB謎。花が咲き誇る場所を舞台にした、団体最初期の作品です。",
    meta: [],
    hashtag: "",
  },
  {
    id: "start",
    title: "はじまり START",
    date: "2021/6",
    year: 2021,
    image: "start.jpeg",
    about:
      "LINE上で進行する謎解き。物語の「はじまり」をテーマにした初期のLINE謎です。",
    meta: [],
    hashtag: "",
  },
  {
    id: "umi-escape",
    title: "ある海からの脱出",
    date: "2020/12",
    year: 2020,
    image: "umi-escape.jpeg",
    about:
      "海を舞台にした脱出モチーフのLINE謎。初期の物語型コンテンツのひとつです。",
    meta: [],
    hashtag: "",
  },
  {
    id: "nazomori",
    title: "ようこそ なぞときの森",
    date: "2020/10",
    year: 2020,
    image: "nazomori.jpeg",
    about:
      "森を舞台にしたLINE謎。「なぞときの森」へ誘う、初期の世界観づくりが特徴です。",
    meta: [],
    hashtag: "",
  },
  {
    id: "piennazo",
    title: "ぴえん謎",
    date: "2020/8",
    year: 2020,
    image: "piennazo.jpeg",
    about:
      "「ぴえん」をモチーフにしたLINE謎。気軽に遊べる初期デジタルコンテンツです。",
    meta: [],
    hashtag: "",
  },
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
