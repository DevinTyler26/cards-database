import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "コロボーシ"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		401
	],
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "足が 短く こけそうになるたび 硬い 触角が こすれあって 木琴のような 音が 響く。"
	},
	attacks: [
		{
			name: {
				ja: "たたく"
			},
			cost: [
				"Grass"
			],
			damage: 10
		},
		{
			name: {
				ja: "にどずつき"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×10ダメージを追加。"
			},
			cost: [
				"Grass",
				"Grass"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
	]
}

export default card
