import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤップ"
	},
	illustrator: "Reiko Tanoue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		515
	],
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "頭の ふさに ためた 水は 栄養 たっぷり。 植物に かけると 大きく 育つのだ。"
	},
	attacks: [
		{
			name: {
				ja: "みずでっぽう"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
