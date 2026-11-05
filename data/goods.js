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
      "このゲームでは謎解きに必要なものが全てそろっているか確認するための「内容物一覧の紙」だけを使って、その紙に書かれた謎の答えを頑張って推測していただきます！\n今回登場する内容物一覧は全部で10枚。ステップごとに順番に確認していきましょう。\nこのゲームで重要になるのは、ズバリ「想像力」。内容物一覧に書かれた内容物たちが実際にあったらどうなるのか……どうぞ皆さまの想像力を膨らませながらお楽しみください！",
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
