import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトデマン"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		120
	],
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "赤い コアが ある限り 体が ちぎれても すぐに 再生する。 真夜中 コアが 点滅する。"
	},
	attacks: [
		{
			name: {
				ja: "じこさいせい"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。このポケモンのHPをすべて回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "みずでっぽう"
			},
			cost: [
				"Water"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
