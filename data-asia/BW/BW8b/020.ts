import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ボルトロスEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		642
	],
	hp: 170,
	types: [
		"Lightning"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ライデンナックル"
			},
			effect: {
				ja: "自分のトラッシュからエネルギーを1枚選び、ベンチの「プラズマ団」のポケモンにつける。"
			},
			cost: [
				"Lightning"
			],
			damage: 30
		},
		{
			name: {
				ja: "サンダーラウド"
			},
			effect: {
				ja: "このポケモンに「プラズマエネルギー」がついているなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 90
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
