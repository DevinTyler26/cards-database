import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "カイロス"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		127
	],
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "２本の ツノで 獲物を 挟んで ちぎれるまで 離さない。 ちぎれない ときは かなたまで 投げ飛ばすのだ。"
	},
	attacks: [
		{
			name: {
				ja: "パワーペンチ"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "はさんでしめる"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
