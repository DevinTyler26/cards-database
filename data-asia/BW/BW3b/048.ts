import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ケンホロウ"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		521
	],
	hp: 120,
	types: [
		"Colorless"
	],
	stage: "Stage2",
	description: {
		ja: "オスは 頭の 飾りを 揺らして 相手を 威嚇する。 メスの 飛行能力は オスを 上回る。"
	},
	attacks: [
		{
			name: {
				ja: "おいかぜ"
			},
			effect: {
				ja: "自分の手札からエネルギーを1枚選び、自分のポケモンにつける。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "フェザードライブ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージを追加。ウラなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－20"
		}
	],
	retreat: 0,
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
		ja: "ハトーボー"
	}
}

export default card
