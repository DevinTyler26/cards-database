import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		280
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "赤いツノで 人や ポケモンの 温かな 気持ちを キャッチすると 全身が ほのかに 熱くなる。"
	},
	attacks: [
		{
			name: {
				ja: "サイコショット"
			},
			cost: [
				"Psychic"
			],
			damage: 10
		},
		{
			name: {
				ja: "ひらてうち"
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
