import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "サンダー"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		145
	],
	hp: 120,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "雷雲の 中に いると 言われる 伝説の ポケモン。 雷を 自在に 操る。"
	},
	attacks: [
		{
			name: {
				ja: "でんじスパーク"
			},
			effect: {
				ja: "相手のポケモンを1匹選び、50ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "ハリケーンサンダー"
			},
			effect: {
				ja: "コインを4回投げ、オモテの数×50ダメージ。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "50×"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
