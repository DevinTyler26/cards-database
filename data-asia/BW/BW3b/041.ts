import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		624
	],
	hp: 60,
	types: [
		"Metal"
	],
	stage: "Basic",
	description: {
		ja: "全身が 刃物の ポケモン。 戦いで 刃こぼれすると 河原の 石で 刃を とぐ。"
	},
	attacks: [
		{
			name: {
				ja: "つきさす"
			},
			cost: [
				"Metal"
			],
			damage: 10
		},
		{
			name: {
				ja: "いあいぎり"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
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
			type: "Psychic",
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
