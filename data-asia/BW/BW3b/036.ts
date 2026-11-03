import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "カバルドン"
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		450
	],
	hp: 130,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	description: {
		ja: "意外と 怒りっぽい ポケモンで 口を 大きく 開けることで まわりに 強さを アピールする。"
	},
	attacks: [
		{
			name: {
				ja: "サンドバズーカ"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている基本エネルギーを1個選び、ベンチポケモンにつけ替えてよい。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 70
		},
		{
			name: {
				ja: "がんせきおとし"
			},
			effect: {
				ja: "このワザのダメージは抵抗力の計算をしない。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 90
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
	],
	evolveFrom: {
		ja: "ヒポポタス"
	}
}

export default card
