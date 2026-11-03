import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "コジョンド"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		620
	],
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	description: {
		ja: "腕の 長い 体毛を 敵に たたきつけて 戦う。 ムチのように 敵を 痛めつける。"
	},
	attacks: [
		{
			name: {
				ja: "たぐりよせる"
			},
			effect: {
				ja: "自分の山札から「ポケモンのどうぐ」を2枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ヨガのポーズ"
			},
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
		ja: "コジョフー"
	}
}

export default card
