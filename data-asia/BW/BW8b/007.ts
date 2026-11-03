import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		136
	],
	hp: 100,
	types: [
		"Fire"
	],
	stage: "Stage1",
	description: {
		ja: "吸いこんだ 空気を 体内の 炎袋に 送りこみ １７００度の 炎にして 吹く。"
	},
	attacks: [
		{
			name: {
				ja: "ふくしゅう"
			},
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数×10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "ヒートタックル"
			},
			effect: {
				ja: "このポケモンにも10ダメージ。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Water",
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
	],
	evolveFrom: {
		ja: "イーブイ"
	}
}

export default card
