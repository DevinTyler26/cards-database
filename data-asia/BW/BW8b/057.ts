import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ガブリアス"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [
		445
	],
	hp: 140,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	attacks: [
		{
			name: {
				ja: "おんそくぎり"
			},
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fighting"
			],
			damage: 60
		},
		{
			name: {
				ja: "リューノブレード"
			},
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。"
			},
			cost: [
				"Water",
				"Fighting"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Dragon",
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
	],
	evolveFrom: {
		ja: "ガバイト"
	}
}

export default card
