import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ドッコラー"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		532
	],
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",
	description: {
		ja: "角材を 振り回して 戦う。 重い 角材を 苦も なく 持つようになると 進化は 近い。"
	},
	attacks: [
		{
			name: {
				ja: "ぶんなぐる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Fighting"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
