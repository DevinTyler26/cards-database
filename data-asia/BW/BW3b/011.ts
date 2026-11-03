import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ダルマッカ"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		554
	],
	hp: 80,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "ダルマッカの フンは 熱いので 昔の 人は 懐に 入れて 体を 温めていたのだ。"
	},
	attacks: [
		{
			name: {
				ja: "ぶちかます"
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
			type: "Water",
			value: "×2"
		}
	],
	retreat: 3,
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
