import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ジヘッド"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		634
	],
	hp: 90,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	description: {
		ja: "２つの 頭は 仲が 悪く 相手より 多く 食べることで 主導権を 握ろうと する。"
	},
	attacks: [
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "のしかかり"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "－20"
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
		ja: "モノズ"
	}
}

export default card
