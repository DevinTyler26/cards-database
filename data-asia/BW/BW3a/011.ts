import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキー"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		514
	],
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	description: {
		ja: "甘いものが 大好物。 体内の 炎を 燃やす エネルギーに なるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "もってくる"
			},
			effect: {
				ja: "自分の山札を3枚引く。"
			},
			cost: [
				"Fire"
			]
		},
		{
			name: {
				ja: "フィールドバーン"
			},
			effect: {
				ja: "場に「スタジアム」が出ているなら、30ダメージを追加し、相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Water",
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
		ja: "バオップ"
	}
}

export default card
