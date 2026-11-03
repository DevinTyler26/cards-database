import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		58
	],
	hp: 80,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "忠実な 性格の ポケモン。 トレーナーの 命令が あるまでは 一歩も 動かない。"
	},
	attacks: [
		{
			name: {
				ja: "もえあがる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札から炎エネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ひをふく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Water",
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
	]
}

export default card
