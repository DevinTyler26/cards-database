import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "マメパト"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		519
	],
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "街中で 暮らしている ポケモン。 人懐っこいので 公園や 広場に たくさん 集まってくる。"
	},
	attacks: [
		{
			name: {
				ja: "さぐる"
			},
			effect: {
				ja: "相手の手札を見る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "かぜおこし"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
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
	]
}

export default card
