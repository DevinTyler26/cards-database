import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "タネボー"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		273
	],
	hp: 40,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "枝に ぶらさがっていると 木の実に そっくり。 ついばもうとした ポケモンを 驚かせて 喜ぶ。"
	},
	attacks: [
		{
			name: {
				ja: "ころばす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
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
