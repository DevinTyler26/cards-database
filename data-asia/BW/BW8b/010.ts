import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ウパー"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		194
	],
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "地上を 歩くときは 皮膚が 乾燥 しないように 毒の 粘膜で 体を おおっている。"
	},
	attacks: [
		{
			name: {
				ja: "たたきつける"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
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
