import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		147
	],
	hp: 50,
	types: [
		"Dragon"
	],
	stage: "Basic",
	description: {
		ja: "目撃者が 少ないために 幻のポケモンと 呼ばれていた。 脱皮した 皮が 見つかっている。"
	},
	attacks: [
		{
			name: {
				ja: "だっぴ"
			},
			effect: {
				ja: "このポケモンのHPを「20」回復する。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "しっぽでたたく"
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
			type: "Dragon",
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
