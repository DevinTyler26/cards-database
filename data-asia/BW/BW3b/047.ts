import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ハトーボー"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		520
	],
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	description: {
		ja: "ハトーボーの 住む 森の 奥には 争いのない 平和な 国が あると 信じられている。"
	},
	attacks: [
		{
			name: {
				ja: "かぎづめ"
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "つばさでうつ"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 50
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
		ja: "マメパト"
	}
}

export default card
