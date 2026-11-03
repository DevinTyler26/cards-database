import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "コジョフー"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		619
	],
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",
	description: {
		ja: "華麗な 連続技の 使い手。 精神 統一すると 技の キレと スピードが 増すのだ。"
	},
	attacks: [
		{
			name: {
				ja: "トリプルスマッシュ"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "10×"
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
