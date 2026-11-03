import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ビリリダマ"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		100
	],
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "モンスターボールに そっくり。 間違って 触ると 感電したり ときには 爆発するので 危険。"
	},
	attacks: [
		{
			name: {
				ja: "ころがる"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
