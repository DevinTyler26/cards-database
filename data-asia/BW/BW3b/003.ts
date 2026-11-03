import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "チュリネ"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		548
	],
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "水分と 栄養の 豊富な 土を 好むので チュリネの 住む 土地は 作物の 育ちが 良い。"
	},
	attacks: [
		{
			name: {
				ja: "ぶつかる"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "すいとる"
			},
			effect: {
				ja: "このポケモンのHPを「10」回復する。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
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
