import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ビードル"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		13
	],
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "毎日 自分と 同じ 重さの 葉っぱを 食べる。 頭の 針で 襲ってきた 敵を 撃退。"
	},
	attacks: [
		{
			name: {
				ja: "さんどづき"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Grass"
			],
			damage: "10×"
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
