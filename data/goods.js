/**
 * GOODS ページ用データ
 * 画像は assets/goods/ に置いてください
 */
const GOODS = [
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
    id: "mazu-naiyoubutsu",
    title: "まずは内容物一覧をご確認ください！",
    date: "2025年",
    year: 2025,
    image: "mazu-naiyoubutsu.png",
    clearImage: "mazu-naiyoubutsu-clear.png",
    sharePath: "share/naiyoubutsu-clear/",
    about:
      "頼みの綱はたった1枚……！？\n\nこのゲームでは、謎解きの一番最初に確認する〈内容物一覧〉だけを使ってムリヤリ謎を解いていただきます！\n\n個性豊かな内容物一覧たちをぜひご確認ください！",
    meta: [],
    hashtag: "#まずは内容物一覧をご確認ください",
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
