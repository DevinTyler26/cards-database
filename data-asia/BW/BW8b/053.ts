import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアスEX"
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [
		380
	],
	hp: 160,
	types: [
		"Dragon"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かがやくうもう"
			},
			effect: {
				ja: "このポケモンは、特性を持つ相手のポケモンからワザのダメージや効果を受けない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ペネトレイト"
			},
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Fire",
				"Psychic",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1,
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
