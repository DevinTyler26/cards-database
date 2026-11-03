import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		608
	],
	hp: 80,
	types: [
		"Fire"
	],
	stage: "Stage1",
	description: {
		ja: "臨終の 際に 現れて 魂が 肉体を 離れると すかさず 吸い取ってしまうのだ。"
	},
	attacks: [
		{
			name: {
				ja: "ひのこ"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Water",
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
		ja: "ヒトモシ"
	}
}

export default card
