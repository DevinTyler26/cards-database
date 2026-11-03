import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "サボネア"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		331
	],
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "砂漠に 生息。 体内に 水分を ためることで 水を 飲まずに ３０日間 生きられる。"
	},
	attacks: [
		{
			name: {
				ja: "どくばり"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。"
			},
			cost: [
				"Grass"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
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
