import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "キュレムEX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		646
	],
	hp: 180,
	types: [
		"Water"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "いてつくつばさ"
			},
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "ヘイルブリザード"
			},
			effect: {
				ja: "次の自分の番、このポケモンは「ヘイルブリザード」を使えない。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 120
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
