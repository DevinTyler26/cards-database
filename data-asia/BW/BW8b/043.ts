import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ムックル"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		396
	],
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "群れを 作ることで １匹での 弱さを カバーし合っているが 群れが 大きくなると もめだす。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
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
