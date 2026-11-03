import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "スターミー"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		121
	],
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "体の 中心にある 赤いコアから 夜空に 向かって ナゾの 電波を 発信している。"
	},
	attacks: [
		{
			name: {
				ja: "あやしいひかり"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "スピードスター"
			},
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Water"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 0,
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
		ja: "ヒトデマン"
	}
}

export default card
