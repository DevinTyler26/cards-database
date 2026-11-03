import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "レジギガスEX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		486
	],
	hp: 180,
	types: [
		"Colorless"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ギガパワー"
			},
			effect: {
				ja: "のぞむなら、20ダメージを追加してよい。その場合、このポケモンにも20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		},
		{
			name: {
				ja: "レイジングハンマー"
			},
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
