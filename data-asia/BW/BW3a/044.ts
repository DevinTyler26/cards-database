import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		598
	],
	hp: 90,
	types: [
		"Metal"
	],
	stage: "Stage1",
	description: {
		ja: "３本の トゲつき 触手を 振り回して 戦う。 鋼の トゲは たたきつけると 大岩を 粉砕する 破壊力だ。"
	},
	attacks: [
		{
			name: {
				ja: "てっぺき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Metal"
			]
		},
		{
			name: {
				ja: "パワーウィップ"
			},
			effect: {
				ja: "相手のポケモンを1匹選び、このポケモンについているエネルギーの数×10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
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
			type: "Psychic",
			value: "－20"
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
	],
	evolveFrom: {
		ja: "テッシード"
	}
}

export default card
