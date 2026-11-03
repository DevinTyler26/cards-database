import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシアン"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		53
	],
	hp: 90,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	description: {
		ja: "気位が 高い ポケモン。 マニアの あいだでは 額の 宝石の サイズが 話題になる。"
	},
	attacks: [
		{
			name: {
				ja: "わるだくみ"
			},
			effect: {
				ja: "自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "シャドークロー"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
		ja: "ニャース"
	}
}

export default card
