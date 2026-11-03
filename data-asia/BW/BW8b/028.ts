import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドキング"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		34
	],
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	description: {
		ja: "しっぽの 一撃は 電柱を まるで マッチ棒のように 真っ二つに へし折ってしまう。"
	},
	attacks: [
		{
			name: {
				ja: "ラブラブアタック"
			},
			effect: {
				ja: "自分のベンチにいる「ニドクイン」の数×40ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "つのドリル"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
			value: "－20"
		}
	],
	retreat: 3,
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
		ja: "ニドリーノ"
	}
}

export default card
