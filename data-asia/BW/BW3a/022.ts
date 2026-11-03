import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ルクシオ"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		404
	],
	hp: 80,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 相手を気絶させる。"
	},
	attacks: [
		{
			name: {
				ja: "とびつく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Lightning"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "ワイルドボルト"
			},
			effect: {
				ja: "このポケモンにも10ダメージ。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 60
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
		ja: "コリンク"
	}
}

export default card
