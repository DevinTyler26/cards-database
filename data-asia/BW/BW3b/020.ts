import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ツンベアー"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		614
	],
	hp: 120,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "吐く 息を 自在に 凍らせる。 泳ぎが 得意で 北の 海を 泳ぎまわり 獲物を 捕まえる。"
	},
	attacks: [
		{
			name: {
				ja: "ひるませる"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンが使うワザのダメージは「-20」される。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "おそいかかる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 3,
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
		ja: "クマシュン"
	}
}

export default card
