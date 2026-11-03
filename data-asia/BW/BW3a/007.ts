import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "クルマユ"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		541
	],
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "クルマユの 住む 森は 草木が よく 育つ。 クルマユが 落ち葉を 栄養分に 変えているのだ。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Grass"
			],
			damage: 20
		},
		{
			name: {
				ja: "いとをはく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
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
			type: "Fire",
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
	],
	evolveFrom: {
		ja: "クルミル"
	}
}

export default card
