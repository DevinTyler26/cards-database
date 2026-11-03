import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "クルミル"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		540
	],
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "タマゴから かえると ハハコモリに 服を 作ってもらい 着せられる。 フードで 頭を 隠して 寝る。"
	},
	attacks: [
		{
			name: {
				ja: "はっぱブーメラン"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "20×"
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
	]
}

export default card
