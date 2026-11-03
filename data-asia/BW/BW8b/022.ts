import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーノ"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		33
	],
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "気性が 荒い ポケモン。 相手に 突き刺した 衝撃で ツノから 猛毒が にじみ出る。"
	},
	attacks: [
		{
			name: {
				ja: "にどげり"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: "30×"
		},
		{
			name: {
				ja: "つのでつく"
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
			type: "Psychic",
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
	],
	evolveFrom: {
		ja: "ニドラン♂"
	}
}

export default card
