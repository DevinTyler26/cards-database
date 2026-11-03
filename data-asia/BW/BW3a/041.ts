import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		559
	],
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	description: {
		ja: "視線の 合った 相手に いきなり 頭突き 攻撃を 仕掛ける。 とても 硬い 頭がい骨を 持つ。"
	},
	attacks: [
		{
			name: {
				ja: "だっぴ"
			},
			effect: {
				ja: "このポケモンのHPを「40」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "とびかかる"
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			cost: [
				"Darkness",
				"Darkness"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "－20"
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
