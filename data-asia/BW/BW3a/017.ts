import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤッキー"
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		516
	],
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "頭の ふさに 水を ためる。 貯水量が 減ると しっぽで 水を 吸い上げて 補給する。"
	},
	attacks: [
		{
			name: {
				ja: "もってくる"
			},
			effect: {
				ja: "自分の山札を3枚引く。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				ja: "フィールドウェーブ"
			},
			effect: {
				ja: "場に「スタジアム」が出ているなら、30ダメージを追加し、相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		}
	],
	evolveFrom: {
		ja: "ヒヤップ"
	}
}

export default card
