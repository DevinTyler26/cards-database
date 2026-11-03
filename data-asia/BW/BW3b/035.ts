import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒポポタス"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		449
	],
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Basic",
	description: {
		ja: "鼻の 穴を ピタリと 閉じてから 砂の中を 歩くように 進む。 １０匹程度の 群れで 暮らす。"
	},
	attacks: [
		{
			name: {
				ja: "すなふんしゃ"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
			value: "－20"
		}
	],
	retreat: 4,
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
