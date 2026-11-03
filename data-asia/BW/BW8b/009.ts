import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		134
	],
	hp: 110,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "体の 細胞の つくりが 水の 分子に 似ているため 水に 溶けると みえなくなる。"
	},
	attacks: [
		{
			name: {
				ja: "キュアレイン"
			},
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ゴールドブレイク"
			},
			effect: {
				ja: "相手のバトルポケモンが「ポケモンEX」なら、50ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
		ja: "イーブイ"
	}
}

export default card
