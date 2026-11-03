import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドラン♂"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		32
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "草むらの 上に 耳だけ 出して まわりの 気配を 探る。 猛毒の ツノで 身を 守る。"
	},
	attacks: [
		{
			name: {
				ja: "いっしむくいる"
			},
			effect: {
				ja: "このポケモンにダメカンがのっていないなら、このワザは失敗。"
			},
			cost: [
				"Psychic"
			],
			damage: 30
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
