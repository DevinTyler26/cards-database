import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "バニプッチ"
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		582
	],
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "マイナス５０度の 息を 吐く。 雪の 結晶を 作って あたりに 雪を 降らせる。"
	},
	attacks: [
		{
			name: {
				ja: "たたく"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "スノーアイス"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Metal",
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
