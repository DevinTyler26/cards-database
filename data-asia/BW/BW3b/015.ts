import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		131
	],
	hp: 100,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "人や ポケモンを 背中に 乗せて 海を 渡ることが 大好き。 人の 言葉を 理解できる。"
	},
	attacks: [
		{
			name: {
				ja: "なかまをよぶ"
			},
			effect: {
				ja: "自分の山札からたねポケモンを2枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				ja: "とつげき"
			},
			effect: {
				ja: "このポケモンにも20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
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
	]
}

export default card
