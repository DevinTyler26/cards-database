import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		25
	],
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "弱った 仲間の ピカチュウに 電気を流し ショックを与えて 元気を 分けることも ある。"
	},
	attacks: [
		{
			name: {
				ja: "でんきショック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning"
			],
			damage: 10
		},
		{
			name: {
				ja: "しっぽではたく"
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
