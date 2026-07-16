/**
 * WORKS ページ用データ
 * 画像は assets/works/ に置いてください
 */
const WORKS = [
  {
    id: "girigiri-danshari",
    title: "ギリギリダンシャリ",
    date: "2026/5/2.3",
    year: 2026,
    image: "girigiri-danshari.webp",
    featured: true,
    story: "何かを捨てて解き進め！\nこれは、何かを捨てながらたくさんの謎を解きスコアを稼ぐ、スコアアタック型の謎解きゲーム。\n攻略の鍵は「捨てる勇気」！\n何かを捨てて！目指せハイスコア！！！",
    about: "",
    meta: ["拘束時間：約30分", "プレイ人数：1~2名"],
    hashtag: "#ギリギリダンシャリ",
    history: ["2026.5.2-3 @ヒラメキパーティー2026（新潟日報メディアシップ）"],
  },
  {
    id: "okudake-puzzle",
    title: "オクダケパズル",
    date: "2025年",
    year: 2025,
    image: "okudake-puzzle.webp",
    story: "",
    about:
      "筆記用具は必要なし！？\n4つのキューブを「置くだけで」解き明かす新感覚の謎解きパズルブックです！\n盤面や問題の一部にキューブを正しく置くだけ……ですが、中にはひらめかないと一筋縄では解けないものも……！？\n1人でじっくり楽しんだり、友達や家族とわいわい楽しんだり、個性豊かな「オクダケパズル」たちをどうぞご堪能ください！！！",
    meta: ["所要時間：約40~80分"],
    hashtag: "#オクダケパズル",
    history: [],
  },
  {
    id: "groove",
    title: "GROOVE",
    date: "2025/7/18",
    year: 2025,
    image: "groove.webp",
    story:
      "ようこそ、不思議を愛する者しかたどり着けない秘密のジャズバー、『GROOVE』へ。\nここは全ての娯楽が集う場所。酒も、音楽も、もちろん謎も。\n「さぁ、まずは席について……」\nこのバーには、今宵もジャズと不思議が鳴り響く──。",
    about: "",
    meta: ["拘束時間：約120分", "プレイ人数：1~4名"],
    hashtag: "#NANICAGROOVE",
    history: [
      "2025.7.18-8.11 @NANICA",
      "※タカラッシュ様のホール型公演のディレクター/謎制作協力となります",
    ],
  },
  {
    id: "second-run",
    title: "NAZONE SECOND RUN",
    date: "2025/5/17",
    year: 2025,
    image: "second-run.png",
    about: "NAZONEの過去公演を再演するイベント。",
    meta: [],
    hashtag: "",
    history: ["2025.5.17 @タイムシェアリング四谷"],
  },
  {
    id: "kakikeshi-run",
    title: "カキケシラン！",
    date: "2025/5/17",
    year: 2025,
    image: "kakikeshi-run.webp",
    about: "筆記用具で解き進める体験型謎解き。",
    meta: [],
    hashtag: "",
    history: ["2025.5 公演"],
  },
  {
    id: "ganbare-muriyari",
    title: "頑張れ！ムリヤリセイトンスケルトン",
    date: "2025/5/17",
    year: 2025,
    image: "ganbare-muriyari.webp",
    story: "挑み続けろ、無理難題に──。\nこれは、「普通には解けない」ムリヤリセイトンスケルトンです。",
    about: "",
    meta: ["拘束時間：約25分", "プレイ人数：1~2名"],
    hashtag: "#がんばれトントン",
    history: [
      "2025.5.17 @NAZONE SECOND RUN（タイムシェアリング四谷）",
      "2025.7.19-21 @大阪最宴祭12（浪速区民センター）",
    ],
  },
  {
    id: "motto-muriyari",
    title: "もっと！ムリヤリセイトンスケルトン",
    date: "2024/12/7.8",
    year: 2024,
    image: "motto-muriyari.png",
    about: "ムリヤリセイトンスケルトンシリーズ。",
    history: ["2024.12 公演"],
  },
  {
    id: "kaburu-ensemble",
    title: "カブルアンサンブル",
    date: "2024/11/3.4",
    year: 2024,
    image: "kaburu-ensemble.png",
    about: "かぶって楽しむ体験型謎解き。",
    history: ["2024.11 公演"],
  },
  {
    id: "dustrush",
    title: "DUSTRUSH",
    date: "2024/10/12〜14",
    year: 2024,
    image: "dustrush.webp",
    about: "2024年10月公演。",
    history: ["2024.10 公演"],
  },
  {
    id: "muriyari",
    title: "ムリヤリセイトンスケルトン",
    date: "2024/7/13〜15",
    year: 2024,
    image: "muriyari.png",
    about: "普通には解けないスケルトン型の謎解き。",
    history: ["2024.7 公演"],
  },
  {
    id: "aketari-tojitari-2",
    title: "◁アケタリ▷▷トジタリ◁2",
    date: "2024/2/23〜25",
    year: 2024,
    image: "aketari-tojitari-2.png",
    about: "開いて閉じて進める体験型謎解き。",
    history: ["2024.2 公演"],
  },
  {
    id: "alive",
    title: "ALIVE",
    date: "2023/12/16.17",
    year: 2023,
    image: "alive.webp",
    about: "2023年12月公演。",
    history: ["2023.12 公演"],
  },
  {
    id: "nazo-teikyo",
    title: "謎を提供して下さい",
    date: "2023/10/28.29",
    year: 2023,
    image: "nazo-teikyo.webp",
    about: "2023年10月公演。",
    history: ["2023.10 公演"],
  },
  {
    id: "shujin-game",
    title: "囚人ゲヱム",
    date: "2023/7/29.30",
    year: 2023,
    image: "shujin-game.webp",
    about: "2023年7月公演。",
    history: ["2023.7 公演"],
  },
  {
    id: "nazomen",
    title: "謎免試験",
    date: "2023/4/15.16",
    year: 2023,
    image: "nazomen.png",
    about: "謎解きの免許を取る試験型イベント。",
    history: ["2023.4 公演"],
  },
  {
    id: "bakusou-nazotoki",
    title: "頭が良くなる！爆走！ナゾトキ大冒険",
    date: "2022/12/13〜",
    year: 2022,
    image: "bakusou-nazotoki.webp",
    about: "書籍。企業さまとのコラボ実績。",
    history: ["2022.12 書籍"],
  },
  {
    id: "aketari-tojitari",
    title: "◁アケタリ▷▷トジタリ◁",
    date: "2022/11",
    year: 2022,
    image: "aketari-tojitari.png",
    about:
      "開いて、閉じて、解き進める体験型謎解き。\n「アケタリ／トジタリ」の操作そのものが謎になる、NAZONE初期の代表作です。",
    history: ["2022.11 公演"],
  },
  {
    id: "hudebako",
    title: "筆箱謎",
    date: "2022/10",
    year: 2022,
    image: "hudebako.jpg",
    about:
      "カフェで楽しむ謎解き。筆箱をモチーフにした小規模コンテンツです。",
    history: ["2022.10 カフェ謎"],
  },
  {
    id: "start",
    title: "はじまり START",
    date: "2021/6",
    year: 2021,
    image: "start.jpeg",
    about:
      "LINE上で進行する謎解き。物語の「はじまり」をテーマにした初期のLINE謎です。",
    history: ["2021.6 LINE謎"],
  },
  {
    id: "umi-escape",
    title: "ある海からの脱出",
    date: "2020/12",
    year: 2020,
    image: "umi-escape.jpeg",
    about:
      "海を舞台にした脱出モチーフのLINE謎。初期の物語型コンテンツのひとつです。",
    history: ["2020.12 LINE謎"],
  },
  {
    id: "nazomori",
    title: "ようこそ なぞときの森",
    date: "2020/10",
    year: 2020,
    image: "nazomori.jpeg",
    about:
      "森を舞台にしたLINE謎。「なぞときの森」へ誘う、初期の世界観づくりが特徴です。",
    history: ["2020.10 LINE謎"],
  },
  {
    id: "piennazo",
    title: "ぴえん謎",
    date: "2020/8",
    year: 2020,
    image: "piennazo.jpeg",
    about:
      "「ぴえん」をモチーフにしたLINE謎。気軽に遊べる初期デジタルコンテンツです。",
    history: ["2020.8 LINE謎"],
  },
  {
    id: "hanasaki",
    title: "花咲き誇る処にて",
    date: "2020/5",
    year: 2020,
    image: "hanasaki.jpeg",
    about:
      "NAZONE初期のWEB謎。花が咲き誇る場所を舞台にした、団体最初期の作品です。",
    history: ["2020.5 WEB謎"],
  },
];

function getListedWorks() {
  return WORKS.filter((w) => w.listed !== false);
}

function getWorkById(id) {
  return WORKS.find((w) => w.id === id);
}

function getFeaturedWork() {
  return WORKS.find((w) => w.featured) || getListedWorks()[0];
}

function getWorkYears() {
  return [...new Set(getListedWorks().map((w) => w.year))].sort((a, b) => b - a);
}
