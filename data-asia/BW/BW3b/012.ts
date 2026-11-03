import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ"
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		607
	],
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "明かりを 灯して 道案内を するように 見せかけながら 生命力を 吸い取っている。"
	},
	attacks: [
		{
			name: {
				ja: "ほのお"
			},
			cost: [
				"Fire"
			],
			damage: 10
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
