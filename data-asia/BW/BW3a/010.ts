import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "バオップ"
	},
	illustrator: "James Turner",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		513
	],
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "頭の ふさは 怒ると 温度が 上がり ３００度 以上になる。 木の実を ふさで 焼いて 食べる。"
	},
	attacks: [
		{
			name: {
				ja: "ほのお"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Water",
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
