import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "グラードンEX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		383
	],
	hp: 180,
	types: [
		"Fighting"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ふみあらす"
			},
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "ジャイアントクロー"
			},
			effect: {
				ja: "ダメージを与えるとき、すでに相手のバトルポケモンにダメカンが2個以上のっているなら、40ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: "80+"
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
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
