import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "シママ"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		522
	],
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "放電すると たてがみが 光る。 たてがみの 光り方で 仲間と コミュニケーションを とっている。"
	},
	attacks: [
		{
			name: {
				ja: "でんげき"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも10ダメージ。"
			},
			cost: [
				"Lightning",
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
