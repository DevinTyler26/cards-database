import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーEX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		150
	],
	hp: 170,
	types: [
		"Psychic"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "エックスボール"
			},
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "サイコドライブ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
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
