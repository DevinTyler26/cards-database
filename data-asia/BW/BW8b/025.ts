import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		374
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "細胞 すべてが 磁石で 体から 磁力を 発信し 仲間と 会話 している。"
	},
	attacks: [
		{
			name: {
				ja: "けいさん"
			},
			effect: {
				ja: "自分の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "サイコパンチ"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
	]
}

export default card
