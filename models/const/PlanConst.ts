export const FreePlan = {
    title: "Freeプラン",
    price: 0,
    features: ["Trial問題解き放題", "登録不要", "Englisterを試したい人",],
    priceId: undefined
}
export const Tier3Plan = {
    title: "継続プラン",
    price: 330,
    features: ["3問/日まで", "目安15分(1問約5分)", "コツコツ継続したい人"],
    priceId: process.env.NODE_ENV === "development" ? "price_1KFP2gFZt1qcfPgxhqpUz2az" : "price_1KFP5kFZt1qcfPgxKao0ExVC"
}
export const Tier2Plan = {
    title: "がっつりプラン",
    price: 1100,
    features: ["10問/日まで", "目安1時間(1問約5分)", "復習しっかりしたい人", "本気で英語極めたい人"],
    priceId: process.env.NODE_ENV === "development" ? "price_1KFP2FFZt1qcfPgxjw7MlkW1" : "price_1KFP5oFZt1qcfPgxnkm5UlvI"
}
export const Tier1Plan = {
    title: "Unlimitedプラン",
    price: 2200,
    features: ["問題解き放題", "復習し放題", "制限が嫌いな人", "もっとEnglister開発して欲しい人"],
    priceId: process.env.NODE_ENV === "development" ? "price_1KFP15FZt1qcfPgxHlnLFBKo" : "price_1KFP5sFZt1qcfPgx9DimiUnU"
}
