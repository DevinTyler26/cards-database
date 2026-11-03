import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "クマシュン"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		613
	],
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "いつも 鼻水を 垂らしている。 鼻水を すすって 技を 出す。 鼻水が 技の 素 なのだ。"
	},
	attacks: [
		{
			name: {
				ja: "すする"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「とばす」のダメージは「40」になる。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				ja: "とばす"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 3,
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
