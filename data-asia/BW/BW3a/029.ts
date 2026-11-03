import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ムンナ"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		517
	],
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "人や ポケモンが 見た 夢を 食べる。 楽しい 夢を 食べると ピンク色の けむりを 吐き出す。"
	},
	attacks: [
		{
			name: {
				ja: "ぶつかる"
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
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
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
