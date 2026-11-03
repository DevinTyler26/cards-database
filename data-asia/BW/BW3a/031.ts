import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ユニラン"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		577
	],
	hp: 30,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "サイコパワーを 放出して 襲ってきた 敵を 撃退。 テレパシーで 仲間と 会話する。"
	},
	attacks: [
		{
			name: {
				ja: "ころがる"
			},
			cost: [
				"Colorless"
			],
			damage: 10
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
