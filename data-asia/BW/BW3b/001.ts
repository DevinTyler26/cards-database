import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナップ"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		511
	],
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "深い 森で 暮らす ポケモン。 頭に 生えた 葉っぱを 食べると 疲れが ウソのように 消える。"
	},
	attacks: [
		{
			name: {
				ja: "タネばくだん"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
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
