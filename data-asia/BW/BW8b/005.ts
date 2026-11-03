import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ノクタス"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		332
	],
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "夜になると 活動を はじめる。 砂漠の 暑さに 疲れ果てた 獲物を 見つけ出し 捕らえるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "はやうちニードル"
			},
			effect: {
				ja: "自分のポケモンを1匹選び、そのポケモンにも30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Grass"
			],
			damage: 60
		},
		{
			name: {
				ja: "しっぺがえし"
			},
			effect: {
				ja: "相手のサイドの残り枚数が1枚なら、60ダメージを追加し、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "30+"
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
			type: "Water",
			value: "－20"
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
		ja: "サボネア"
	}
}

export default card
