import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ニャース"
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		52
	],
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "夜中に 行動する 習性。 キラキラ 光るものを 見つけると 負けないくらい ひとみが 輝く。"
	},
	attacks: [
		{
			name: {
				ja: "ダブルひっかき"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "10×"
		},
		{
			name: {
				ja: "ねこキック"
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
