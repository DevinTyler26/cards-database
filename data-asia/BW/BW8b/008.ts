import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		643
	],
	hp: 130,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "炎で 世界を 燃やし尽くせる 伝説の ポケモン。 真実の 世界を 築く 人を たすける。"
	},
	attacks: [
		{
			name: {
				ja: "ミラクルヒート"
			},
			effect: {
				ja: "このポケモンの特殊状態をすべて回復する。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "クロスフレイム"
			},
			effect: {
				ja: "自分のベンチに「ゼクロム」がいるなら、40ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "80+"
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
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
