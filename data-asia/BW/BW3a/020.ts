import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ブルンゲル"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		593
	],
	hp: 120,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "体に 吸い込んだ 海水を 勢いよく 吹き出して 前進する。 生命エネルギーが 大好物。"
	},
	attacks: [
		{
			name: {
				ja: "うらみのねん"
			},
			effect: {
				ja: "前の相手の番に、このポケモンが受けたワザのダメージと同じダメージを、相手のバトルポケモンに与える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "いのちをすいとる"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
		ja: "プルリル"
	}
}

export default card
