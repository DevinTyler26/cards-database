import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ドレディア"
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		549
	],
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "頭の 花飾りの 香りには リラックスさせる 効果が ある。 手入れを 怠けると 枯れてしまう。"
	},
	attacks: [
		{
			name: {
				ja: "まんたんのかおり"
			},
			effect: {
				ja: "自分のベンチポケモンを1匹選び、HPをすべて回復する。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "ウインドミル"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
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
		ja: "チュリネ"
	}
}

export default card
