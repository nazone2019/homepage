/**
 * /naiyoubutsu 解答フォーム用データ
 *
 * 各STEPの answers に、正解とみなす表記を並べます。
 * ひらがな／カタカナ、全角／半角、長音「ー」の有無、空白は自動で同一視します。
 * 漢字や英語など、別表記を足したいときは answers に追加してください。
 *
 * 例:
 *   answers: ["きーぱー", "キーパー", "keeper"]
 *
 * 訂正文などは notice に配列で足せます（open の下に表示）。
 * 質問文の下に出したい文は questionNotice に足せます。
 */
const NAIYOUBUTSU = {
  title: "はじめに",
  startImage: "../assets/naiyoubutsu/start.png",
  thanks: [
    "このたびは\n「まずは内容物一覧をご確認ください！」を\nお買い求めいただき誠にありがとうございます！",
    "このゲームでは謎解きに必要なものが\n全てそろっているか確認するための\n「内容物一覧の紙」だけを使って\nその紙に書かれた謎の答えを\n頑張って推測していただきます！",
    "今回登場する内容物一覧は全部で10枚！\nステップごとに順番に確認していきましょう！",
    "さて、このゲームで重要になるのは\nズバリ「想像力」",
    "内容物一覧に書かれた内容物たちが\n実際にあったらどうなるのか……\nどうぞ皆さまの想像力を膨らませながら\nお楽しみください！",
    "それでは、個性豊かな内容物一覧たちを\n心ゆくまでご確認ください！！！",
  ],
  notesTitle: "注意事項",
  notes: [
    "内容のネタバレに繋がる行為はお控えください。",
    "本キットの転売は固く禁止いたします。",
  ],
  hintLabel: "ヒント",
  startLabel: "始める",
  correctMessage: "正解！",
  wrongMessage: "間違っているようです。",
  completeTitle: "COMPLETE!",
  completeMessage: [
    "おめでとうございます！",
    "あなたはたくさんの内容物一覧を確認し\n全ての謎を解き明かしました！！！",
    "さて、個性豊かな内容物一覧たちを確認する\n不思議な謎解き、いかがでしたか？",
    "感想は\n「♯まずは内容物一覧をご確認ください」\nからお待ちしております！",
    "それでは、またどこかでお会いしましょう！",
    "NAZONE一同",
  ],
  completeClearImage: "../assets/naiyoubutsu/clear.png",
  completeLinks: [
    {
      image: "../assets/naiyoubutsu/1200x400_post.png",
      alt: "感想をポストする",
      share: "tweet",
      // クリア画像カード用。クリックすると Goods 詳細へリダイレクトします
      sharePath: "../share/naiyoubutsu-clear/",
      tweetText:
        "【🎊 #まずは内容物一覧をご確認ください CLEAR‼🎊】\n\nたくさんの内容物一覧を確認し、すべての謎を解き明かした‼💡\n",
    },
    {
      image: "../assets/naiyoubutsu/1200x400_survey.png",
      alt: "アンケートに答える",
      href: "https://forms.gle/xZCVrDxfSLEQ1LnJA",
    },
  ],
  completeCredits: [
    "企画：NAZONE",
    "謎制作：シルクト、ねまき",
    "デザイン：シルクト",
  ],
  steps: [
    {
      open: "STEP1の封筒を開けてください",
      question: "アンサーシートに書かれた謎の答えは？",
      answers: ["うつりかわり", "移り変わり", "移りかわり"],
    },
    {
      open: "STEP2の封筒を開けてください",
      question: "導きの紙に書かれた謎の答えは？",
      answers: ["いとでんわ", "糸電話"],
    },
    {
      open: "STEP3の封筒を開けてください",
      question: "アンサーシートに書かれた謎の答えは？",
      answers: ["きーぱー", "キーパー"],
    },
    {
      open: "STEP4の封筒を開けてください",
      question: "なぞのかみに書かれた謎の答えは？",
      answers: ["せんすいかん", "潜水艦"],
    },
    {
      open: "STEP5の封筒を開けてください",
      question: "お仕事カードに書かれた謎の答えは？",
      answers: ["じゃがいも", "ジャガイモ"],
    },
    {
      open: "STEP6の封筒を開けてください",
      notice: [
        "【訂正のお知らせ】",
        "STEP6の内容物一覧に記載されている「ナゾシート（1～6）」につきまして、正しくは「ナゾシート（1～8）」となります。",
        "（この訂正は謎解きの内容には関係ありません）",
      ],
      question: "アンサーシートに書かれた謎の答えは？",
      answers: ["はーど", "ハード"],
    },
    {
      open: "STEP7の封筒を開けてください",
      question: "第一章の答えは？",
      answers: ["なんきょく", "南極"],
    },
    {
      open: "STEP8の封筒を開けてください",
      question: "指示書に書かれた謎の答えは？",
      answers: ["せんばづる", "せんばずる", "千羽鶴"],
    },
    {
      open: "STEP9の封筒を開けてください",
      question: "ストーリーシートに書かれた謎の答えは？",
      questionNotice: [
        "【解答方法について】",
        "答えが分かったら、〈ハートの３〉〈スペードのキング〉〈ジョーカー〉のようにカードの名前を送信しましょう。",
      ],
      answers: ["じょーかー", "ジョーカー", "joker", "JOKER"],
    },
    {
      open: "STEP10の封筒を開けてください",
      question: "謎の紙に書かれた謎の答えは？",
      answers: ["せかい", "世界","sekai","SEKAI"],
    },
  ],
};
