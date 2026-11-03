import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガEX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [
		382
	],
	hp: 170,
	types: [
		"Water"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "スマッシュターン"
			},
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替えてよい。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "デュアルスプラッシュ"
			},
			effect: {
				ja: "相手のポケモンを2匹選び、それぞれに50ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 4,
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
